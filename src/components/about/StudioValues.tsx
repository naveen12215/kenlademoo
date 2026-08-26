"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const INTERVAL_MS = 5500;
const ease = [0.22, 1, 0.36, 1] as const;

export interface StudioValue {
  title: string;
  description: string;
}

export function StudioValues({ values }: { values: StudioValue[] }) {
  const [index, setIndex] = useState(0);
  const active = values[index] ?? values[0];

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % values.length);
    }, INTERVAL_MS);

    return () => window.clearTimeout(id);
  }, [index, values.length]);

  return (
    <section className="bg-warm-100/70 py-20 lg:py-28">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Principles"
          title="What we stand for"
          subtitle="The principles that guide every decision, every line of code, and every client relationship."
          subtitleClassName="text-warm-700"
        />

        <div className="relative overflow-hidden rounded-xl bg-white p-7 shadow-[0_18px_40px_rgba(238,122,72,0.1)] md:p-10 lg:p-12">
          <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
          <AnimatePresence mode="wait">
            <motion.span
              key={`ghost-${active.title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              className="ghost-type absolute -top-4 right-4 text-[6.5rem] lg:-top-8 lg:right-8 lg:text-[10rem]"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease }}
              className="relative max-w-2xl"
            >
              <p className="index-num mb-4">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-[2.75rem]">
                {active.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed font-medium text-warm-800 lg:text-[17px]">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <StaggerChildren className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, valueIndex) => {
            const selected = valueIndex === index;
            return (
              <StaggerItem key={value.title}>
                <button
                  type="button"
                  aria-pressed={selected}
                  aria-label={value.title}
                  onClick={() => setIndex(valueIndex)}
                  data-active={selected}
                  className="studio-value w-full rounded-xl bg-white px-5 py-5 shadow-[0_12px_28px_rgba(238,122,72,0.08)] md:px-6 md:py-6"
                >
                  {selected && (
                    <motion.span
                      layoutId="studio-value-bar"
                      className="brand-gradient-bg absolute inset-x-0 top-0 h-1"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <p className="index-num mb-3">
                    {String(valueIndex + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-dark">
                    {value.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 line-clamp-3 text-[13px] leading-relaxed font-medium",
                      selected ? "text-warm-800" : "text-warm-700"
                    )}
                  >
                    {value.description}
                  </p>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <div className="mt-6 flex gap-2" role="tablist" aria-label="Principles">
          {values.map((value, valueIndex) => (
            <button
              key={value.title}
              type="button"
              role="tab"
              aria-label={value.title}
              aria-current={valueIndex === index}
              onClick={() => setIndex(valueIndex)}
              className={cn(
                "h-1.5 overflow-hidden rounded-full transition-all duration-300",
                valueIndex === index
                  ? "w-10 bg-warm-200"
                  : "w-2 bg-warm-300 hover:bg-warm-400"
              )}
            >
              {valueIndex === index && (
                <span
                  key={value.title}
                  className="brand-gradient-bg block h-full origin-left"
                  style={{
                    animation: `rule-draw ${INTERVAL_MS}ms linear both`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
