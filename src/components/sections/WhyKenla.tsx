import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const points = [
  {
    title: "Established since 2009",
    description:
      "Fifteen years of production software. We have stayed through every cycle — that longevity is the quiet part of the contract.",
  },
  {
    title: "End-to-end, one team",
    description:
      "Architecture, build, cloud, and the years after launch. No hand-offs between a pitch deck and a pager.",
  },
  {
    title: "The stack that is current",
    description:
      "AI/ML, cloud-native, blockchain, modern frontend — we invest in the tools your product will still be on in five years.",
  },
];

export function WhyKenla() {
  return (
    <section className="bg-warm-100/60 py-24 lg:py-32">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Why Kenla"
          title="A service company that still writes the software."
          subtitle="From first sketch to production, we stay on the work."
          subtitleClassName="text-warm-700"
        />

        <StaggerChildren className="grid gap-4 md:grid-cols-3">
          {points.map((item, index) => (
            <StaggerItem key={item.title}>
              <div className="studio-value h-full rounded-xl bg-white p-8 shadow-[0_12px_28px_rgba(238,122,72,0.08)] md:p-10">
                <p className="index-num mb-6">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-2xl font-extrabold tracking-tight text-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed font-medium text-warm-800">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
