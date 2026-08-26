import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";

const service = services.find((item) => item.slug === "ai-ml")!;

export const metadata: Metadata = {
  title: "AI/ML & Generative AI Services",
  description:
    "Harness artificial intelligence with Kenla Systems. From classical ML models and computer vision to LLM integration, RAG pipelines, and generative AI solutions.",
};

export default function AiMlPage() {
  return <ServicePageLayout service={service} />;
}
