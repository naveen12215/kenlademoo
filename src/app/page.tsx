import { Hero } from "@/components/sections/Hero";
import { ServicePanel } from "@/components/sections/ServicePanel";
import { IndustrySelector } from "@/components/sections/IndustrySelector";
import { TechHighlights } from "@/components/sections/TechHighlights";
import { WhyKenla } from "@/components/sections/WhyKenla";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { CtaBand } from "@/components/sections/CtaBand";
import type { Metadata } from "next";
import { COMPANY_DESCRIPTION, COMPANY_NAME } from "@/lib/constants";
import { canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    absolute: `${COMPANY_NAME} — Custom Software, AI/ML, Cloud & Blockchain`,
  },
  description: COMPANY_DESCRIPTION,
  ...canonicalFor("/"),
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicePanel />
      <IndustrySelector />
      <FeaturedProject />
      <TechHighlights />
      <WhyKenla />
      <CtaBand variant="gradient" />
    </>
  );
}
