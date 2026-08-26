import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { CtaBand } from "@/components/sections/CtaBand";
import { projects } from "@/data/projects";
import { iconForTechName } from "@/lib/tech-icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.challenge.slice(0, 160),
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="pt-10 pb-12 lg:pt-14 lg:pb-16">
        <Container>
          <FadeIn>
            <Button href="/projects" variant="outline" size="sm">
              <ArrowLeft className="h-3.5 w-3.5" />
              All files
            </Button>
          </FadeIn>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <FadeIn>
                <p className="eyebrow mb-4">{project.industry}</p>
              </FadeIn>
              <FadeIn direction="up" delay={0.06}>
                <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-dark sm:text-5xl lg:text-[3.6rem]">
                  {project.title}
                </h1>
              </FadeIn>
            </div>
            <FadeIn delay={0.1} className="lg:col-span-4">
              <p className="text-[15px] font-medium text-warm-800">
                {project.client}
              </p>
              <p className="mt-2 text-[15px] font-medium text-warm-700">
                {project.services.join(" · ")}
              </p>
            </FadeIn>
          </div>
          <div className="mt-10 h-px bg-gradient-to-r from-brand-gold via-brand-orange to-transparent lg:mt-14" />
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              <FadeIn>
                <FileBlock label="The challenge" body={project.challenge} />
              </FadeIn>
              <FadeIn>
                <FileBlock label="Our solution" body={project.solution} />
              </FadeIn>
              <FadeIn>
                <div className="rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] lg:p-8">
                  <h2 className="font-heading mb-5 text-xl font-extrabold tracking-tight text-dark">
                    Technologies used
                  </h2>
                  <ul className="flex flex-wrap gap-2.5">
                    {project.technologies.map((tech) => {
                      const entry = iconForTechName(tech);
                      return (
                        <li
                          key={tech}
                          className="flex items-center gap-2 rounded-md bg-warm-50 px-3 py-2"
                        >
                          {entry &&
                            (() => {
                              const { icon: Icon, color } = entry;
                              return (
                                <Icon
                                  size={16}
                                  className="shrink-0"
                                  style={{ color }}
                                  aria-hidden="true"
                                />
                              );
                            })()}
                          <span className="text-[13px] font-semibold text-warm-800">
                            {tech}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <FadeIn>
                <div className="rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] lg:p-8">
                  <h2 className="font-heading mb-5 text-xl font-extrabold tracking-tight text-dark">
                    Results
                  </h2>
                  <ol>
                    {project.results.map((result, index) => (
                      <li
                        key={result}
                        className="border-b border-warm-100 py-4 text-[15px] leading-relaxed font-medium text-warm-800 last:border-b-0"
                      >
                        <span className="index-num mr-2">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {result}
                      </li>
                    ))}
                  </ol>
                </div>
              </FadeIn>

              {project.testimonial && (
                <FadeIn delay={0.08}>
                  <blockquote className="mt-8 rounded-xl bg-[color-mix(in_srgb,#f6ba29_8%,white)] p-6 text-[17px] leading-snug font-medium text-warm-800 italic lg:p-8">
                    &ldquo;{project.testimonial.quote}&rdquo;
                    <footer className="mt-4 text-[13px] font-semibold tracking-wide text-warm-700 not-italic">
                      {project.testimonial.role}
                    </footer>
                  </blockquote>
                </FadeIn>
              )}
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-warm-200 py-16 lg:py-24">
          <Container>
            <h2 className="font-heading mb-8 text-2xl font-extrabold tracking-tight text-dark">
              More files
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-[0_10px_24px_rgba(238,122,72,0.08)]">
                    <p className="text-[12px] font-bold tracking-[0.14em] text-brand-orange uppercase">
                      {item.industry}
                    </p>
                    <p className="font-heading mt-2 text-xl font-bold text-warm-800">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[15px] font-medium text-warm-700">
                      {item.client}
                    </p>
                    <div className="mt-5">
                      <Button href={`/projects/${item.slug}`} size="sm">
                        Open
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBand
        title="Have a challenge like this?"
        body="Bring the brief as it stands. We'll staff the same discipline and write back with a clear next step."
      />
    </>
  );
}

function FileBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] lg:p-8">
      <h2 className="font-heading mb-4 text-xl font-extrabold tracking-tight text-dark">
        {label}
      </h2>
      <p className="text-[15px] leading-relaxed font-medium text-warm-800 md:text-[17px]">
        {body}
      </p>
    </div>
  );
}
