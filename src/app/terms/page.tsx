import type { Metadata } from "next";
import { LegalPage } from "@/components/seo/LegalPage";
import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/constants";
import { canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for the ${COMPANY_NAME} website.`,
  ...canonicalFor("/terms"),
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms" updated="27 August 2026">
      <section>
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-dark">
          The site
        </h2>
        <p className="mt-3">
          These pages describe {COMPANY_NAME} and the work we do. They are not a
          proposal, a contract, or a promise of capacity. Project work starts
          only when both sides sign a separate agreement.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-dark">
          Case studies
        </h2>
        <p className="mt-3">
          Files on this site are representative engagements from the Kenla
          company profile. Names and details follow that source. Some wording
          is shortened for the page.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-dark">
          Your use
        </h2>
        <p className="mt-3">
          Do not scrape, copy, or republish the mark, the writing, or the case
          files as your own. If you send a note through the form, you confirm
          the details are yours to share.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-dark">
          Contact
        </h2>
        <p className="mt-3">
          Questions on these terms:{" "}
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="font-semibold text-brand-orange hover:text-brand-coral"
          >
            {COMPANY_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
