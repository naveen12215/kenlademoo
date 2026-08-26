import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";

const service = services.find((item) => item.slug === "cloud-devops")!;

export const metadata: Metadata = {
  title: "Cloud & DevOps Services",
  description:
    "Cloud architecture, migration, and DevOps engineering on AWS, GCP, and Azure. CI/CD pipelines, Kubernetes orchestration, Infrastructure as Code, and cost optimization.",
};

export default function CloudDevOpsPage() {
  return <ServicePageLayout service={service} />;
}
