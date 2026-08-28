"use server";

import { z } from "zod";
import { services } from "@/data/services";

const allowedServices = new Set(services.map((service) => service.title));

// ── Helpers ────────────────────────────────────────────────────────────────

const emptyToUndefined = (value: unknown) => {
  if (value === null || value === undefined) return undefined;
  if (typeof value !== "string") return value;
  const next = value.trim();
  return next === "" ? undefined : next;
};

const trim = (value: unknown) =>
  typeof value === "string" ? value.trim() : value;

/** Strip the most common XSS vectors from free-text fields. */
function sanitizeText(value: string): string {
  return value
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim();
}

// ── Schema ─────────────────────────────────────────────────────────────────

const contactSchema = z.object({
  name: z.preprocess(
    trim,
    z.string().min(2, "Name must be at least 2 characters").max(80)
  ),
  email: z.preprocess(
    (value) =>
      typeof value === "string" ? value.trim().toLowerCase() : value,
    z.string().email("Please enter a valid email address").max(120)
  ),
  company: z.preprocess(emptyToUndefined, z.string().max(100).optional()),
  service: z.preprocess((value) => {
    const next = emptyToUndefined(value);
    if (typeof next !== "string") return undefined;
    return allowedServices.has(next) ? next : undefined;
  }, z.string().max(120).optional()),
  message: z.preprocess(
    trim,
    z
      .string()
      .min(10, "Tell us a little more — at least 10 characters")
      .max(4000, "Message is too long — please keep it under 4,000 characters")
  ),
  /** Honeypot — must be empty. */
  website: z.preprocess(emptyToUndefined, z.string().optional()),
});

// ── Types ──────────────────────────────────────────────────────────────────

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

// ── Action ─────────────────────────────────────────────────────────────────

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Guard: formData must exist
  if (!(formData instanceof FormData)) {
    return { success: false, message: "Invalid submission." };
  }

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
    website: formData.get("website"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const flattened = parsed.error.flatten();
    return {
      success: false,
      message: "Please fix the notes below — then send it through.",
      errors: flattened.fieldErrors as Record<string, string[]>,
    };
  }

  // Honeypot check — bots fill this field, humans leave it blank
  if (parsed.data.website) {
    return {
      success: true,
      message:
        "Thanks. A Kenla engineer will write back within one business day.",
    };
  }

  try {
    const firstName = parsed.data.name.split(/\s+/)[0] ?? parsed.data.name;

    // Sanitize free-text before logging / forwarding
    const sanitized = {
      name: sanitizeText(parsed.data.name),
      email: parsed.data.email,
      company: parsed.data.company ? sanitizeText(parsed.data.company) : undefined,
      service: parsed.data.service,
      message: sanitizeText(parsed.data.message),
    };

    console.log("Contact form submission:", sanitized);

    return {
      success: true,
      message: `Thanks, ${firstName}. A Kenla engineer will write back within one business day.`,
    };
  } catch (err) {
    // Log the error server-side without leaking details to the client
    console.error("Contact form error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again in a moment.",
    };
  }
}
