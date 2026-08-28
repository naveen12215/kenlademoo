import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { COMPANY_NAME } from "@/lib/constants";
import { canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `New work and partnerships with ${COMPANY_NAME}. Adyar, Chennai office. Reach Venkat Munsif — +91 95000 62603, venkatm@kenlasystems.com.`,
  ...canonicalFor("/contact"),
};

export default function ContactPage() {
  return <ContactForm />;
}
