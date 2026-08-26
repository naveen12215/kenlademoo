import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "fintech-trading-platform",
    title: "FinTech Trading Platform",
    client: "A leading financial services firm",
    industry: "Financial Services",
    services: ["Custom Software Development", "Cloud & DevOps"],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "AWS",
      "WebSocket",
      "Grafana",
    ],
    challenge:
      "The client's legacy trading platform was buckling under growing trade volumes and could not deliver the sub-second latency that modern traders expect. Their monolithic architecture made it impossible to scale individual components independently, and deployments required weekend-long maintenance windows that disrupted global operations.",
    solution:
      "We re-architected the platform into event-driven microservices deployed on Kubernetes, with a React-based real-time dashboard fed by WebSocket streams. A Redis-backed caching layer ensured market data reached the UI in under 200ms, while PostgreSQL handled transactional integrity for order management. A fully automated CI/CD pipeline on GitHub Actions enabled zero-downtime deployments multiple times per day.",
    results: [
      "Reduced average trade execution latency from 1.2 seconds to under 180 milliseconds",
      "Achieved 99.97% platform uptime over 12 months, exceeding the SLA target",
      "Enabled the platform to handle 5x peak trading volume without degradation",
      "Cut deployment cycle from weekend maintenance windows to on-demand releases averaging 12 minutes",
      "Reduced cloud infrastructure costs by 35% through right-sizing and auto-scaling",
    ],
    testimonial: {
      quote:
        "Kenla's team transformed our trading infrastructure. The new platform handles volumes we couldn't have imagined two years ago, and our traders finally have the real-time experience they need to compete.",
      role: "CTO, Financial Services Client",
    },
  },
  {
    slug: "ai-document-processing",
    title: "AI-Powered Document Processing",
    client: "A Fortune 500 insurance company",
    industry: "Insurance",
    services: ["AI/ML & Generative AI", "Custom Software Development"],
    technologies: [
      "Python",
      "FastAPI",
      "TensorFlow",
      "OpenAI / GPT",
      "LangChain",
      "React",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Elasticsearch",
    ],
    challenge:
      "The client processed over 50,000 insurance claims per month, each involving multiple unstructured documents — handwritten forms, medical reports, police filings, and scanned invoices. Manual review by claims adjusters created a 14-day average processing cycle, leading to customer dissatisfaction and high operational costs.",
    solution:
      "We built an intelligent document processing pipeline combining OCR, custom NLP models, and GPT-powered extraction. Incoming documents are classified by type, key fields are extracted with high confidence scores, and a RAG-based assistant helps adjusters review edge cases by surfacing relevant policy clauses. The system integrates directly into their existing claims management platform via REST APIs.",
    results: [
      "Reduced average claims processing time from 14 days to 3 days",
      "Achieved 94% accuracy on automated field extraction, reducing manual data entry by 78%",
      "Saved an estimated $2.4 million annually in operational costs",
      "Improved customer satisfaction scores (CSAT) by 22 points within 6 months of launch",
      "Processed 98% of standard document types without human intervention",
    ],
    testimonial: {
      quote:
        "The AI system Kenla built doesn't just speed things up — it fundamentally changes how our adjusters work. They spend their time on judgment calls, not data entry.",
      role: "VP of Claims Operations, Insurance Client",
    },
  },
  {
    slug: "defi-yield-aggregator",
    title: "DeFi Yield Aggregator",
    client: "A Web3 startup",
    industry: "Decentralized Finance",
    services: ["Blockchain & Web3", "Custom Software Development"],
    technologies: [
      "Solidity",
      "Ethereum",
      "Polygon",
      "Hardhat",
      "React",
      "TypeScript",
      "Web3.js",
      "IPFS",
      "Node.js",
    ],
    challenge:
      "The client wanted to build a yield aggregator that automatically routes user deposits across multiple DeFi protocols to maximize returns. The challenge was designing smart contracts that could interact with diverse protocol interfaces, handle rebalancing logic on-chain efficiently, and provide a seamless user experience that abstracted away the underlying complexity — all while maintaining rigorous security standards.",
    solution:
      "We designed a modular vault architecture in Solidity with strategy contracts that plug into protocols like Aave, Compound, and Curve. An off-chain optimizer calculates optimal allocation, and a keeper network triggers rebalancing transactions. The React frontend provides real-time portfolio tracking powered by The Graph subgraphs, and all contracts underwent two independent security audits before mainnet deployment.",
    results: [
      "Achieved $12M+ in Total Value Locked (TVL) within 3 months of mainnet launch",
      "Delivered average APY 2.3% higher than manual single-protocol staking",
      "Passed two independent smart contract security audits with zero critical findings",
      "Reduced gas costs for users by 40% through batched transactions on Polygon",
      "Onboarded 4,200+ unique wallet addresses in the first quarter",
    ],
    testimonial: {
      quote:
        "Kenla brought real software engineering rigor to our Web3 product. The contracts are clean, the frontend is intuitive, and the security-first approach gave us and our users confidence from day one.",
      role: "Founder, Web3 Startup",
    },
  },
  {
    slug: "healthcare-patient-portal",
    title: "Healthcare Patient Portal",
    client: "A regional healthcare network",
    industry: "Healthcare",
    services: ["Custom Software Development", "Cloud & DevOps"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Terraform",
      "Nginx",
    ],
    challenge:
      "The healthcare network operated 14 clinics and 3 hospitals but had no unified digital experience for patients. Appointment scheduling, medical records access, prescription refills, and billing were handled through separate legacy systems, forcing patients to make phone calls and visit in person for routine tasks. The network needed a HIPAA-compliant patient portal that unified these touchpoints while integrating with their existing EHR system.",
    solution:
      "We built a HIPAA-compliant patient portal on Next.js with end-to-end encryption, role-based access control, and comprehensive audit logging. The portal integrates with the existing EHR via HL7 FHIR APIs, enabling patients to view lab results, schedule appointments, request prescription refills, and message their care team — all from a single responsive interface. Infrastructure runs on AWS with Terraform-managed resources, encrypted data at rest and in transit, and automated compliance reporting.",
    results: [
      "Onboarded 28,000 patients within 6 months, representing 62% of the active patient base",
      "Reduced appointment-related phone calls by 45%, freeing staff for higher-value tasks",
      "Achieved HIPAA compliance certification on first audit with zero remediation items",
      "Decreased average appointment no-show rate by 31% through automated reminders",
      "Maintained 99.95% uptime with automated failover across AWS availability zones",
    ],
    testimonial: {
      quote:
        "Our patients finally have the digital experience they expect from a modern healthcare provider. Kenla understood both the technical and compliance requirements from the start — that's rare.",
      role: "Chief Digital Officer, Healthcare Network",
    },
  },
];
