import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageIntro } from "@/components/ui/PageIntro";
import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { CtaBand } from "@/components/sections/CtaBand";
import { iconForTechName } from "@/lib/tech-icons";
import { projectsForService } from "@/lib/tech-used-in";
import type { Service } from "@/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";

interface ServicePageLayoutProps {
  service: Service;
}

const toc = [
  { id: "deliverables", label: "Deliverables" },
  { id: "stack", label: "Stack" },
  { id: "use-cases", label: "Use cases" },
  { id: "file", label: "Files" },
];

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const snapshots = projectsForService(service.title);
  const nav = snapshots.length
    ? toc
    : toc.filter((item) => item.id !== "file");

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.title,
          description: service.shortDescription,
          slug: service.slug,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <PageIntro
        eyebrow="Service"
        title={service.title}
        body={service.longDescription}
        marks={false}
      />

      <section className="pb-14">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Magnetic strength={0.18}>
                <Button href="/contact" size="lg">
                  Discuss your project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Magnetic>
              <Button href="/services" variant="outline" size="lg">
                All services
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-warm-200 py-12 lg:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="hidden lg:col-span-3 lg:block">
              <nav
                className="sticky top-24 space-y-1"
                aria-label="On this page"
              >
                {nav.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-warm-700 transition-colors hover:bg-white hover:text-dark"
                  >
                    <span className="index-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-16 lg:col-span-9">
              <div id="deliverables">
                <h2 className="font-heading mb-6 text-2xl font-extrabold tracking-tight text-dark">
                  What we deliver
                </h2>
                <ol className="overflow-hidden rounded-xl bg-white shadow-[0_12px_28px_rgba(238,122,72,0.08)]">
                  {service.features.map((feature, index) => (
                    <li
                      key={feature}
                      className="flex gap-4 border-b border-warm-100 px-5 py-4 last:border-b-0"
                    >
                      <span className="index-num mt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed font-medium text-warm-800">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div id="stack">
                <h2 className="font-heading mb-6 text-2xl font-extrabold tracking-tight text-dark">
                  Technologies we use
                </h2>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {service.technologies.map((tech) => {
                    const entry = iconForTechName(tech);
                    return (
                      <li
                        key={tech}
                        className="flex items-center gap-3 rounded-xl bg-white px-4 py-3.5 shadow-[0_8px_20px_rgba(238,122,72,0.07)]"
                      >
                        {entry &&
                          (() => {
                            const { icon: Icon, color } = entry;
                            return (
                              <Icon
                                size={22}
                                className="shrink-0"
                                style={{ color }}
                                aria-hidden="true"
                              />
                            );
                          })()}
                        <span className="text-sm font-semibold text-warm-800">
                          {tech}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div id="use-cases">
                <h2 className="font-heading mb-6 text-2xl font-extrabold tracking-tight text-dark">
                  Use cases
                </h2>
                <ol className="grid gap-3 sm:grid-cols-2">
                  {service.useCases.map((useCase, index) => (
                    <li
                      key={useCase}
                      className="rounded-xl bg-white p-5 shadow-[0_8px_20px_rgba(238,122,72,0.07)]"
                    >
                      <p className="index-num mb-3">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-[15px] font-medium leading-relaxed text-warm-800">
                        {useCase}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {snapshots.length > 0 && (
                <div id="file">
                  <h2 className="font-heading mb-6 text-2xl font-extrabold tracking-tight text-dark">
                    In the field
                  </h2>
                  <ul className="space-y-4">
                    {snapshots.map((snapshot) => (
                      <li key={snapshot.slug}>
                        <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] lg:p-8">
                          <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
                          <p className="text-[11px] font-bold tracking-[0.16em] text-brand-orange uppercase">
                            {snapshot.industry}
                          </p>
                          <h3 className="font-heading mt-2 text-2xl font-extrabold tracking-tight text-warm-800">
                            {snapshot.title}
                          </h3>
                          <p className="mt-1 text-[15px] font-medium text-warm-700">
                            {snapshot.client}
                          </p>
                          <p className="mt-4 max-w-xl text-[15px] leading-relaxed font-medium text-warm-800">
                            {snapshot.challenge}
                          </p>
                          <Link
                            href={`/projects/${snapshot.slug}`}
                            className="group mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange"
                          >
                            Open the file
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready when you are."
        body={`Tell us what you're building. We'll staff ${service.title.toLowerCase()} and reply with a clear next step.`}
      />
    </>
  );
}
