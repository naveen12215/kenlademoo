"use server";

import { z } from "zod";

const emptyToUndefined = (value: unknown) =>
  value === null || value === "" ? undefined : value;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.preprocess(emptyToUndefined, z.string().optional()),
  service: z.preprocess(emptyToUndefined, z.string().optional()),
  message: z.string().min(10, "Tell us a little more — at least 10 characters"),
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

  try {
    console.log("Contact form submission:", parsed.data);

    return {
      success: true,
      message: `Thanks, ${parsed.data.name.split(" ")[0]}. A Kenla engineer will write back within one business day.`,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again in a moment.",
    };
  }
}
