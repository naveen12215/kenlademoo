import type { Metadata } from "next";
import { ServicePanel } from "@/components/sections/ServicePanel";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, AI/ML, cloud & DevOps, blockchain, web, mobile, rapid prototyping, Salesforce, and automation. Explore Kenla Systems' full range of software engineering services.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicePanel />
      <CtaBand
        title="Not sure where to start?"
        body="Send the brief as it stands — a sketch is enough. We'll map it to the right service and write back with a clear next step."
      />
    </>
  );
}
