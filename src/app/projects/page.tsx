import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { PageIntro } from "@/components/ui/PageIntro";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/sections/CtaBand";
import { projects } from "@/data/projects";
import { canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore how Kenla Systems has helped clients across industries solve complex challenges with custom software, AI, cloud infrastructure, and blockchain solutions.",
  ...canonicalFor("/projects"),
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Project"
        title={<GradientText>Projects</GradientText>}
        body="Each file opens the same way: the problem, the work, the numbers. FinTech, insurance, healthcare, government, Web3, enterprise."
        marks={false}
      />

      <section className="pb-14 lg:pb-16">
        <Container>
          <div className="overflow-hidden rounded-xl bg-white shadow-[0_12px_28px_rgba(238,122,72,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[40rem] text-left">
                <thead>
                  <tr className="text-[12px] font-semibold tracking-[0.12em] text-warm-700 uppercase">
                    <th className="px-5 py-4 pr-4">No.</th>
                    <th className="py-4 pr-4">File</th>
                    <th className="py-4 pr-4">Industry</th>
                    <th className="py-4 pr-4">Client</th>
                    <th className="py-4 pr-5"></th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr
                      key={project.slug}
                      className="soft-rise wash-hover border-t border-warm-100"
                      style={{
                        ["--rise-delay" as string]: `${Math.min(index, 10) * 0.05}s`,
                      }}
                    >
                      <td className="px-5 py-5 pr-4">
                        <span className="index-num">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </td>
                      <td className="py-5 pr-4">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="font-heading text-[17px] font-bold text-warm-800 hover:text-brand-orange lg:text-xl"
                        >
                          {project.title}
                        </Link>
                      </td>
                      <td className="py-5 pr-4 text-[15px] font-medium text-warm-700">
                        {project.industry}
                      </td>
                      <td className="py-5 pr-4 text-[15px] font-medium text-warm-700">
                        {project.client}
                      </td>
                      <td className="py-5 pr-5 text-right">
                        <Button
                          href={`/projects/${project.slug}`}
                          size="sm"
                          className="inline-flex"
                        >
                          Open
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Have a challenge like these?"
        body="Bring the brief as it stands. Same team, same discipline — we'll map it to the work and reply with a clear next step."
      />
    </>
  );
}
