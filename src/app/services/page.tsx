import type { Metadata } from "next";
import { ServicePanel } from "@/components/sections/ServicePanel";
import { CtaBand } from "@/components/sections/CtaBand";
import { canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, public-sector systems, generative AI, healthcare applications, cloud, web, mobile, and blockchain. Clients bring the problem; Kenla engineers the system.",
  ...canonicalFor("/services"),
};

export default function ServicesPage() {
  return (
    <>
      <ServicePanel headingAs="h1" />
      <CtaBand
        title="Not sure where to start?"
        body="Send the brief as it stands — a sketch is enough. We'll map it to the right service and write back with a clear next step."
      />
    </>
  );
}
