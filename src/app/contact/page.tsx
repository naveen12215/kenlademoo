import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { COMPANY_NAME } from "@/lib/constants";
import { canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${COMPANY_NAME}. Let's discuss your next software project, AI solution, or cloud infrastructure needs.`,
  ...canonicalFor("/contact"),
};

export default function ContactPage() {
  return <ContactForm />;
}
