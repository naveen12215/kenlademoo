"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden py-16">
      <p
        className="ghost-type absolute top-12 -left-4 text-[28vw] lg:text-[10rem]"
        aria-hidden="true"
      >
        500
      </p>
      <Container className="relative">
        <p className="eyebrow mb-6">Error</p>
        <p className="font-heading text-6xl font-extrabold tracking-tight sm:text-7xl">
          <GradientText>Hold on</GradientText>
        </p>
        <h1 className="mt-6 font-heading text-3xl font-bold text-dark">
          Something went wrong
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed font-medium text-warm-800">
          That request did not complete. Try again, or send a note — we will
          pick it up from there.
        </p>
        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
          <Button type="button" size="lg" onClick={() => reset()}>
            Try again
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
