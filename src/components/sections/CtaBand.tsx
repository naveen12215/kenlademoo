import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CropMarks } from "@/components/ui/CropMarks";

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
        isGradient ? "brand-gradient-bg cta-wash" : "bg-warm-100"
      )}
    >
      <Container className="relative py-14 lg:py-20">
        {isGradient && (
          <CropMarks className="hidden sm:block [&_.crop-mark]:border-white/70" />
        )}
        <FadeIn>
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2
                className={cn(
                  "display-h2 max-w-2xl font-extrabold tracking-tight",
                  isGradient ? "text-white" : "text-dark"
                )}
              >
                {title}
              </h2>
              <p
                className={cn(
                  "mt-4 max-w-lg text-lg leading-relaxed font-medium",
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
