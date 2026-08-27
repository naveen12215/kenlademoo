import { projects } from "@/data/projects";
import { services } from "@/data/services";

const TECH_ALIASES: Record<string, string[]> = {
  "OpenAI / GPT": ["OpenAI API", "OpenAI / GPT"],
  "OpenAI API": ["OpenAI / GPT", "OpenAI API"],
  "Web3.js": ["Ethers.js", "Web3.js"],
  "Prometheus / Grafana": ["Grafana", "Prometheus", "Prometheus / Grafana"],
  Grafana: ["Prometheus / Grafana", "Grafana"],
};

export function techUsedIn(techName: string): string[] {
  const aliases = new Set([techName, ...(TECH_ALIASES[techName] ?? [])]);

  const industries = projects
    .filter((project) =>
      project.technologies.some((item) => aliases.has(item) || item === techName)
    )
    .map((project) => project.industry);

  return [...new Set(industries)];
}

export function serviceForProject(serviceTitle: string) {
  return services.find((service) => service.title === serviceTitle);
}

export function projectsForService(serviceTitle: string) {
  return projects.filter((project) => project.services.includes(serviceTitle));
}
