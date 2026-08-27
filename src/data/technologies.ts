import type { Technology, TechCategory } from "@/types";

export const techCategories: Record<TechCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  cloud: "Cloud",
  "ai-ml": "AI & ML",
  blockchain: "Blockchain",
  database: "Database",
  devops: "DevOps",
};

export const technologies: Technology[] = [
  // ─── Frontend ──────────────────────────────────────────────────────
  {
    name: "React",
    icon: "react",
    category: "frontend",
    proficiency: "expert",
    description:
      "Component-based UI library for building fast, interactive single-page and server-rendered applications.",
    usedFor:
      "Trading dashboards, patient portals, and other interactive product UIs.",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    category: "frontend",
    proficiency: "expert",
    description:
      "Full-stack React framework with server-side rendering, static generation, and API routes built in.",
    usedFor:
      "Marketing sites, authenticated portals, and SEO-sensitive product surfaces.",
  },
  {
    name: "Vue.js",
    icon: "vuejs",
    category: "frontend",
    proficiency: "advanced",
    description:
      "Progressive JavaScript framework known for its gentle learning curve and flexible architecture.",
    usedFor:
      "Admin consoles, dashboards, and progressive web apps that need a lighter stack.",
  },
  {
    name: "Angular",
    icon: "angular",
    category: "frontend",
    proficiency: "advanced",
    description:
      "Enterprise-grade TypeScript framework with opinionated structure, dependency injection, and RxJS.",
    usedFor:
      "Large enterprise consoles, banking back-offices, and long-lived internal tools.",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "frontend",
    proficiency: "expert",
    description:
      "Typed superset of JavaScript that catches errors at compile time and improves developer productivity.",
    usedFor:
      "Every production web and API surface we ship — from dashboards to backends.",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
    category: "frontend",
    proficiency: "expert",
    description:
      "Utility-first CSS framework for rapidly building custom designs without leaving your markup.",
    usedFor:
      "Marketing sites, design-system UIs, and fast-moving product interfaces.",
  },
  {
    name: "HTML5 / CSS3",
    icon: "html5",
    category: "frontend",
    proficiency: "expert",
    description:
      "The foundational web standards — semantic markup, responsive layouts, animations, and accessibility.",
    usedFor:
      "Foundational layouts and every browser-facing Kenla product.",
  },
  {
    name: "Redux",
    icon: "redux",
    category: "frontend",
    proficiency: "advanced",
    description:
      "Predictable state management for JavaScript apps, commonly paired with React for complex state logic.",
    usedFor:
      "Trading desks, multi-step wizards, and apps with shared global state.",
  },

  // ─── Backend ───────────────────────────────────────────────────────
  {
    name: "Node.js",
    icon: "nodejs",
    category: "backend",
    proficiency: "expert",
    description:
      "JavaScript runtime built on V8, ideal for scalable network applications and real-time services.",
    usedFor:
      "Real-time APIs, trading feeds, and full-stack JavaScript product backends.",
  },
  {
    name: "Python",
    icon: "python",
    category: "backend",
    proficiency: "expert",
    description:
      "Versatile language excelling in web backends, data science, scripting, and AI/ML workloads.",
    usedFor:
      "ML pipelines, document processing, and data-heavy service layers.",
  },
  {
    name: "Java",
    icon: "java",
    category: "backend",
    proficiency: "advanced",
    description:
      "Enterprise workhorse with a mature ecosystem, strong typing, and battle-tested concurrency support.",
    usedFor:
      "Enterprise integrations, core banking services, and high-throughput backends.",
  },
  {
    name: "Go",
    icon: "go",
    category: "backend",
    proficiency: "proficient",
    description:
      "Compiled language by Google, designed for simplicity, concurrency, and high-performance microservices.",
    usedFor:
      "Low-latency microservices, API gateways, and high-concurrency workers.",
  },
  {
    name: "Express.js",
    icon: "expressjs",
    category: "backend",
    proficiency: "expert",
    description:
      "Minimalist Node.js web framework for building RESTful APIs and server-side applications.",
    usedFor:
      "REST APIs, BFF layers, and Node.js service scaffolds.",
  },
  {
    name: "FastAPI",
    icon: "fastapi",
    category: "backend",
    proficiency: "expert",
    description:
      "Modern, high-performance Python web framework with automatic OpenAPI docs and async support.",
    usedFor:
      "ML inference APIs, document pipelines, and Python microservices.",
  },
  {
    name: "Spring Boot",
    icon: "spring",
    category: "backend",
    proficiency: "advanced",
    description:
      "Convention-over-configuration Java framework for production-ready microservices and enterprise apps.",
    usedFor:
      "Enterprise microservices, insurance cores, and Java-heavy platforms.",
  },
  {
    name: "GraphQL",
    icon: "graphql",
    category: "backend",
    proficiency: "advanced",
    description:
      "Query language for APIs that lets clients request exactly the data they need — no more, no less.",
    usedFor:
      "Mobile-friendly APIs and product UIs that need precise data fetching.",
  },
  {
    name: "REST APIs",
    icon: "api",
    category: "backend",
    proficiency: "expert",
    description:
      "Industry-standard architectural style for designing networked applications with stateless operations.",
    usedFor:
      "Every integration surface — from claims systems to patient records.",
  },

  // ─── Mobile ────────────────────────────────────────────────────────
  {
    name: "React Native",
    icon: "react",
    category: "mobile",
    proficiency: "advanced",
    description:
      "Cross-platform mobile framework using React, sharing code between iOS and Android apps.",
    usedFor:
      "Cross-platform consumer and clinician apps sharing one team.",
  },
  {
    name: "Flutter",
    icon: "flutter",
    category: "mobile",
    proficiency: "proficient",
    description:
      "Google's UI toolkit for natively compiled mobile, web, and desktop apps from a single Dart codebase.",
    usedFor:
      "Pixel-perfect mobile products that must feel native on iOS and Android.",
  },
  {
    name: "Swift",
    icon: "swift",
    category: "mobile",
    proficiency: "proficient",
    description:
      "Apple's modern language for building native iOS, macOS, watchOS, and tvOS applications.",
    usedFor:
      "Native iOS companions, health apps, and Apple-first product surfaces.",
  },
  {
    name: "Kotlin",
    icon: "kotlin",
    category: "mobile",
    proficiency: "proficient",
    description:
      "Modern JVM language and the recommended language for native Android app development.",
    usedFor: "Native Android apps and JVM mobile clients.",
  },

  // ─── Cloud ─────────────────────────────────────────────────────────
  {
    name: "AWS",
    icon: "aws",
    category: "cloud",
    proficiency: "expert",
    description:
      "Amazon's comprehensive cloud platform — EC2, S3, Lambda, RDS, and 200+ managed services.",
    usedFor:
      "Production hosting for trading, claims, and healthcare platforms.",
  },
  {
    name: "Google Cloud",
    icon: "gcp",
    category: "cloud",
    proficiency: "advanced",
    description:
      "Google's cloud platform with strengths in data analytics, Kubernetes (GKE), and AI/ML services.",
    usedFor: "Analytics-heavy and ML-adjacent cloud estates.",
  },
  {
    name: "Microsoft Azure",
    icon: "azure",
    category: "cloud",
    proficiency: "advanced",
    description:
      "Enterprise cloud platform with deep Microsoft ecosystem integration and hybrid cloud capabilities.",
    usedFor:
      "Enterprise and hybrid deployments in Microsoft-centric shops.",
  },
  {
    name: "Vercel",
    icon: "vercel",
    category: "cloud",
    proficiency: "expert",
    description:
      "Frontend cloud platform optimized for Next.js, with instant deployments and edge functions.",
    usedFor:
      "Next.js marketing sites, portals, and edge-rendered product apps.",
  },
  {
    name: "Netlify",
    icon: "netlify",
    category: "cloud",
    proficiency: "advanced",
    description:
      "Jamstack-focused platform for deploying static sites and serverless functions with Git-based workflows.",
    usedFor: "Static and Jamstack sites with Git-based deploys.",
  },

  // ─── AI & ML ───────────────────────────────────────────────────────
  {
    name: "TensorFlow",
    icon: "tensorflow",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Google's open-source ML framework for building and deploying models at scale, from research to production.",
    usedFor:
      "Document classification, claims models, and production neural nets.",
  },
  {
    name: "PyTorch",
    icon: "pytorch",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Flexible deep learning framework favored for research and rapid prototyping with dynamic computation graphs.",
    usedFor:
      "Research-to-production models and custom deep-learning pipelines.",
  },
  {
    name: "OpenAI / GPT",
    icon: "openai",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "Large language model APIs for text generation, summarization, code completion, and conversational AI.",
    usedFor:
      "Extraction, summarization, and conversational assistants in claims and ops.",
  },
  {
    name: "LangChain",
    icon: "langchain",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "Framework for building context-aware LLM applications with chains, agents, and retrieval-augmented generation.",
    usedFor:
      "RAG assistants, policy Q&A, and multi-step LLM workflows.",
  },
  {
    name: "Hugging Face",
    icon: "huggingface",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Open-source hub for pre-trained models and the Transformers library for NLP, vision, and audio tasks.",
    usedFor:
      "Fine-tuned NLP models and open-source transformer pipelines.",
  },
  {
    name: "scikit-learn",
    icon: "scikitlearn",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "Python library for classical machine learning — classification, regression, clustering, and feature engineering.",
    usedFor:
      "Scoring models, classification, and classical ML in ops workflows.",
  },
  {
    name: "Pandas",
    icon: "pandas",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "Data manipulation and analysis library providing DataFrame structures for tabular data processing.",
    usedFor:
      "Claims datasets, ETL, and every tabular pipeline we run.",
  },

  // ─── Blockchain ────────────────────────────────────────────────────
  {
    name: "Solidity",
    icon: "solidity",
    category: "blockchain",
    proficiency: "expert",
    description:
      "Contract-oriented language for writing smart contracts on Ethereum and EVM-compatible chains.",
    usedFor: "Smart contracts for DeFi, tokens, and EVM product logic.",
  },
  {
    name: "Ethereum",
    icon: "ethereum",
    category: "blockchain",
    proficiency: "expert",
    description:
      "The leading programmable blockchain for decentralized applications, DeFi, and NFTs.",
    usedFor:
      "Mainnet settlement, DeFi protocols, and NFT-adjacent products.",
  },
  {
    name: "Polygon",
    icon: "polygon",
    category: "blockchain",
    proficiency: "advanced",
    description:
      "Ethereum Layer 2 scaling solution providing faster, cheaper transactions while inheriting Ethereum security.",
    usedFor:
      "Lower-cost dApps, consumer Web3, and Layer 2 transaction paths.",
  },
  {
    name: "Hardhat",
    icon: "hardhat",
    category: "blockchain",
    proficiency: "expert",
    description:
      "Ethereum development environment for compiling, testing, deploying, and debugging smart contracts.",
    usedFor:
      "Contract testing, deployment, and audit-ready EVM development.",
  },
  {
    name: "Web3.js",
    icon: "web3js",
    category: "blockchain",
    proficiency: "advanced",
    description:
      "JavaScript library for interacting with the Ethereum blockchain — reading state, sending transactions.",
    usedFor: "dApp frontends, wallets, and on-chain reads and writes.",
  },
  {
    name: "IPFS",
    icon: "ipfs",
    category: "blockchain",
    proficiency: "advanced",
    description:
      "Decentralized storage protocol for content-addressed file sharing, commonly used for NFT metadata.",
    usedFor:
      "NFT metadata, decentralized assets, and content-addressed storage.",
  },
  {
    name: "Rust (Solana)",
    icon: "rust",
    category: "blockchain",
    proficiency: "proficient",
    description:
      "Systems language used for Solana smart programs, delivering high throughput and low-latency on-chain logic.",
    usedFor:
      "High-throughput Solana programs and on-chain market logic.",
  },

  // ─── Database ──────────────────────────────────────────────────────
  {
    name: "PostgreSQL",
    icon: "postgresql",
    category: "database",
    proficiency: "expert",
    description:
      "Advanced open-source relational database with JSONB support, full-text search, and extensibility.",
    usedFor:
      "Transactional cores — orders, claims, patients, and audit trails.",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    category: "database",
    proficiency: "advanced",
    description:
      "Document-oriented NoSQL database designed for flexible schemas and horizontal scalability.",
    usedFor:
      "Flexible catalogs, event logs, and rapidly evolving document stores.",
  },
  {
    name: "Redis",
    icon: "redis",
    category: "database",
    proficiency: "expert",
    description:
      "In-memory data store used as a cache, message broker, and real-time leaderboard/session backend.",
    usedFor:
      "Market-data caches, sessions, and sub-second real-time paths.",
  },
  {
    name: "MySQL",
    icon: "mysql",
    category: "database",
    proficiency: "advanced",
    description:
      "Widely adopted open-source relational database known for reliability and ease of use.",
    usedFor: "Classic relational apps and hosted-product backends.",
  },
  {
    name: "Firebase",
    icon: "firebase",
    category: "database",
    proficiency: "advanced",
    description:
      "Google's Backend-as-a-Service with real-time database, authentication, and hosting for rapid prototyping.",
    usedFor:
      "Rapid prototypes, realtime clients, and auth-backed MVPs.",
  },
  {
    name: "Supabase",
    icon: "supabase",
    category: "database",
    proficiency: "advanced",
    description:
      "Open-source Firebase alternative built on PostgreSQL with real-time subscriptions and row-level security.",
    usedFor:
      "Postgres-backed products that need auth, realtime, and row-level security quickly.",
  },
  {
    name: "Elasticsearch",
    icon: "elasticsearch",
    category: "database",
    proficiency: "advanced",
    description:
      "Distributed search and analytics engine for log analysis, full-text search, and real-time data exploration.",
    usedFor:
      "Claims search, log analytics, and full-text document lookup.",
  },

  // ─── DevOps ────────────────────────────────────────────────────────
  {
    name: "Docker",
    icon: "docker",
    category: "devops",
    proficiency: "expert",
    description:
      "Container platform for packaging applications and dependencies into portable, reproducible units.",
    usedFor:
      "Every service we ship — local parity and production containers.",
  },
  {
    name: "Kubernetes",
    icon: "kubernetes",
    category: "devops",
    proficiency: "advanced",
    description:
      "Container orchestration system for automating deployment, scaling, and management of containerized workloads.",
    usedFor:
      "Trading, claims, and always-on production clusters.",
  },
  {
    name: "Terraform",
    icon: "terraform",
    category: "devops",
    proficiency: "advanced",
    description:
      "Infrastructure as Code tool for provisioning and managing cloud resources across multiple providers.",
    usedFor: "Repeatable cloud estates for AWS, GCP, and Azure.",
  },
  {
    name: "GitHub Actions",
    icon: "githubactions",
    category: "devops",
    proficiency: "expert",
    description:
      "CI/CD platform integrated into GitHub for automating build, test, and deployment workflows.",
    usedFor:
      "CI/CD for product repos — build, test, and zero-downtime deploys.",
  },
  {
    name: "Jenkins",
    icon: "jenkins",
    category: "devops",
    proficiency: "advanced",
    description:
      "Open-source automation server for building CI/CD pipelines with a vast plugin ecosystem.",
    usedFor:
      "Enterprise pipelines in shops that already run Jenkins.",
  },
  {
    name: "Nginx",
    icon: "nginx",
    category: "devops",
    proficiency: "expert",
    description:
      "High-performance web server and reverse proxy for load balancing, caching, and SSL termination.",
    usedFor:
      "Reverse proxies, TLS termination, and load balancing in front of APIs.",
  },
  {
    name: "Prometheus / Grafana",
    icon: "prometheus",
    category: "devops",
    proficiency: "advanced",
    description:
      "Monitoring and observability stack — Prometheus for metrics collection, Grafana for dashboards and alerting.",
    usedFor:
      "Uptime, latency, and ops dashboards on production clusters.",
  },
];
