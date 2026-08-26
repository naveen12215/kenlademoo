"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn } from "@/components/animations/FadeIn";
import { LineReveal } from "@/components/animations/LineReveal";

export function StudioHero() {
  return (
    <section className="relative flex min-h-[78vh] items-end overflow-hidden pt-12 pb-20 lg:min-h-[86vh] lg:pb-28">
      <div
        className="studio-watermark pointer-events-none absolute inset-0 flex items-center justify-end pr-[4%] lg:pr-[8%]"
        aria-hidden="true"
      >
        <Image
          src="/logo.svg"
          alt=""
          width={920}
          height={870}
          className="h-[78%] w-auto max-w-[min(92vw,36rem)] object-contain opacity-[0.22] select-none lg:opacity-[0.28]"
          priority
        />
      </div>

      <Container className="relative">
        <FadeIn>
          <p className="eyebrow mb-5">Studio</p>
        </FadeIn>

        <div className="year-frame">
          <LineReveal
            className="font-heading text-[5.2rem] leading-[0.86] font-extrabold tracking-tight sm:text-[7.25rem] lg:text-[8.75rem]"
            lines={[
              <GradientText key="year">2009</GradientText>,
            ]}
          />
        </div>

        <div className="ink-rule mt-5 max-w-[14rem]" />

        <FadeIn direction="up" delay={0.48}>
          <p className="mt-8 max-w-lg text-[17px] leading-relaxed font-medium text-warm-800 lg:text-xl">
            Three engineers in Chennai. A California presence. Two hundred
            projects later, the mission is the same: software that actually
            moves the business.
          </p>
          <p className="mt-6 text-[12px] font-semibold tracking-[0.18em] text-brand-orange uppercase">
            Chennai · California
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
