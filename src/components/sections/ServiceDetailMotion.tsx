"use client";

import { startTransition, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { projectsForService } from "@/lib/tech-used-in";
import { iconForTechName } from "@/lib/tech-icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Magnetic } from "@/components/animations/Magnetic";
import { ServiceRail } from "@/components/sections/ServiceRail";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { CtaBand } from "@/components/sections/CtaBand";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServiceDetailMotion({ slug: initialSlug }: { slug: string }) {
  const router = useRouter();
  const [slug, setSlug] = useState(initialSlug);

  useEffect(() => {
    setSlug(initialSlug);
  }, [initialSlug]);

  const service =
    services.find((item) => item.slug === slug) ??
    services.find((item) => item.slug === initialSlug) ??
    services[0];
  const snapshots = projectsForService(service.title);
  const snapshot = snapshots[0];
  const activeIndex = Math.max(
    0,
    services.findIndex((item) => item.slug === service.slug)
  );

  function select(next: string) {
    if (next === slug) return;
    setSlug(next);
    startTransition(() => {
      router.replace(`/services/${next}`, { scroll: false });
    });
  }

  return (
    <>
      <section className="border-t border-warm-200 py-12 lg:py-16">
        <Container>
          <SectionHeading
            index="03"
            eyebrow="Services"
            title="What we build. One team."
            subtitle="Clients bring the problem; we engineer the system. Staff across these practices as the engagement requires."
            titleAs="h2"
          />
      <div className="@container lg:grid lg:grid-cols-12 lg:items-start lg:gap-16">
        <ServiceRail
          activeSlug={service.slug}
          onSelect={select}
          layoutId="service-rail-page"
        />

        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.38, ease }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white p-5 shadow-[0_18px_40px_rgba(238,122,72,0.1)] lg:p-8">
                <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
                <span
                  className="ghost-type pointer-events-none absolute -top-4 right-4 text-[4.5rem] lg:-top-6 lg:right-6 lg:text-[6.5rem]"
                  aria-hidden="true"
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <p className="index-num mb-4">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </p>
                  <h1 className="font-heading text-2xl font-extrabold tracking-tight text-dark lg:text-3xl">
                    {service.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed font-medium text-warm-800 md:text-[17px]">
                    {service.longDescription}
                  </p>
                  <p className="mt-6 text-[15px] leading-relaxed font-medium text-warm-700">
                    {service.technologies.slice(0, 8).join("  ·  ")}
                  </p>

                  {snapshot && (
                    <div className="mt-8 border-l-2 border-brand-orange/80 pl-5">
                      <p className="eyebrow mb-2">In the field</p>
                      <p className="font-heading text-xl font-bold text-dark">
                        {snapshot.title}
                      </p>
                      <p className="mt-2 line-clamp-2 text-[15px] font-medium text-warm-800">
                        {snapshot.challenge}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <Link
                          href={`/projects/${snapshot.slug}`}
                          className="group inline-flex items-center gap-1 text-sm font-semibold text-brand-orange hover:text-brand-coral"
                        >
                          Open the file
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        {snapshots.length > 1 && (
                          <a
                            href="#file"
                            className="text-sm font-semibold text-warm-700 hover:text-dark"
                          >
                            {snapshots.length} files in this service
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Magnetic strength={0.18}>
                      <Button href="/contact" size="md">
                        Discuss your project
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </Magnetic>
                    <Button href="/services" variant="outline" size="md">
                      All services
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-16">
                <section id="deliverables">
                  <FadeIn>
                    <h2 className="font-heading mb-6 text-2xl font-extrabold tracking-tight text-dark">
                      What we deliver
                    </h2>
                  </FadeIn>
                  <StaggerChildren className="divide-y divide-warm-100 overflow-hidden rounded-xl bg-white shadow-[0_12px_28px_rgba(238,122,72,0.08)]">
                    {service.features.map((feature, index) => (
                      <StaggerItem key={feature}>
                        <div className="flex gap-4 px-5 py-4">
                          <span className="index-num mt-0.5">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm leading-relaxed font-medium text-warm-800">
                            {feature}
                          </span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </section>

                <section id="stack">
                  <FadeIn>
                    <h2 className="font-heading mb-6 text-2xl font-extrabold tracking-tight text-dark">
                      Technologies we use
                    </h2>
                  </FadeIn>
                  <StaggerChildren
                    className="grid grid-cols-2 gap-3 sm:grid-cols-3"
                    staggerDelay={0.045}
                  >
                    {service.technologies.map((tech) => {
                      const entry = iconForTechName(tech);
                      return (
                        <StaggerItem key={tech}>
                          <div className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-white px-4 py-3.5 shadow-[0_8px_20px_rgba(238,122,72,0.07)]">
                            <span className="brand-gradient-bg absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            {entry &&
                              (() => {
                                const { icon: Icon, color } = entry;
                                return (
                                  <Icon
                                    size={22}
                                    className="shrink-0"
                                    style={{ color }}
                                    aria-hidden="true"
                                  />
                                );
                              })()}
                            <span className="text-sm font-semibold text-warm-800">
                              {tech}
                            </span>
                          </div>
                        </StaggerItem>
                      );
                    })}
                  </StaggerChildren>
                </section>

                <section id="use-cases">
                  <FadeIn>
                    <h2 className="font-heading mb-6 text-2xl font-extrabold tracking-tight text-dark">
                      Use cases
                    </h2>
                  </FadeIn>
                  <StaggerChildren
                    className="grid gap-3 sm:grid-cols-2"
                    staggerDelay={0.05}
                  >
                    {service.useCases.map((useCase, index) => (
                      <StaggerItem key={useCase} className="h-full">
                        <div className="studio-value group relative h-full overflow-hidden rounded-xl bg-white p-5 shadow-[0_8px_20px_rgba(238,122,72,0.07)] md:p-6">
                          <span className="brand-gradient-bg absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                          <p className="index-num mb-3">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="text-[15px] font-medium leading-relaxed text-warm-800">
                            {useCase}
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </section>

                {snapshots.length > 0 && (
                  <section id="file">
                    <FadeIn>
                      <h2 className="font-heading mb-6 text-2xl font-extrabold tracking-tight text-dark">
                        In the field
                      </h2>
                    </FadeIn>
                    <StaggerChildren className="space-y-4" staggerDelay={0.06}>
                      {snapshots.map((item) => (
                        <StaggerItem key={item.slug}>
                          <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] lg:p-8">
                            <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
                            <p className="text-[11px] font-bold tracking-[0.16em] text-brand-orange uppercase">
                              {item.industry}
                            </p>
                            <h3 className="font-heading mt-2 text-2xl font-extrabold tracking-tight text-warm-800">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-[15px] font-medium text-warm-700">
                              {item.client}
                            </p>
                            <p className="mt-4 max-w-xl text-[15px] leading-relaxed font-medium text-warm-800">
                              {item.challenge}
                            </p>
                            <Link
                              href={`/projects/${item.slug}`}
                              className="group mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange"
                            >
                              Open the file
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerChildren>
                  </section>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
        </Container>
      </section>

      <CtaBand
        title="Ready when you are."
        body={`Tell us what you're building. We'll staff ${service.title.toLowerCase()} and reply with a clear next step.`}
      />
    </>
  );
}
