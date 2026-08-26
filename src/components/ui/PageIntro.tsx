import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/ui/Container";
import { CropMarks } from "@/components/ui/CropMarks";
import { cn } from "@/lib/utils";

interface PageIntroProps {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  sheet?: string;
  bodyClassName?: string;
  marks?: boolean;
}

export function PageIntro({
  eyebrow,
  title,
  body,
  sheet,
  bodyClassName,
  marks = true,
}: PageIntroProps) {
  return (
    <section className="relative pt-10 pb-12 lg:pt-14 lg:pb-16">
      <Container className="relative">
        {marks && <CropMarks className="hidden sm:block" />}
        {sheet && (
          <FadeIn>
            <p className="mb-5 font-heading text-[12px] font-bold tracking-[0.16em] text-warm-500 uppercase">
              {sheet}
            </p>
          </FadeIn>
        )}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.06}>
              <p className="eyebrow mb-4">{eyebrow}</p>
              <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-dark sm:text-5xl lg:text-[3.6rem]">
                {title}
              </h1>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={0.12}>
              <p
                className={cn(
                  "max-w-sm text-base leading-relaxed font-medium text-warm-700 lg:ml-auto",
                  bodyClassName
                )}
              >
                {body}
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="mt-10 h-px bg-gradient-to-r from-brand-gold via-brand-orange to-transparent lg:mt-14" />
      </Container>
    </section>
  );
}
