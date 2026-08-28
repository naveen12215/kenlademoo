import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { Timeline } from "@/components/about/Timeline";
import { StudioHero } from "@/components/about/StudioHero";
import { StudioStory } from "@/components/about/StudioStory";
import { StudioValues } from "@/components/about/StudioValues";
import { StudioStats } from "@/components/about/StudioStats";
import { CtaBand } from "@/components/sections/CtaBand";
import { canonicalFor } from "@/lib/metadata";
import { COMPANY_MISSION, COMPANY_VISION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "KENLA Systems is a custom software services company founded in 2009 in Chennai. We design, build, and support production systems for government, healthcare, and commercial organizations in the United States, India, and the Middle East.",
  ...canonicalFor("/about"),
};

const timelineEvents = [
  {
    year: "2009",
    title: "Founded in Chennai",
    description:
      "KENLA Systems was founded by two software engineers, each with more than twenty years of development experience. Software engineering since 2009.",
  },
  {
    year: "Then",
    title: "Founders and investors",
    description:
      "The company has attracted additional investors. Collectively they bring entrepreneurial experience from Rand Software Corporation, Intelle Engineers, Staytop Systems, and RAN Solutions — software, semiconductors, manufacturing, and general business.",
  },
  {
    year: "HQ",
    title: "Engineering in Chennai",
    description:
      "Primary engineering office in Adyar, Chennai. Web and mobile, generative AI and enterprise applications, cloud and DevOps, blockchain and Web3, technology research, and new market development.",
  },
  {
    year: "Now",
    title: "Regional presence, global service",
    description:
      "We deliver from India to clients in the United States, the Middle East, and India. Custom systems — not templates — for public sector, healthcare, and commercial organizations.",
  },
];

const coreValues = [
  {
    title: "Technical knowledge",
    description:
      "Practiced engineering across web, mobile, AI, cloud, and blockchain — not a single-stack shop.",
  },
  {
    title: "Customer relationships",
    description:
      "Direct, durable working relationships. We stay close to the problem after the first release.",
  },
  {
    title: "Custom systems, not templates",
    description:
      "Applications built to the client’s process and constraints — not a generic package with a logo swap.",
  },
  {
    title: "Regional presence, global service",
    description:
      "Chennai engineering with delivery experience for U.S., Indian, and Middle Eastern clients.",
  },
  {
    title: "Delivery quality",
    description:
      "Testing, review, and operational discipline treated as part of the engagement, not an afterthought.",
  },
  {
    title: "In-house talent training",
    description:
      "We grow engineers internally so the team that starts a system can still own it years later.",
  },
];

export default function AboutPage() {
  return (
    <>
      <StudioHero />

      <section className="border-t border-warm-200 py-12 lg:py-16">
        <Container>
          <FadeIn>
            <SectionHeading
              index="00"
              eyebrow="Vision & mission"
              title="What we aim for"
              subtitle="From the Kenla company profile."
            />
          </FadeIn>
          <StaggerChildren className="grid gap-4 md:grid-cols-2">
            <StaggerItem>
              <article className="group relative h-full overflow-hidden rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] transition-transform duration-300 hover:-translate-y-0.5 md:p-8">
                <span className="brand-gradient-bg absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                <p className="index-num mb-4">01</p>
                <h2 className="font-heading text-2xl font-extrabold tracking-tight text-dark">
                  Vision
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed font-medium text-warm-800 md:text-[17px]">
                  {COMPANY_VISION}
                </p>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="group relative h-full overflow-hidden rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] transition-transform duration-300 hover:-translate-y-0.5 md:p-8">
                <span className="brand-gradient-bg absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                <p className="index-num mb-4">02</p>
                <h2 className="font-heading text-2xl font-extrabold tracking-tight text-dark">
                  Mission
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed font-medium text-warm-800 md:text-[17px]">
                  {COMPANY_MISSION}
                </p>
              </article>
            </StaggerItem>
          </StaggerChildren>
        </Container>
      </section>

      <StudioStory />

      <section className="py-12 lg:py-16">
        <Container>
          <FadeIn>
            <SectionHeading
              index="02"
              eyebrow="Journey"
              title="The company"
              subtitle="Founded in Chennai. Delivery for the United States, India, and the Middle East."
            />
          </FadeIn>
          <div className="mx-auto max-w-4xl">
            <Timeline events={timelineEvents} />
          </div>
        </Container>
      </section>

      <StudioValues values={coreValues} />
      <StudioStats />

      <CtaBand
        title="Let's work together"
        body="We take ownership of the problem, choose the stack that fits, and stay accountable through launch and after."
      />
    </>
  );
}
