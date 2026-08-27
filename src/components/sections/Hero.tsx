"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn } from "@/components/animations/FadeIn";
import { LineReveal } from "@/components/animations/LineReveal";
import { Magnetic } from "@/components/animations/Magnetic";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { COMPANY_TAGLINE, COMPANY_FOUNDED, companyStats } from "@/lib/constants";
import { HeroDust } from "@/components/animations/HeroDust";
import { CropMarks } from "@/components/ui/CropMarks";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <section
      className="construction-hero relative overflow-x-clip"
      onMouseMove={(event) => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }
        const box = event.currentTarget.getBoundingClientRect();
        const nx = (event.clientX - box.left) / box.width - 0.5;
        const ny = (event.clientY - box.top) / box.height - 0.5;
        setOffset({ x: nx * 10, y: ny * 6 });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <span className="hero-orb hero-orb-a" aria-hidden="true" />
      <span className="hero-orb hero-orb-b" aria-hidden="true" />
      <span className="hero-orb hero-orb-c" aria-hidden="true" />
      <HeroDust />
      <motion.p
        className="ghost-type absolute top-[18%] -left-10 text-[22vw] lg:-left-12 lg:text-[10rem]"
        aria-hidden="true"
        animate={{ x: -offset.x * 1.4, y: -offset.y * 1.2 }}
        transition={{ type: "spring", stiffness: 40, damping: 24, mass: 0.9 }}
      >
        {COMPANY_FOUNDED}
      </motion.p>

      <Container className="relative py-10 lg:py-14">
        <p className="sheet-no mb-5">KS-01  HOME</p>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16.5rem,22rem)] lg:gap-10 xl:gap-12">
          <div className="min-w-0">
            <FadeIn>
              <p className="eyebrow mb-5">Software engineering since 2009</p>
            </FadeIn>

            <motion.div
              animate={{ x: offset.x, y: offset.y }}
              transition={{ type: "spring", stiffness: 50, damping: 22, mass: 0.8 }}
            >
              <LineReveal
                as="p"
                className="display-hero font-heading font-extrabold tracking-tight text-dark"
                lines={[
                  "SOFTWARE",
                  <span key="e">
                    end to <GradientText shimmer>end.</GradientText>
                  </span>,
                ]}
              />
            </motion.div>

            <div className="ink-rule mt-5 max-w-[14rem]" />

            <FadeIn direction="up" delay={0.5}>
              <h1 className="mt-5 max-w-lg font-heading text-lg font-extrabold tracking-tight text-dark">
                We build software that moves business forward.
              </h1>
              <p className="mt-3 max-w-lg text-base leading-relaxed font-medium text-warm-800">
                {COMPANY_TAGLINE}. Custom platforms, AI, cloud, and blockchain —
                designed, built, and run by one team.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.62}>
              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Magnetic>
                  <Button href="/services" size="lg">
                    Explore services
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Magnetic>
                <Magnetic strength={0.18}>
                  <Button href="/contact" variant="outline" size="lg">
                    Tell us what you&apos;re building
                  </Button>
                </Magnetic>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.28} className="w-full lg:pt-1">
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <CropMarks className="hidden sm:block" />
              <div className="fold relative overflow-hidden rounded-xl bg-white p-5 shadow-[0_18px_40px_rgba(238,122,72,0.12)] sm:m-2 lg:p-6">
                <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
                <span
                  className="ghost-type pointer-events-none absolute top-9 -right-1 text-[5rem] lg:top-10 lg:text-[6rem]"
                  aria-hidden="true"
                >
                  01
                </span>
                <div className="relative mb-1 flex items-end justify-between gap-3 pb-4">
                  <p className="eyebrow mb-0">Spec index</p>
                  <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-orange uppercase">
                    Plate
                  </p>
                </div>
                <div className="relative mb-1 h-px bg-warm-100" />
                <ol className="relative">
                  {companyStats.map((stat, index) => (
                    <li
                      key={stat.label}
                      className="flex items-baseline gap-2.5 border-b border-warm-100 py-3.5 last:border-b-0"
                    >
                      <span className="index-num w-6 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 text-[14px] font-semibold text-warm-800">
                        {stat.label}
                      </span>
                      <span className="spec-leader" aria-hidden="true" />
                      <span className="font-heading shrink-0 text-[1.75rem] font-extrabold tracking-tight tabular-nums lg:text-3xl">
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          delay={0.12 + index * 0.14}
                          className="brand-gradient-text"
                        />
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="relative mt-5 flex items-center justify-between gap-3">
                  <p className="text-[12px] font-semibold tracking-[0.18em] text-brand-orange uppercase">
                    Chennai · California
                  </p>
                  <span
                    className="brand-gradient-bg h-1.5 w-1.5 shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
