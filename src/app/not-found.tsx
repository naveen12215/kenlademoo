import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { CropMarks } from "@/components/ui/CropMarks";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden py-16">
      <p className="ghost-type absolute top-12 -left-4 text-[28vw] lg:text-[10rem]" aria-hidden="true">
        404
      </p>
      <Container className="relative">
        <CropMarks className="hidden sm:block" />
        <p className="font-mono mb-8 text-[11px] tracking-[0.18em] text-warm-400">
          KS-00  MISSING
        </p>
        <p className="eyebrow mb-6">Error</p>
        <p className="font-heading text-7xl font-extrabold tracking-tight sm:text-8xl">
          <GradientText>404</GradientText>
        </p>
        <h1 className="mt-6 font-heading text-3xl font-bold text-dark">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-warm-600">
          That URL isn&apos;t in the cabinet. Head home, or send a note — we
          will point you the right way.
        </p>
        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
