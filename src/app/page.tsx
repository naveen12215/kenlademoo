import { Hero } from "@/components/sections/Hero";
import { ServicePanel } from "@/components/sections/ServicePanel";
import { IndustrySelector } from "@/components/sections/IndustrySelector";
import { TechHighlights } from "@/components/sections/TechHighlights";
import { WhyKenla } from "@/components/sections/WhyKenla";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { CtaBand } from "@/components/sections/CtaBand";

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
