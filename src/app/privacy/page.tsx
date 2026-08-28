import type { Metadata } from "next";
import { LegalPage } from "@/components/seo/LegalPage";
import { COMPANY_EMAIL, COMPANY_NAME, COMPANY_REACH_EMAIL } from "@/lib/constants";
import { canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${COMPANY_NAME} handles the information you send through this website.`,
  ...canonicalFor("/privacy"),
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy" updated="27 August 2026">
      <section>
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-dark">
          What we collect
        </h2>
        <p className="mt-3">
          If you write through the contact form, we receive the name, email,
          company, service, and message you enter. We do not sell that
          information. We do not run advertising pixels on this site.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-dark">
          How we use it
        </h2>
        <p className="mt-3">
          We use contact notes to reply, to staff a conversation, and to keep a
          record of what you asked us to look at. Emails are stored with our
          mail host. We keep them as long as the conversation is active, then
          as long as we still need them for a live engagement or a legal duty.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-dark">
          Cookies
        </h2>
        <p className="mt-3">
          This site uses only cookies that make the pages work. We do not use
          them to advertise.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-dark">
          Your requests
        </h2>
        <p className="mt-3">
          To read, correct, or delete a note you sent, write to{" "}
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="font-semibold text-brand-orange hover:text-brand-coral"
          >
            {COMPANY_EMAIL}
          </a>
          {" or "}
          <a
            href={`mailto:${COMPANY_REACH_EMAIL}`}
            className="font-semibold text-brand-orange hover:text-brand-coral"
          >
            {COMPANY_REACH_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
