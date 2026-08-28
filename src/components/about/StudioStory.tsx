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
    label: "Founders",
    body: "KENLA Systems was founded by two software engineers, each with more than twenty years of development experience. The company has since attracted additional investors. Collectively they bring entrepreneurial experience from several successful startups, including Rand Software Corporation, Intelle Engineers, Staytop Systems, and RAN Solutions.",
  },
  {
    index: "02",
    label: "Chennai",
    body: "Our primary engineering office is in Chennai, India. Engineers and managers there cover web and mobile application development; generative AI and enterprise application development; cloud, DevOps, and platform engineering; blockchain and Web3; technology research; and new market development.",
  },
  {
    index: "03",
    label: "Regions",
    body: "We deliver from India to clients in the United States, the Middle East, and India. Regional presence with global service is part of how we keep cost competitive without giving up accountability. We work as an extension of the client team: we learn the business, own the architecture, and ship software other engineers can still maintain years later.",
  },
];

export function StudioStory() {
  return (
    <section className="bg-warm-100/70 py-12 lg:py-16">
      <Container>
        <FadeIn>
          <SectionHeading
            index="01"
            eyebrow="The company"
            title="Where we work from"
            subtitle="Chennai engineering. Delivery for U.S., Indian, and Middle Eastern clients."
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
