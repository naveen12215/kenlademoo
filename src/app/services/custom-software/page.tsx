import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";

const service = services.find((item) => item.slug === "custom-software")!;

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "End-to-end custom software development services. From MVPs to enterprise-grade platforms, built with modern architectures, clean code practices, and CI/CD pipelines.",
};

export default function CustomSoftwarePage() {
  return <ServicePageLayout service={service} />;
}
