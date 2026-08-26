import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CtaBandProps {
  title?: string;
  body?: string;
  variant?: "gradient" | "quiet";
}

export function CtaBand({
  title = "Ready when you are.",
  body = "Bring a spec, a sketch, or a problem that has been sitting in a backlog. We take it end to end.",
  variant = "quiet",
}: CtaBandProps) {
  const isGradient = variant === "gradient";

  return (
    <section
      className={cn(
        "relative",
        isGradient
          ? "brand-gradient-bg lg:-ml-24 lg:w-[calc(100%+6rem)]"
          : "bg-warm-100"
      )}
    >
      <Container className="relative py-20 lg:py-24">
        <FadeIn>
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2
                className={cn(
                  "max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]",
                  isGradient ? "text-white" : "text-dark"
                )}
              >
                {title}
              </h2>
              <p
                className={cn(
                  "mt-4 max-w-lg text-[17px] leading-relaxed font-medium lg:text-xl",
                  isGradient ? "text-white/90" : "text-warm-800"
                )}
              >
                {body}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Magnetic>
                {isGradient ? (
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                    className="bg-white text-dark hover:bg-warm-100"
                  >
                    Start a conversation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button href="/contact" size="lg">
                    Start a conversation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </Magnetic>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
