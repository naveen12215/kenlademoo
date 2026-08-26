"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/animations/Magnetic";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicePanel() {
  const [active, setActive] = useState(services[0].slug);
  const service = useMemo(
    () => services.find((item) => item.slug === active) ?? services[0],
    [active]
  );
  const snapshot = projects.find((project) =>
    project.services.includes(service.title)
  );
  const activeIndex = Math.max(
    0,
    services.findIndex((item) => item.slug === service.slug)
  );

  return (
    <section className="flex min-h-[calc(100svh-3.5rem)] flex-col justify-center border-t border-warm-200 py-20 lg:py-24">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Practices"
          title="Four practices. One team."
          subtitle="Select a practice — we take it from architecture through launch and the years after."
          subtitleClassName="text-warm-700"
        />

        <div className="@container lg:grid lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="chip-scroll -mx-4 mb-8 flex gap-0 overflow-x-auto border-y border-warm-200 px-4 lg:sticky lg:top-20 lg:col-span-4 lg:mx-0 lg:mb-0 lg:block lg:overflow-visible lg:border-y-0 lg:px-0">
            {services.map((item, index) => {
              const isActive = item.slug === active;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActive(item.slug)}
                  className={cn(
                    "flex shrink-0 items-center gap-3 px-1 py-4 text-left transition-colors lg:w-full lg:border-b lg:border-warm-200 lg:py-5",
                    isActive ? "rail-active text-dark" : "text-warm-700 hover:text-dark"
                  )}
                >
                  <span className="index-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="whitespace-nowrap text-[15px] font-semibold lg:whitespace-normal">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-[0_18px_40px_rgba(238,122,72,0.1)] lg:col-span-8 lg:p-10">
            <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
            <AnimatePresence mode="wait">
              <motion.span
                key={`ghost-${service.slug}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease }}
                className="ghost-type absolute -top-4 right-4 text-[6.5rem] lg:-top-8 lg:right-8 lg:text-[10rem]"
                aria-hidden="true"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.38, ease }}
                className="relative"
              >
                <p className="index-num mb-4">
                  {String(activeIndex + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-3xl font-extrabold tracking-tight text-dark lg:text-4xl">
                  {service.title}
                </h3>
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
                    <Link
                      href={`/projects/${snapshot.slug}`}
                      className="group mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange hover:text-brand-coral"
                    >
                      Open the file
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}

                <div className="mt-8">
                  <Magnetic strength={0.18}>
                    <Button href={`/services/${service.slug}`} variant="outline">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Magnetic>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
