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
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <section
      className="construction-hero relative min-h-[calc(100svh-6.25rem)] overflow-x-clip lg:min-h-[calc(100svh-3.5rem)]"
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
      <p
        className="ghost-type absolute top-[18%] -left-10 text-[32vw] lg:-left-16 lg:text-[16rem]"
        aria-hidden="true"
      >
        {COMPANY_FOUNDED}
      </p>

      <Container className="relative flex min-h-[inherit] flex-col justify-end py-14 lg:justify-center lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="eyebrow mb-5">Software engineering since 2009</p>
            </FadeIn>

            <motion.div
              animate={{ x: offset.x, y: offset.y }}
              transition={{ type: "spring", stiffness: 50, damping: 22, mass: 0.8 }}
            >
              <LineReveal
                className="font-heading text-[2.65rem] font-extrabold tracking-tight text-dark sm:text-[4rem] lg:text-[4.6rem]"
                lines={[
                  "SOFTWARE",
                  <span key="e">
                    end to <GradientText>end.</GradientText>
                  </span>,
                ]}
              />
            </motion.div>

            <div className="ink-rule mt-5 max-w-[14rem]" />

            <FadeIn direction="up" delay={0.5}>
              <p className="mt-8 max-w-lg font-heading text-2xl font-extrabold tracking-tight text-dark lg:text-[1.85rem]">
                We build software that moves business forward.
              </p>
              <p className="mt-3 max-w-lg text-[17px] leading-relaxed font-medium text-warm-800 lg:text-xl">
                {COMPANY_TAGLINE}. Custom platforms, AI, cloud, and blockchain —
                designed, built, and run by one team.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.62}>
              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Magnetic strength={0.28}>
                  <Button href="/services" size="lg">
                    Explore practices
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

          <FadeIn delay={0.35} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl bg-white p-7 shadow-[0_18px_40px_rgba(238,122,72,0.12)] lg:p-10">
              <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
              <p className="eyebrow mb-7">Spec index</p>
              <ol>
                {companyStats.map((stat, index) => (
                  <li
                    key={stat.label}
                    className="flex items-center justify-between gap-4 border-b border-warm-100 py-5 last:border-b-0"
                  >
                    <div className="min-w-0">
                      <p className="index-num mb-1">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-[15px] font-medium text-warm-800">
                        {stat.label}
                      </p>
                    </div>
                    <span className="font-heading text-4xl font-extrabold tracking-tight text-brand-orange lg:text-5xl">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[12px] font-semibold tracking-[0.18em] text-brand-orange uppercase">
                Chennai · California
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
