import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}

export function LegalPage({ eyebrow, title, updated, children }: LegalPageProps) {
  return (
    <>
      <PageIntro
        eyebrow={eyebrow}
        title={title}
        body={`Last updated ${updated}. Written for the Kenla Systems marketing site and the notes we receive through it.`}
        marks={false}
      />
      <section className="pb-14 lg:pb-16">
        <Container>
          <div className="legal-copy max-w-2xl space-y-8 text-[15px] leading-relaxed font-medium text-warm-800">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
