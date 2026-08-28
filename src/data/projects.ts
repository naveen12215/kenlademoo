import type { Project } from "@/types";
import { decodeSlug } from "@/lib/utils";

export const projects: Project[] = [
  {
    slug: "legacy-modernization-assistant",
    title: "Legacy Modernization Assistant",
    client: "Public-sector modernization programs",
    industry: "Government",
    services: [
      "AI/ML & Generative AI",
      "Custom Software Development",
      "Public Sector Systems",
    ],
    technologies: [
      "Python",
      "LangChain",
      "OpenAI / GPT",
      "Hugging Face",
      "FastAPI",
      "PostgreSQL",
    ],
    challenge:
      "Decades-old application code — COBOL, FORTRAN, DYL-280, and stacks like them — still runs the business, but the people who can read it are leaving. Teams cannot modernize what they cannot see: the rules, the data, the batch jobs, and the integrations locked inside those programs.",
    solution:
      "LMA reads that legacy code, then extracts, maps, and analyzes it so the business inside the programs is visible before anyone rewrites a line. From that analysis it produces the documents modernization needs: system architecture, business rules and logic, a database catalog, control and data flow, batch jobs, and external integrations. It then designs and generates code for the successor from the same analysis, so the new application is based on what the legacy system actually does.",
    results: [
      "Makes the business locked in COBOL, FORTRAN, and similar stacks visible before a rewrite starts",
      "Produces architecture, rules, data catalogs, batch, and integration documents from the same analysis",
      "Generates modernized application code grounded in what the legacy system actually does",
    ],
  },
  {
    slug: "field-information-system",
    title: "Field Information System",
    client: "State of California",
    industry: "Government",
    services: [
      "Public Sector Systems",
      "Custom Software Development",
      "Cloud & DevOps",
    ],
    technologies: [
      "AWS",
      "Docker",
      "GitHub Actions",
      "PostgreSQL",
      "REST APIs",
      ".NET",
    ],
    challenge:
      "FIS was a decades-old Informix application on Unix — the operational backbone for field office staff. It could not stay on an aging database and a shrinking pool of people who knew it.",
    solution:
      "KENLA migrated FIS to a full-stack .NET microservices application on AWS. State staff use it to configure and track budget, expenses, and timesheets for field office staff. The new platform keeps those business processes intact while moving them onto a stack the state can operate and extend.",
    results: [
      "Replaced a Unix Informix field-office system with microservices on AWS",
      "Kept budget, expense, and timesheet processes intact through the move",
      "Put the work on a stack the state can operate and extend",
    ],
  },
  {
    slug: "independent-project-oversight",
    title: "Independent Project Oversight and IV&V",
    client: "Galaxy Solutions, California; used by the State of California",
    industry: "Government",
    services: [
      "Public Sector Systems",
      "Custom Software Development",
      "Mobile Development",
    ],
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "REST APIs",
    ],
    challenge:
      "Independent Project Oversight Reporting (IPOR) and Independent Verification and Validation (IV&V) teams needed one place to record findings, observations, and recommendations, and to work with client teams without losing the thread of each item.",
    solution:
      "IPOR and IV&V are web and mobile applications for tracking those findings through their lifecycle. The team can collaborate across resources to develop findings; client teams can search and retrieve them. Dashboards let executives follow each item from open to close. The system generates reports of various kinds and provides document management for formally submitted report documents.",
    results: [
      "Gives IPOR and IV&V teams one place to record findings through their lifecycle",
      "Lets client teams search and retrieve items without losing the thread",
      "Puts executive dashboards and formal report documents on the same system",
    ],
  },
  {
    slug: "business-continuity-management",
    title: "Business Continuity Management Program",
    client: "Galaxy Solutions, California; used by the State of California",
    industry: "Government",
    services: ["Public Sector Systems", "Custom Software Development"],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "REST APIs"],
    challenge:
      "State departments needed a way to gauge the quality of their business continuity plans and to produce mandatory reports.",
    solution:
      "BCMP is a dashboard-driven application. Departments can see the progress of analysis and generate the reports required for mandatory reporting.",
    results: [
      "Lets departments see the progress of continuity-plan analysis",
      "Produces the reports required for mandatory reporting",
    ],
  },
  {
    slug: "cash-for-college",
    title: "Cash for College Workshop Management",
    client: "State of California, USA",
    industry: "Government",
    services: [
      "Public Sector Systems",
      "Custom Software Development",
      "Web Development",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
    ],
    challenge:
      "The California Cash for College (CCFC) workshop series is a partnership of high schools, community colleges, universities, and community groups, funded by the Commission, campuses, Regional Coordinating Organizations, and local organizations. Hosts needed one system to run the workshops and follow the students afterward.",
    solution:
      "KENLA built the system hosts use to register workshops, request marketing materials and training, conduct exit surveys, and track student performance after the workshop.",
    results: [
      "Hosts register workshops and request marketing materials and training in one place",
      "Exit surveys and post-workshop student performance sit on the same system",
    ],
  },
  {
    slug: "insight-360",
    title: "Insight 360",
    client: "Small and medium-sized businesses",
    industry: "Enterprise",
    services: ["AI/ML & Generative AI", "Custom Software Development"],
    technologies: [
      "Python",
      "LangChain",
      "OpenAI / GPT",
      "React",
      "FastAPI",
      "PostgreSQL",
    ],
    challenge:
      "Most SMB teams have access to general-purpose AI, but those tools do not know how the company prefers to operate. Answers drift off-brand, and routine work still lives in shared drives.",
    solution:
      "Insight 360 is a command center that puts AI behind the business's own values, policies, and working rules. Operators work from one place: ask questions across company knowledge, draft customer and internal communications, summarize documents, and kick off routine workflows. A values layer sits in front of the models. It encodes what the company will and will not say, how it treats customers, and which decisions need a person.",
    results: [
      "Puts company values, policies, and working rules in front of the models",
      "Gives operators one place to ask, draft, summarize, and run routine workflows",
      "Keeps answers on-brand instead of dropping a generic chatbot on shared drives",
    ],
  },
  {
    slug: "annie-acs",
    title: "Annie ACS",
    client: "A cosmetic surgery clinic",
    industry: "Healthcare",
    services: ["Healthcare Applications", "AI/ML & Generative AI"],
    technologies: [
      "Python",
      "LangChain",
      "OpenAI / GPT",
      "FastAPI",
      "React",
    ],
    challenge:
      "Cosmetic surgery patients ask detailed questions before they book and after they go home: what a procedure involves, how to prepare, and what recovery looks like. Generic medical chatbots guess. That puts inaccurate answers in front of patients and repetitive load on the front desk.",
    solution:
      "Annie ACS is trained on that doctor's procedures, methodologies, and patient-facing guidance. Annie answers in the clinic's voice from consult through post-operative care. If the source material does not cover the question, it does not invent a protocol; it points the patient back to staff.",
    results: [
      "Answers in the clinic's voice from consult through post-operative care",
      "Does not invent a protocol when the source material does not cover the question",
      "Cuts repetitive load on the front desk",
    ],
  },
  {
    slug: "resume-analysis-assistant",
    title: "Resume Analysis Assistant",
    client: "HR and recruiting managers",
    industry: "Enterprise",
    services: ["AI/ML & Generative AI"],
    technologies: [
      "Python",
      "LangChain",
      "OpenAI / GPT",
      "FastAPI",
      "PostgreSQL",
    ],
    challenge:
      "HR and recruiting managers review resumes in bulk against the requirements for a role. Volume is the problem: a posting can attract hundreds of applications in inconsistent formats. The first pass is still a raw inbox.",
    solution:
      "The assistant is built for that first pass, so the team works from a ranked shortlist instead of a raw inbox. It surfaces the candidates who best fit those needs and why a profile scored as it did, so managers can compare people and push the strongest set forward. It does not replace the hiring decision.",
    results: [
      "Turns a raw inbox of inconsistent applications into a ranked shortlist",
      "Shows why a profile scored as it did so managers can compare people",
      "Leaves the hiring decision with the team",
    ],
  },
  {
    slug: "paraverse-blockchain",
    title: "Paraverse Blockchain Platform",
    client: "Paraverse LLC",
    industry: "Enterprise",
    services: ["Blockchain & Web3", "Mobile Development"],
    technologies: [
      "Solidity",
      "React Native",
      "Ethereum",
      "Web3.js",
      "IPFS",
    ],
    challenge:
      "Paraverse LLC had a vision to make blockchain technology accessible to everyday users, but the existing Web3 landscape was plagued with complexity. Wallet management required technical knowledge, transaction fees were confusing, and the user experience of most blockchain applications was intimidating for non-technical users. They needed a mobile-first platform that could abstract away blockchain complexity while maintaining the security and decentralisation benefits.",
    solution:
      "A comprehensive mobile blockchain platform built with React Native for cross-platform deployment and Solidity for secure smart contracts on Ethereum. The application features an intuitive wallet system with social recovery options, gasless transactions through meta-transactions, and a user-friendly digital asset marketplace. IPFS handles decentralised storage of digital assets, and a Web3.js integration layer handles all blockchain interactions behind a simple, familiar interface — with educational onboarding flows, real-time transaction tracking, and push notifications for asset activity.",
    results: [
      "Grew to 10K+ active users by making blockchain accessible without sacrificing decentralisation",
      "Processed 500K+ transactions through gasless meta-transaction architecture",
      "Earned a 4.8 App Store rating and 92% user retention rate",
    ],
  },
  {
    slug: "saguaro-health",
    title: "Saguaro Health",
    client: "A diagnostic lab",
    industry: "Healthcare",
    services: [
      "Healthcare Applications",
      "Custom Software Development",
      "Web Development",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    challenge:
      "A diagnostic lab needed one system from sample collection through report generation. Off-the-shelf tools covered slices of that chain and left the rest in spreadsheets and side systems.",
    solution:
      "KENLA designed and implemented a comprehensive custom LIMS end to end: collection scheduling, sample accessioning and chain of custody, test orders, in-lab status, result capture and review, and formatted report generation. Patients book collections and retrieve reports; lab staff move work through the bench without breaking context; leadership sees what is in flight. It is not a module bolted onto someone else's product. It is the system the lab uses day to day.",
    results: [
      "Runs collection through report generation in one custom LIMS",
      "Gives patients booking and report retrieval; staff a single bench workflow",
      "Gives leadership a live view of what is in flight",
    ],
  },
];

export function getProject(slug: string) {
  const key = decodeSlug(slug);
  if (!key) return undefined;
  return projects.find((item) => item.slug === key);
}
