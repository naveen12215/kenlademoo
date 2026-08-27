import type { LucideIcon } from "lucide-react";

export type TechCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "cloud"
  | "ai-ml"
  | "blockchain"
  | "database"
  | "devops";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  technologies: string[];
  useCases: string[];
}

export interface Technology {
  name: string;
  icon: string;
  category: TechCategory;
  proficiency: "expert" | "advanced" | "proficient";
  description: string;
  usedFor: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    role: string;
  };
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CompanyStat {
  value: number;
  suffix: string;
  label: string;
}

export interface IndustryProfile {
  slug: string;
  label: string;
  kind: "industry" | "build";
  summary: string;
  serviceSlugs: string[];
  projectSlug?: string;
  techNames: string[];
}
