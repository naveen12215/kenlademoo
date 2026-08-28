import type { IndustryProfile } from "@/types";

export const industryProfiles: IndustryProfile[] = [
  {
    slug: "government",
    label: "Government",
    kind: "industry",
    summary:
      "Public-sector systems used by state departments and the organizations that serve them — workshop operations, continuity planning, findings tracking, and field-office platforms.",
    serviceSlugs: ["public-sector", "custom-software", "cloud-devops"],
    projectSlug: "field-information-system",
    techNames: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    kind: "industry",
    summary:
      "Lab operations, patient-facing tools, and health-data applications for providers, businesses, and individuals — including custom LIMS and practice-trained assistants.",
    serviceSlugs: ["healthcare-applications", "custom-software", "ai-ml"],
    projectSlug: "saguaro-health",
    techNames: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Python",
      "LangChain",
      "Docker",
    ],
  },
  {
    slug: "commercial",
    label: "Commercial / SMB",
    kind: "industry",
    summary:
      "Production systems for small and medium-sized businesses — values-based AI workspaces, recruiting assistants, and custom platforms instead of a generic package.",
    serviceSlugs: ["ai-ml", "custom-software"],
    projectSlug: "insight-360",
    techNames: [
      "Python",
      "LangChain",
      "OpenAI / GPT",
      "React",
      "FastAPI",
      "PostgreSQL",
    ],
  },
  {
    slug: "ai-product",
    label: "AI Product",
    kind: "build",
    summary:
      "RAG pipelines, document intelligence, recruitment and audit assistants, and other LLM-backed workflows with a values or source layer in front of the models.",
    serviceSlugs: ["ai-ml", "custom-software"],
    projectSlug: "insight-360",
    techNames: [
      "Python",
      "LangChain",
      "OpenAI / GPT",
      "Hugging Face",
      "FastAPI",
      "React",
      "PostgreSQL",
    ],
  },
  {
    slug: "mobile-app",
    label: "Mobile App",
    kind: "build",
    summary:
      "iOS and Android — native or React Native / Flutter — when the problem is a phone in the field, next to the web system.",
    serviceSlugs: ["mobile-development", "custom-software", "public-sector"],
    projectSlug: "independent-project-oversight",
    techNames: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Node.js",
      "TypeScript",
    ],
  },
  {
    slug: "cloud-platform",
    label: "Cloud platform",
    kind: "build",
    summary:
      "Cloud architecture and operations for systems that have to stay up: microservices on AWS, CI/CD, containers, and a stack the client can extend.",
    serviceSlugs: ["cloud-devops", "custom-software", "public-sector"],
    projectSlug: "field-information-system",
    techNames: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "PostgreSQL",
    ],
  },
  {
    slug: "legacy-modernization",
    label: "Legacy modernization",
    kind: "build",
    summary:
      "Make the business locked in COBOL, FORTRAN, Informix, and similar stacks visible — then generate the successor from what the legacy system actually does.",
    serviceSlugs: ["ai-ml", "custom-software", "public-sector"],
    projectSlug: "legacy-modernization-assistant",
    techNames: [
      "Python",
      "LangChain",
      "OpenAI / GPT",
      "Hugging Face",
      "FastAPI",
      "PostgreSQL",
    ],
  },
];
