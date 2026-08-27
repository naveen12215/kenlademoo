"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { projectsForService } from "@/lib/tech-used-in";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/animations/Magnetic";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicePanel({
  headingAs = "h2",
}: {
  headingAs?: "h1" | "h2";
}) {
  const [active, setActive] = useState(services[0].slug);
  const service = useMemo(
    () => services.find((item) => item.slug === active) ?? services[0],
    [active]
  );
  const snapshots = projectsForService(service.title);
  const snapshot = snapshots[0];
  const activeIndex = Math.max(
    0,
    services.findIndex((item) => item.slug === service.slug)
  );

  return (
    <section className="border-t border-warm-200 py-12 lg:py-16">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Services"
          title="Nine services. One team."
          subtitle="Select a service — we take it from architecture through launch and the years after."
          titleAs={headingAs}
        />

        <div className="@container lg:grid lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="chip-scroll -mx-4 mb-8 flex gap-1 overflow-x-auto border-y border-warm-200 px-4 py-1 lg:sticky lg:top-16 lg:col-span-4 lg:mx-0 lg:mb-0 lg:block lg:max-h-[calc(100svh-7rem)] lg:overflow-y-auto lg:overflow-x-visible lg:border-y-0 lg:px-1 lg:py-1">
            {services.map((item, index) => {
              const isActive = item.slug === active;
              return (
                <button
                  key={item.slug}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(item.slug)}
                  className={cn(
                    "service-pop relative flex shrink-0 items-center gap-3 rounded-lg px-2.5 py-4 text-left lg:w-full lg:py-3.5",
                    isActive ? "z-10 text-white" : "text-warm-700"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="service-rail"
                      className="brand-gradient-bg absolute inset-0 rounded-lg shadow-sm"
                      transition={{ type: "spring", stiffness: 280, damping: 34 }}
                    />
                  )}
                  <span
                    className="index-num relative z-10"
                    style={isActive ? { color: "#fff" } : undefined}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative z-10 whitespace-nowrap text-[15px] font-semibold lg:whitespace-normal">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-xl bg-white p-5 shadow-[0_18px_40px_rgba(238,122,72,0.1)] lg:col-span-8 lg:p-8">
            <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
            <AnimatePresence mode="wait">
              <motion.span
                key={`ghost-${service.slug}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease }}
                className="ghost-type absolute -top-4 right-4 text-[4.5rem] lg:-top-6 lg:right-6 lg:text-[6.5rem]"
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
                <h3 className="font-heading text-2xl font-extrabold tracking-tight text-dark lg:text-3xl">
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
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <Link
                        href={`/projects/${snapshot.slug}`}
                        className="group inline-flex items-center gap-1 text-sm font-semibold text-brand-orange hover:text-brand-coral"
                      >
                        Open the file
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                      {snapshots.length > 1 && (
                        <Link
                          href={`/services/${service.slug}#file`}
                          className="text-sm font-semibold text-warm-700 hover:text-dark"
                        >
                          {snapshots.length} files in this service
                        </Link>
                      )}
                    </div>
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
