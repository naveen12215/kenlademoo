"use client";

import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import React from "react";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}

export function LegalPage({ eyebrow, title, updated, children }: LegalPageProps) {
  const sections = React.Children.toArray(children);

  return (
    <>
      <PageIntro
        eyebrow={eyebrow}
        title={title}
        body={`Last updated ${updated}. Written for the Kenla Systems marketing site and the notes we receive through it.`}
        marks={false}
      />
      <section className="pb-14 lg:pb-16">
        <Container>
          <StaggerChildren className="max-w-2xl space-y-4">
            {sections.map((child, index) => (
              <StaggerItem key={index}>
                <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] transition-transform duration-300 hover:-translate-y-0.5 lg:p-8">
                  <span className="brand-gradient-bg absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="legal-copy text-[15px] leading-relaxed font-medium text-warm-800">
                    {child}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>
    </>
  );
}
