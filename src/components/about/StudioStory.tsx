import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const chapters = [
  {
    index: "01",
    label: "Chennai",
    body: "Kenla Systems was founded in 2009 in Chennai, India, by a small group of engineers who believed that thoughtful, well-crafted software could transform the way businesses operate. What started as a three-person team working out of a modest office has grown into a full-service technology company with deep expertise across custom software development, artificial intelligence, cloud infrastructure, and blockchain.",
  },
  {
    index: "02",
    label: "California",
    body: "Over the years, we have had the privilege of partnering with startups, mid-market companies, and enterprises across four continents. Our client-facing entity, Optiwise, based in California, bridges the gap between our engineering headquarters in India and our growing roster of North American clients — ensuring seamless communication, aligned time zones for critical milestones, and a local presence that our partners value.",
  },
  {
    index: "03",
    label: "Two hundred",
    body: "Today, with over 200 projects delivered and counting, Kenla Systems continues to evolve. We invest heavily in our people, our processes, and the technologies shaping tomorrow. Whether it is building an AI-powered analytics platform, architecting a cloud-native infrastructure, or launching a blockchain-based solution, our mission remains unchanged: deliver software that genuinely moves our clients' businesses forward.",
  },
];

export function StudioStory() {
  return (
    <section className="bg-warm-100/70 py-12 lg:py-16">
      <Container>
        <FadeIn>
          <SectionHeading
            index="01"
            eyebrow="Story"
            title="Where it all began"
            subtitle="A story of craft, not a spec sheet."

          />
        </FadeIn>

        <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_18px_40px_rgba(238,122,72,0.1)]">
          <div className="brand-gradient-bg h-1" />
          <StaggerChildren>
            {chapters.map((chapter) => (
              <StaggerItem key={chapter.index}>
                <article className="studio-chapter grid gap-4 border-b border-warm-100 px-6 py-8 last:border-b-0 sm:grid-cols-12 sm:items-start sm:gap-8 md:px-10 md:py-10">
                  <div className="sm:col-span-3">
                    <p className="index-num mb-2">{chapter.index}</p>
                    <h3 className="font-heading text-xl font-extrabold tracking-tight text-dark">
                      {chapter.label}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed font-medium text-warm-800 sm:col-span-9 md:text-[17px]">
                    {chapter.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  );
}
