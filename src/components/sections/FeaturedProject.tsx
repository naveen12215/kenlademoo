"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5000;
const ease = [0.22, 1, 0.36, 1] as const;

export function FeaturedProject() {
  const [index, setIndex] = useState(0);
  const featured = projects[index];

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % projects.length);
    }, INTERVAL_MS);

    return () => window.clearTimeout(id);
  }, [index]);

  return (
    <section className="border-t border-warm-200 py-20 lg:py-28">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="File"
          title="One plate from the cabinet."
          subtitle="Problem, numbers, the line the client still repeats."
        />

        <FadeIn>
          <article className="relative overflow-hidden rounded-xl bg-white shadow-[0_18px_40px_rgba(238,122,72,0.1)]">
            <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease }}
              >
                <span
                  className="ghost-type absolute -top-8 right-4 text-[8rem] lg:text-[11rem]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative grid gap-6 border-b border-warm-100 p-6 lg:grid-cols-12 lg:items-end lg:p-8">
                  <p className="text-[11px] font-bold tracking-[0.16em] text-brand-orange uppercase lg:col-span-3">
                    {featured.industry}
                  </p>
                  <div className="lg:col-span-7">
                    <h3 className="font-heading text-3xl font-extrabold tracking-tight text-dark lg:text-4xl">
                      {featured.title}
                    </h3>
                    <p className="mt-1 text-[15px] font-medium text-warm-700">{featured.client}</p>
                  </div>
                  <Magnetic
                    strength={0.16}
                    className="lg:col-span-2 lg:justify-self-end"
                  >
                    <Button
                      href={`/projects/${featured.slug}`}
                      variant="outline"
                      size="md"
                    >
                      Open
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Magnetic>
                </div>

                <div className="relative grid lg:grid-cols-12">
                  <div className="space-y-6 p-6 lg:col-span-7 lg:p-8">
                    <p className="max-w-xl text-[15px] leading-relaxed font-medium text-warm-800 md:text-[17px]">
                      {featured.challenge}
                    </p>
                    <p className="text-[15px] leading-relaxed font-medium text-warm-700">
                      {featured.technologies.join("  ·  ")}
                    </p>
                  </div>
                  <div className="border-t border-warm-100 bg-[color-mix(in_srgb,#f6ba29_7%,white)] p-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:p-8">
                    <ol>
                      {featured.results.slice(0, 3).map((result, resultIndex) => (
                        <li
                          key={result}
                          className="border-b border-warm-200/70 py-3 text-[15px] leading-relaxed font-medium text-warm-800 last:border-b-0"
                        >
                          <span className="index-num mr-3">
                            {String(resultIndex + 1).padStart(2, "0")}
                          </span>
                          {result}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {featured.testimonial && (
                  <blockquote className="relative border-t border-warm-100 px-6 py-7 text-[17px] leading-snug font-medium text-warm-800 italic lg:px-8">
                    &ldquo;{featured.testimonial.quote}&rdquo;
                    <footer className="mt-3 text-[13px] font-semibold tracking-wide text-warm-700 not-italic">
                      {featured.testimonial.role}
                    </footer>
                  </blockquote>
                )}
              </motion.div>
            </AnimatePresence>
          </article>
        </FadeIn>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Project files">
            {projects.map((project, projectIndex) => (
              <button
                key={project.slug}
                type="button"
                aria-label={project.title}
                aria-current={projectIndex === index}
                onClick={() => setIndex(projectIndex)}
                className={cn(
                  "h-1.5 overflow-hidden rounded-full transition-all duration-300",
                  projectIndex === index
                    ? "w-10 bg-warm-200"
                    : "w-2 bg-warm-300 hover:bg-warm-400"
                )}
              >
                {projectIndex === index && (
                  <span
                    key={featured.slug}
                    className="brand-gradient-bg block h-full origin-left"
                    style={{
                      animation: `rule-draw ${INTERVAL_MS}ms linear both`,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          <Button href="/projects" variant="ghost">
            All files
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
