"use server";

import { z } from "zod";
import { services } from "@/data/services";

const allowedServices = new Set(services.map((service) => service.title));

const emptyToUndefined = (value: unknown) => {
  if (value === null || value === undefined) return undefined;
  if (typeof value !== "string") return value;
  const next = value.trim();
  return next === "" ? undefined : next;
};

const trim = (value: unknown) =>
  typeof value === "string" ? value.trim() : value;

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
      .max(4000)
  ),
  website: z.preprocess(emptyToUndefined, z.string().optional()),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
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

  if (parsed.data.website) {
    return {
      success: true,
      message:
        "Thanks. A Kenla engineer will write back within one business day.",
    };
  }

  try {
    const firstName = parsed.data.name.split(/\s+/)[0] || parsed.data.name;
    console.log("Contact form submission:", {
      ...parsed.data,
      website: undefined,
    });

    return {
      success: true,
      message: `Thanks, ${firstName}. A Kenla engineer will write back within one business day.`,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again in a moment.",
    };
  }
}
