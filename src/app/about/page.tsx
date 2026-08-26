import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { Timeline } from "@/components/about/Timeline";
import { StudioHero } from "@/components/about/StudioHero";
import { StudioStory } from "@/components/about/StudioStory";
import { StudioValues } from "@/components/about/StudioValues";
import { StudioStats } from "@/components/about/StudioStats";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Kenla Systems — founded in 2009 in Chennai, India, we have grown from a small team into a trusted technology partner delivering custom software, AI/ML, cloud, and blockchain solutions to clients worldwide.",
};

const timelineEvents = [
  {
    year: "2009",
    title: "Founded in Chennai",
    description:
      "Kenla Systems was born with a simple mission: build reliable, high-quality software. Starting with a small team of three engineers, we set out to prove that world-class engineering could come from India.",
  },
  {
    year: "2012",
    title: "First Enterprise Client",
    description:
      "Landed our first major enterprise engagement, delivering a large-scale inventory management platform. This milestone validated our approach and fueled rapid team growth.",
  },
  {
    year: "2015",
    title: "50+ Projects Milestone",
    description:
      "Crossed fifty successfully delivered projects spanning fintech, healthcare, logistics, and e-commerce. Established Optiwise as our client-facing entity in California to better serve North American clients.",
  },
  {
    year: "2018",
    title: "AI/ML Practice Launched",
    description:
      "Recognizing the transformative power of artificial intelligence, we built a dedicated AI/ML practice — hiring data scientists and investing in TensorFlow, PyTorch, and computer vision capabilities.",
  },
  {
    year: "2020",
    title: "Blockchain Practice Added",
    description:
      "Expanded into blockchain and Web3 development, delivering smart contracts, DeFi protocols, and tokenization platforms for forward-thinking clients across the globe.",
  },
  {
    year: "2022",
    title: "200+ Projects Delivered",
    description:
      "Surpassed two hundred projects with a 95%+ client satisfaction rate. Grew to serve clients across four continents, reinforcing our reputation for quality and reliability.",
  },
  {
    year: "2024",
    title: "Expanding Cloud & DevOps",
    description:
      "Deepened our cloud-native and DevOps practice with advanced Kubernetes orchestration, infrastructure-as-code, and multi-cloud strategies — helping clients scale with confidence.",
  },
];

const coreValues = [
  {
    title: "Innovation",
    description:
      "We stay ahead of the curve, continuously exploring emerging technologies and creative solutions. Innovation is not an afterthought — it is embedded in how we think, design, and build.",
  },
  {
    title: "Quality",
    description:
      "Every line of code we write is held to the highest standard. Rigorous testing, thorough code reviews, and battle-tested architectures ensure that what we ship is built to last.",
  },
  {
    title: "Reliability",
    description:
      "Deadlines are commitments, not suggestions. Over fifteen years of consistent delivery has made reliability our hallmark — our clients trust us because we have earned it, project after project.",
  },
  {
    title: "Partnership",
    description:
      "We do not just write code for clients; we become an extension of their team. Deep collaboration, transparent communication, and shared ownership drive the best outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <StudioHero />
      <StudioStory />

      <section className="py-20 lg:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              index="02"
              eyebrow="Journey"
              title="Our journey"
              subtitle="Scroll the years. Chennai to four continents."
              subtitleClassName="text-warm-700"
            />
          </FadeIn>
          <div className="mx-auto max-w-4xl">
            <Timeline events={timelineEvents} />
          </div>
        </Container>
      </section>

      <StudioValues values={coreValues} />
      <StudioStats />

      <CtaBand
        title="Let's work together"
        body="Bring the brief as it stands. Fifteen years of shipping — one conversation at a time."
      />
    </>
  );
}
