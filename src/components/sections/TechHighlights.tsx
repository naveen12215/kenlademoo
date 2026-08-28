import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { techIconMap } from "@/lib/tech-icons";
import { ArrowRight } from "lucide-react";

const highlightedTech = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "Node.js", icon: "nodejs" },
  { name: "AWS", icon: "aws" },
  { name: "LangChain", icon: "langchain" },
  { name: "Claude", icon: "claude" },
  { name: ".NET", icon: "dotnet" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
];

export function TechHighlights() {
  return (
    <section className="bg-warm-100/70 py-12 lg:py-16">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Stack"
          title="We choose tools that fit the problem."
          subtitle="The stack from the Kenla company profile — what we use in production today."
        />

        <StaggerChildren className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" staggerDelay={0.045}>
            {highlightedTech.map((tech, index) => {
              const entry = techIconMap[tech.icon];
              return (
                <StaggerItem key={tech.name}>
                <li
                  className="group relative overflow-hidden rounded-xl bg-white px-5 py-7 shadow-[0_12px_28px_rgba(238,122,72,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(238,122,72,0.14)]"
                >
                  <span className="brand-gradient-bg absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="mb-4 flex items-center justify-between">
                    <p className="index-num">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    {entry &&
                      (() => {
                        const { icon: Icon, color } = entry;
                        return (
                          <Icon
                            size={28}
                            className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                            style={{ color }}
                            aria-hidden="true"
                          />
                        );
                      })()}
                  </div>
                  <p className="font-heading text-xl font-extrabold tracking-tight text-dark">
                    {tech.name}
                  </p>
                </li>
                </StaggerItem>
              );
            })}
        </StaggerChildren>

        <div className="mt-10">
          <Button href="/technologies" size="md">
            Open the full stack
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
