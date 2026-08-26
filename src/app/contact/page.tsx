import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactForm } from "@/components/sections/ContactForm";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${COMPANY_NAME}. Let's discuss your next software project, AI solution, or cloud infrastructure needs.`,
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's Build Something Great"
        body="Whether you have a detailed specification or just a spark of an idea, our team is ready to help. We bring over 15 years of software engineering experience to every conversation."
        bodyClassName="text-[15px] font-medium text-warm-700"
        marks={false}
      />

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
