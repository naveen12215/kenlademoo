"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { industryProfiles } from "@/data/industries";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Mode = "industry" | "build";

export function IndustrySelector() {
  const [mode, setMode] = useState<Mode>("industry");
  const options = industryProfiles.filter((item) => item.kind === mode);
  const [active, setActive] = useState(options[0].slug);

  const profile =
    industryProfiles.find((item) => item.slug === active && item.kind === mode) ??
    options[0];

  const matchedServices = services.filter((service) =>
    profile.serviceSlugs.includes(service.slug)
  );
  const project = projects.find((item) => item.slug === profile.projectSlug);

  function switchMode(next: Mode) {
    setMode(next);
    const first = industryProfiles.find((item) => item.kind === next);
    if (first) setActive(first.slug);
  }

  return (
    <section className="bg-warm-100/70 py-24 lg:py-32">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Stack builder"
          title="Pick an industry — or a product type."
          subtitle="We'll surface the practice, a matching engagement, and the stack we would actually use. Not a brochure. A working brief."
          subtitleClassName="text-warm-700"
        />

        <div className="sticky top-[6.25rem] z-20 -mx-4 mb-8 bg-warm-100/90 px-4 py-3 backdrop-blur-md lg:static lg:top-auto lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
          <div className="mb-4 flex gap-6">
            {(
              [
                { key: "industry", label: "Your industry" },
                { key: "build", label: "What you're building" },
              ] as const
            ).map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => switchMode(item.key)}
                className={cn(
                  "border-b-2 pb-2 text-sm font-medium transition-colors",
                  mode === item.key
                    ? "border-brand-orange text-dark"
                    : "border-transparent text-warm-700 hover:text-dark"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="chip-scroll flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible">
            {options.map((item) => {
              const isActive = item.slug === active;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActive(item.slug)}
                  className={cn(
                    "relative shrink-0 px-3 py-1.5 text-[13px] font-medium transition-colors",
                    isActive ? "text-white" : "bg-white text-warm-700 hover:text-dark"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId={`stack-pill-${mode}`}
                      className="brand-gradient-bg absolute inset-0"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_18px_40px_rgba(238,122,72,0.1)]">
          <div className="brand-gradient-bg h-1" />
          <AnimatePresence mode="wait">
            <motion.div
              key={profile.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-12"
            >
              <div className="space-y-8 p-6 lg:col-span-7 lg:p-10">
                <div>
                  <p className="eyebrow mb-2">How we would staff it</p>
                  <h3 className="font-heading text-3xl font-extrabold tracking-tight text-dark lg:text-4xl">
                    {profile.label}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed font-medium text-warm-800 md:text-[17px]">
                    {profile.summary}
                  </p>
                </div>

                <div>
                  <p className="eyebrow mb-3">Practice</p>
                  <ul className="space-y-2">
                    {matchedServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group flex items-center justify-between border-b border-warm-100 py-3 text-[15px] font-semibold text-warm-800 hover:text-brand-orange"
                        >
                          {service.title}
                          <ArrowRight className="h-3.5 w-3.5 text-warm-400 group-hover:text-brand-orange" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="eyebrow mb-3">Stack</p>
                  <p className="text-[15px] leading-relaxed font-medium text-warm-800">
                    {profile.techNames.join("  ·  ")}
                  </p>
                </div>
              </div>

              <div className="border-t border-warm-200 p-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:p-10">
                {project ? (
                  <>
                    <p className="eyebrow mb-2">Matching file</p>
                    <h4 className="font-heading text-2xl font-extrabold tracking-tight text-dark">
                      {project.title}
                    </h4>
                    <p className="mt-1 text-[15px] font-medium text-warm-700">{project.client}</p>
                    <p className="mt-4 text-[15px] leading-relaxed font-medium text-warm-800">
                      {project.challenge}
                    </p>
                    <Button
                      href={`/projects/${project.slug}`}
                      variant="outline"
                      size="sm"
                      className="mt-6"
                    >
                      Open case
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="eyebrow mb-2">Typical engagement</p>
                    <h4 className="font-heading text-2xl font-extrabold tracking-tight text-dark">
                      Built around your operation
                    </h4>
                    <p className="mt-4 text-[15px] leading-relaxed font-medium text-warm-800">
                      We haven&apos;t published a public case in this lane, but
                      the same team ships these products — architecture, build,
                      cloud, and the years of care after launch.
                    </p>
                    <Button href="/contact" size="sm" className="mt-6">
                      Start a conversation
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
