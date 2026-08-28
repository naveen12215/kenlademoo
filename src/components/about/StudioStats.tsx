import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { companyStats } from "@/lib/constants";

export function StudioStats() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <FadeIn>
          <SectionHeading
            index="04"
            eyebrow="Proof"
            title="By the numbers"
            subtitle="What the company profile states — not a marketing scoreboard."

          />
        </FadeIn>

        <div className="overflow-hidden rounded-xl bg-white shadow-[0_18px_40px_rgba(238,122,72,0.1)]">
          <div className="brand-gradient-bg h-1" />
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4">
            {companyStats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <div className="group relative border-warm-100 px-6 py-8 max-md:[&:nth-child(-n+2)]:border-b max-md:[&:nth-child(odd)]:border-r md:border-r md:px-8 md:py-10 md:last:border-r-0 transition-transform duration-300 hover:-translate-y-0.5">
                  <span className="brand-gradient-bg absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  <p className="index-num mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-heading text-4xl font-extrabold tracking-tight text-brand-orange lg:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-[13px] font-semibold text-warm-700">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  );
}
