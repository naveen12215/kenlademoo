import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const points = [
  {
    title: "Technical knowledge",
    description:
      "Practiced engineering across web, mobile, AI, cloud, and blockchain — not a single-stack shop.",
  },
  {
    title: "Customer relationships",
    description:
      "Direct, durable working relationships. We stay close to the problem after the first release.",
  },
  {
    title: "Custom systems, not templates",
    description:
      "Applications built to the client’s process and constraints — not a generic package with a logo swap.",
  },
  {
    title: "Regional presence, global service",
    description:
      "Chennai engineering with delivery experience for U.S., Indian, and Middle Eastern clients.",
  },
  {
    title: "Delivery quality",
    description:
      "Testing, review, and operational discipline treated as part of the engagement, not an afterthought.",
  },
  {
    title: "In-house talent training",
    description:
      "We grow engineers internally so the team that starts a system can still own it years later.",
  },
];

export function WhyKenla() {
  return (
    <section
      id="areas-of-strength"
      className="scroll-mt-[6.25rem] bg-warm-100/60 py-12 lg:py-16 lg:scroll-mt-[calc(var(--chrome-header)+1rem)]"
    >
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Areas of strength"
          title="How we conduct business."
          subtitle="These six strengths are how we differentiate ourselves."
        />

        <StaggerChildren className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {points.map((item, index) => (
            <StaggerItem key={item.title}>
              <div className="studio-value group relative h-full overflow-hidden rounded-xl bg-white p-8 shadow-[0_12px_28px_rgba(238,122,72,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(238,122,72,0.14)] md:p-10">
                <span className="brand-gradient-bg absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
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
