"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn } from "@/components/animations/FadeIn";
import { LineReveal } from "@/components/animations/LineReveal";
import { COMPANY_REGIONS, COMPANY_VISION } from "@/lib/constants";

export function StudioHero() {
  return (
    <section className="relative flex items-end overflow-hidden pt-10 pb-12 lg:pb-16">
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
          <h1 className="eyebrow mb-5">About Kenla Systems</h1>
        </FadeIn>

        <div className="year-frame">
          <LineReveal
            as="p"
            className="display-year font-heading font-extrabold tracking-tight"
            lines={[
              <GradientText key="year">2009</GradientText>,
            ]}
          />
        </div>

        <div className="ink-rule mt-5 max-w-[14rem]" />

        <FadeIn direction="up" delay={0.48}>
          <p className="display-h2 mt-8 max-w-2xl font-heading font-extrabold tracking-tight text-dark">
            {COMPANY_VISION}
          </p>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed font-semibold text-dark md:text-[19px]">
            A custom software services company. We take ownership of the
            problem, choose the stack that fits, and stay accountable through
            launch and after.
          </p>
          <p className="mt-6 text-[12px] font-semibold tracking-[0.18em] text-brand-orange uppercase">
            {COMPANY_REGIONS}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
