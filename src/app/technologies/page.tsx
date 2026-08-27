import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { PageIntro } from "@/components/ui/PageIntro";
import { TechGrid } from "@/components/sections/TechGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "Explore Kenla Systems' full technology stack — from React and Node.js to TensorFlow, Solidity, and Kubernetes.",
  ...canonicalFor("/technologies"),
};

export default function TechnologiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Materials"
        title={<GradientText>Stack</GradientText>}
        body="Search, filter, and see where each tool has shipped. Fifty-four technologies we actually run in production."
        marks={false}
      />

      <section className="pb-14 lg:pb-16">
        <Container>
          <Suspense
            fallback={
              <div className="space-y-3 border-t border-warm-200 pt-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="skeleton-shimmer h-8" />
                ))}
              </div>
            }
          >
            <TechGrid />
          </Suspense>
        </Container>
      </section>

      <CtaBand
        title="Have a project in mind?"
        body="Tell us what you're building. We'll staff the stack that fits — and write back with a clear next step."
      />
    </>
  );
}
