import type { Project } from "@/types";
import { decodeSlug } from "@/lib/utils";

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
  {
    slug: "public-sector-automation",
    title: "Public Sector Test Automation",
    client: "State of California",
    industry: "Government",
    services: ["Automation", "Cloud & DevOps"],
    technologies: [
      "Java",
      "Selenium",
      "Jenkins",
      "GitHub Actions",
      "Python",
      "Microsoft Azure",
    ],
    challenge:
      "The State of California needed to keep quality high across a multi-million-dollar enterprise IT estate. Manual testing could not keep up with regulatory change or system updates. Critical public services required 99.9% uptime, but QA bottlenecks delayed releases by weeks — sometimes months. Interdependent systems made regression testing a job measured in thousands of hours a year.",
    solution:
      "We built a test automation framework covering regression, unit, and smoke tests across the applications that matter. Cucumber made the cases readable for technical and non-technical stakeholders. A Selenium suite ran in Jenkins and Azure DevOps, with parallel execution, reporting dashboards, and defect tracking wired in — so a change could be proven overnight instead of in a war room.",
    results: [
      "Reduced testing time by 85%",
      "Cut release cycles by 4x while holding quality",
      "Achieved 99.9% system uptime on critical public services",
      "Saved an estimated $2.4 million annually in QA cost",
      "Moved thousands of formerly manual cases onto overnight runs",
    ],
    testimonial: {
      quote:
        "Kenla transformed our testing capabilities. What used to take weeks now happens overnight, and we've seen a dramatic improvement in the quality of our releases. This partnership has been instrumental in our digital transformation journey.",
      role: "Director of IT Quality Assurance, State of California",
    },
  },
  {
    slug: "saguaro-health-lims",
    title: "Saguaro Health Lab Management System",
    client: "Saguaro Health & Security",
    industry: "Healthcare",
    services: ["Web Development", "Custom Software Development"],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    challenge:
      "Saguaro Health & Security ran multiple facilities on systems that did not talk to each other. Patient data lived in silos, so staff re-entered records, double-booked appointments, and waited on lab results. Reports were built by hand. There was no live view of lab operations, and the legacy stack could not meet growing healthcare compliance requirements.",
    solution:
      "We shipped a cloud-native LIMS on React and Node.js, with PostgreSQL as the system of record. Patient history, appointment scheduling with conflict detection and reminders, and a reporting engine that emits compliance-ready documents sit in one product. Role-based access, audit logging, and encryption at rest and in transit keep the platform HIPAA-ready.",
    results: [
      "Improved operational efficiency by 40%",
      "Cut report generation time by 60%",
      "Reached 98% appointment accuracy",
      "Recorded zero compliance violations after launch",
      "Unified patient and lab operations across facilities",
    ],
    testimonial: {
      quote:
        "The LIMS platform has been a game-changer for our operations. Our staff can focus on patient care instead of paperwork, and the automated reporting has made compliance audits stress-free.",
      role: "Chief Medical Officer, Saguaro Health & Security",
    },
  },
  {
    slug: "selectortho-dmepos",
    title: "SelectOrtho DMEPOS System",
    client: "Select Ortho",
    industry: "Healthcare",
    services: ["Web Development", "Custom Software Development"],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Microsoft Azure",
    ],
    challenge:
      "Select Ortho's inventory system could not keep up with growth. Tracking durable medical equipment across locations, managing fittings and follow-ups, and staying inside Medicare and Medicaid billing rules created constant friction. Inventory, patient records, and billing did not share a workflow — so revenue leaked and staff and patients both paid for it. They needed a DMEPOS platform that could sit with their existing EHR and billing tools.",
    solution:
      "We built a DMEPOS management platform with a React interface and a service layer on Azure. Inventory with barcode scanning, fitting schedules and documentation, insurance verification, and EHR and billing integrations run as one path. Real-time stock alerts, follow-up automation, and compliance paperwork generation sit in the same product so intake through claim is not a scavenger hunt.",
    results: [
      "Gained 35% operational efficiency",
      "Increased revenue capture by 28%",
      "Cut billing errors by 50%",
      "Saved roughly three hours per staff member per day",
      "Connected inventory, fittings, and billing into one workflow",
    ],
    testimonial: {
      quote:
        "Finally, a system that understands the complexities of DMEPOS operations. The integration with our existing tools was seamless, and we've seen immediate improvements in both efficiency and revenue.",
      role: "Operations Director, Select Ortho",
    },
  },
  {
    slug: "paraverse-blockchain",
    title: "Paraverse Blockchain Platform",
    client: "Paraverse LLC",
    industry: "Web3",
    services: ["Blockchain & Web3", "Mobile Development"],
    technologies: [
      "Solidity",
      "React Native",
      "Ethereum",
      "Web3.js",
      "IPFS",
      "TypeScript",
    ],
    challenge:
      "Paraverse wanted blockchain in the hands of people who do not want to think about wallets. Existing Web3 products demanded technical knowledge, made fees opaque, and felt hostile to non-technical users. They needed a mobile-first product that hid the machinery — keys, gas, chain — without giving up security or decentralization, and a marketplace for digital assets that did not require a crash course in private keys.",
    solution:
      "We shipped a React Native app with Solidity contracts on Ethereum. Social-recovery wallets, meta-transactions so users are not staring at gas, and a marketplace for digital assets sit behind a familiar mobile UI. IPFS holds the assets; a Web3.js layer talks to the chain. Onboarding, live transaction status, and push notifications for asset activity are part of the same product.",
    results: [
      "Grew to 10,000+ active users",
      "Processed 500,000+ transactions",
      "Reached a 4.8 App Store rating",
      "Held a 92% user retention rate",
      "Made wallet and asset flows usable without a Web3 background",
    ],
    testimonial: {
      quote:
        "Kenla understood our vision of making blockchain accessible to everyone. They delivered a platform that our users love, and the technical architecture has proven incredibly scalable as we've grown.",
      role: "CEO, Paraverse LLC",
    },
  },
  {
    slug: "galaxy-health-records",
    title: "Galaxy Solutions Digital Health Records",
    client: "Galaxy Solutions",
    industry: "Healthcare",
    services: ["Blockchain & Web3", "Custom Software Development"],
    technologies: [
      "Node.js",
      "React",
      "AWS",
      "TypeScript",
      "PostgreSQL",
    ],
    challenge:
      "Galaxy Solutions saw a hole in healthcare credentialing: immunization histories, professional certifications, and medical credentials were hard to verify, easy to forge, and trapped in institutional silos. Providers burned hours on verification. Patients could not carry a portable record. Fraud in credentialing was a public-health risk. They needed instant verification with the individual still in control of the data.",
    solution:
      "We built a verifiable-credentials platform for health records — issuers write tamper-evident credentials, patients hold them in a wallet and share what a verifier actually needs. A React admin portal for issuers, a patient-facing app for the wallet, and verification APIs for providers. Hosted on AWS for availability, with a trust model that does not put a single hospital in charge of everyone else's records.",
    results: [
      "Reached 99.9% verification accuracy",
      "Cut verification time by 90%",
      "Onboarded 15+ healthcare organizations",
      "Issued 100,000+ credentials",
      "Gave patients a portable record without opening a new silo",
    ],
    testimonial: {
      quote:
        "This platform represents the future of healthcare credentialing. The combination of the trust model with Kenla's implementation expertise has created a solution that's both technically robust and remarkably user-friendly.",
      role: "VP of Innovation, Galaxy Solutions",
    },
  },
  {
    slug: "expense-ai-auditing",
    title: "AI-Powered Expense Validation",
    client: "A Dubai enterprise client",
    industry: "Enterprise",
    services: ["AI/ML & Generative AI", "Automation"],
    technologies: [
      "Python",
      "OpenAI / GPT",
      "LangChain",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    challenge:
      "The client's finance team spent its days reviewing expense reports by hand. The process was slow, inconsistent, and could not scale with volume. Matching receipts to claims was tedious and error-prone, and policy lived in people's heads instead of in a system that could be changed without a release.",
    solution:
      "We built an AI auditing pipeline that reads receipts, extracts the fields, and checks them against configurable policy. Multi-document packets are handled in one pass. Rules can be adjusted without a code change. Event-driven workflows move a report from extraction to exception review to a finished audit record, with a Python service orchestrating the run and reports written back into the finance system they already use.",
    results: [
      "Automated receipt data extraction across multi-document packets",
      "Put audit rules in configuration so policy can change without a deploy",
      "Reached production with the full workflow on the clock",
      "Wrote audit output back into existing finance records",
      "Freed reviewers to handle exceptions instead of typing every line",
    ],
  },
];

export function getProject(slug: string) {
  const key = decodeSlug(slug);
  if (!key) return undefined;
  return projects.find((item) => item.slug === key);
}
