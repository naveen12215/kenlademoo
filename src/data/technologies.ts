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
  },
  {
    name: "Next.js",
    icon: "nextjs",
    category: "frontend",
    proficiency: "expert",
    description:
      "Full-stack React framework with server-side rendering, static generation, and API routes built in.",
  },
  {
    name: "Vue.js",
    icon: "vuejs",
    category: "frontend",
    proficiency: "advanced",
    description:
      "Progressive JavaScript framework known for its gentle learning curve and flexible architecture.",
  },
  {
    name: "Angular",
    icon: "angular",
    category: "frontend",
    proficiency: "advanced",
    description:
      "Enterprise-grade TypeScript framework with opinionated structure, dependency injection, and RxJS.",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "frontend",
    proficiency: "expert",
    description:
      "Typed superset of JavaScript that catches errors at compile time and improves developer productivity.",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
    category: "frontend",
    proficiency: "expert",
    description:
      "Utility-first CSS framework for rapidly building custom designs without leaving your markup.",
  },
  {
    name: "HTML5 / CSS3",
    icon: "html5",
    category: "frontend",
    proficiency: "expert",
    description:
      "The foundational web standards — semantic markup, responsive layouts, animations, and accessibility.",
  },
  {
    name: "Redux",
    icon: "redux",
    category: "frontend",
    proficiency: "advanced",
    description:
      "Predictable state management for JavaScript apps, commonly paired with React for complex state logic.",
  },

  // ─── Backend ───────────────────────────────────────────────────────
  {
    name: "Node.js",
    icon: "nodejs",
    category: "backend",
    proficiency: "expert",
    description:
      "JavaScript runtime built on V8, ideal for scalable network applications and real-time services.",
  },
  {
    name: "Python",
    icon: "python",
    category: "backend",
    proficiency: "expert",
    description:
      "Versatile language excelling in web backends, data science, scripting, and AI/ML workloads.",
  },
  {
    name: "Java",
    icon: "java",
    category: "backend",
    proficiency: "advanced",
    description:
      "Enterprise workhorse with a mature ecosystem, strong typing, and battle-tested concurrency support.",
  },
  {
    name: "Go",
    icon: "go",
    category: "backend",
    proficiency: "proficient",
    description:
      "Compiled language by Google, designed for simplicity, concurrency, and high-performance microservices.",
  },
  {
    name: "Express.js",
    icon: "expressjs",
    category: "backend",
    proficiency: "expert",
    description:
      "Minimalist Node.js web framework for building RESTful APIs and server-side applications.",
  },
  {
    name: "FastAPI",
    icon: "fastapi",
    category: "backend",
    proficiency: "expert",
    description:
      "Modern, high-performance Python web framework with automatic OpenAPI docs and async support.",
  },
  {
    name: "Spring Boot",
    icon: "spring",
    category: "backend",
    proficiency: "advanced",
    description:
      "Convention-over-configuration Java framework for production-ready microservices and enterprise apps.",
  },
  {
    name: "GraphQL",
    icon: "graphql",
    category: "backend",
    proficiency: "advanced",
    description:
      "Query language for APIs that lets clients request exactly the data they need — no more, no less.",
  },
  {
    name: "REST APIs",
    icon: "api",
    category: "backend",
    proficiency: "expert",
    description:
      "Industry-standard architectural style for designing networked applications with stateless operations.",
  },

  // ─── Mobile ────────────────────────────────────────────────────────
  {
    name: "React Native",
    icon: "react",
    category: "mobile",
    proficiency: "advanced",
    description:
      "Cross-platform mobile framework using React, sharing code between iOS and Android apps.",
  },
  {
    name: "Flutter",
    icon: "flutter",
    category: "mobile",
    proficiency: "proficient",
    description:
      "Google's UI toolkit for natively compiled mobile, web, and desktop apps from a single Dart codebase.",
  },
  {
    name: "Swift",
    icon: "swift",
    category: "mobile",
    proficiency: "proficient",
    description:
      "Apple's modern language for building native iOS, macOS, watchOS, and tvOS applications.",
  },
  {
    name: "Kotlin",
    icon: "kotlin",
    category: "mobile",
    proficiency: "proficient",
    description:
      "Modern JVM language and the recommended language for native Android app development.",
  },

  // ─── Cloud ─────────────────────────────────────────────────────────
  {
    name: "AWS",
    icon: "aws",
    category: "cloud",
    proficiency: "expert",
    description:
      "Amazon's comprehensive cloud platform — EC2, S3, Lambda, RDS, and 200+ managed services.",
  },
  {
    name: "Google Cloud",
    icon: "gcp",
    category: "cloud",
    proficiency: "advanced",
    description:
      "Google's cloud platform with strengths in data analytics, Kubernetes (GKE), and AI/ML services.",
  },
  {
    name: "Microsoft Azure",
    icon: "azure",
    category: "cloud",
    proficiency: "advanced",
    description:
      "Enterprise cloud platform with deep Microsoft ecosystem integration and hybrid cloud capabilities.",
  },
  {
    name: "Vercel",
    icon: "vercel",
    category: "cloud",
    proficiency: "expert",
    description:
      "Frontend cloud platform optimized for Next.js, with instant deployments and edge functions.",
  },
  {
    name: "Netlify",
    icon: "netlify",
    category: "cloud",
    proficiency: "advanced",
    description:
      "Jamstack-focused platform for deploying static sites and serverless functions with Git-based workflows.",
  },

  // ─── AI & ML ───────────────────────────────────────────────────────
  {
    name: "TensorFlow",
    icon: "tensorflow",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Google's open-source ML framework for building and deploying models at scale, from research to production.",
  },
  {
    name: "PyTorch",
    icon: "pytorch",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Flexible deep learning framework favored for research and rapid prototyping with dynamic computation graphs.",
  },
  {
    name: "OpenAI / GPT",
    icon: "openai",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "Large language model APIs for text generation, summarization, code completion, and conversational AI.",
  },
  {
    name: "LangChain",
    icon: "langchain",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "Framework for building context-aware LLM applications with chains, agents, and retrieval-augmented generation.",
  },
  {
    name: "Hugging Face",
    icon: "huggingface",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Open-source hub for pre-trained models and the Transformers library for NLP, vision, and audio tasks.",
  },
  {
    name: "scikit-learn",
    icon: "scikitlearn",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "Python library for classical machine learning — classification, regression, clustering, and feature engineering.",
  },
  {
    name: "Pandas",
    icon: "pandas",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "Data manipulation and analysis library providing DataFrame structures for tabular data processing.",
  },

  // ─── Blockchain ────────────────────────────────────────────────────
  {
    name: "Solidity",
    icon: "solidity",
    category: "blockchain",
    proficiency: "expert",
    description:
      "Contract-oriented language for writing smart contracts on Ethereum and EVM-compatible chains.",
  },
  {
    name: "Ethereum",
    icon: "ethereum",
    category: "blockchain",
    proficiency: "expert",
    description:
      "The leading programmable blockchain for decentralized applications, DeFi, and NFTs.",
  },
  {
    name: "Polygon",
    icon: "polygon",
    category: "blockchain",
    proficiency: "advanced",
    description:
      "Ethereum Layer 2 scaling solution providing faster, cheaper transactions while inheriting Ethereum security.",
  },
  {
    name: "Hardhat",
    icon: "hardhat",
    category: "blockchain",
    proficiency: "expert",
    description:
      "Ethereum development environment for compiling, testing, deploying, and debugging smart contracts.",
  },
  {
    name: "Web3.js",
    icon: "web3js",
    category: "blockchain",
    proficiency: "advanced",
    description:
      "JavaScript library for interacting with the Ethereum blockchain — reading state, sending transactions.",
  },
  {
    name: "IPFS",
    icon: "ipfs",
    category: "blockchain",
    proficiency: "advanced",
    description:
      "Decentralized storage protocol for content-addressed file sharing, commonly used for NFT metadata.",
  },
  {
    name: "Rust (Solana)",
    icon: "rust",
    category: "blockchain",
    proficiency: "proficient",
    description:
      "Systems language used for Solana smart programs, delivering high throughput and low-latency on-chain logic.",
  },

  // ─── Database ──────────────────────────────────────────────────────
  {
    name: "PostgreSQL",
    icon: "postgresql",
    category: "database",
    proficiency: "expert",
    description:
      "Advanced open-source relational database with JSONB support, full-text search, and extensibility.",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    category: "database",
    proficiency: "advanced",
    description:
      "Document-oriented NoSQL database designed for flexible schemas and horizontal scalability.",
  },
  {
    name: "Redis",
    icon: "redis",
    category: "database",
    proficiency: "expert",
    description:
      "In-memory data store used as a cache, message broker, and real-time leaderboard/session backend.",
  },
  {
    name: "MySQL",
    icon: "mysql",
    category: "database",
    proficiency: "advanced",
    description:
      "Widely adopted open-source relational database known for reliability and ease of use.",
  },
  {
    name: "Firebase",
    icon: "firebase",
    category: "database",
    proficiency: "advanced",
    description:
      "Google's Backend-as-a-Service with real-time database, authentication, and hosting for rapid prototyping.",
  },
  {
    name: "Supabase",
    icon: "supabase",
    category: "database",
    proficiency: "advanced",
    description:
      "Open-source Firebase alternative built on PostgreSQL with real-time subscriptions and row-level security.",
  },
  {
    name: "Elasticsearch",
    icon: "elasticsearch",
    category: "database",
    proficiency: "advanced",
    description:
      "Distributed search and analytics engine for log analysis, full-text search, and real-time data exploration.",
  },

  // ─── DevOps ────────────────────────────────────────────────────────
  {
    name: "Docker",
    icon: "docker",
    category: "devops",
    proficiency: "expert",
    description:
      "Container platform for packaging applications and dependencies into portable, reproducible units.",
  },
  {
    name: "Kubernetes",
    icon: "kubernetes",
    category: "devops",
    proficiency: "advanced",
    description:
      "Container orchestration system for automating deployment, scaling, and management of containerized workloads.",
  },
  {
    name: "Terraform",
    icon: "terraform",
    category: "devops",
    proficiency: "advanced",
    description:
      "Infrastructure as Code tool for provisioning and managing cloud resources across multiple providers.",
  },
  {
    name: "GitHub Actions",
    icon: "githubactions",
    category: "devops",
    proficiency: "expert",
    description:
      "CI/CD platform integrated into GitHub for automating build, test, and deployment workflows.",
  },
  {
    name: "Jenkins",
    icon: "jenkins",
    category: "devops",
    proficiency: "advanced",
    description:
      "Open-source automation server for building CI/CD pipelines with a vast plugin ecosystem.",
  },
  {
    name: "Nginx",
    icon: "nginx",
    category: "devops",
    proficiency: "expert",
    description:
      "High-performance web server and reverse proxy for load balancing, caching, and SSL termination.",
  },
  {
    name: "Prometheus / Grafana",
    icon: "prometheus",
    category: "devops",
    proficiency: "advanced",
    description:
      "Monitoring and observability stack — Prometheus for metrics collection, Grafana for dashboards and alerting.",
  },
];
