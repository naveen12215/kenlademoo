import type { Technology, TechCategory } from "@/types";

export const techCategories: Partial<Record<TechCategory, string>> = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  cloud: "Cloud",
  "ai-ml": "Generative AI",
  database: "Data",
  blockchain: "Blockchain",
  devops: "DevOps",
};

export const technologies: Technology[] = [
  // ─── Frontend (PDF) ────────────────────────────────────────────────
  {
    name: "React",
    icon: "react",
    category: "frontend",
    proficiency: "expert",
    description:
      "Component-based UI library for building fast, interactive single-page and server-rendered applications.",
    usedFor:
      "IPOR and IV&V, Cash for College, Insight 360, Annie ACS, Saguaro Health, and BCMP.",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    category: "frontend",
    proficiency: "expert",
    description:
      "Full-stack React framework with server-side rendering, static generation, and API routes built in.",
    usedFor:
      "Public sites, authenticated portals, and SEO-sensitive product surfaces.",
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
      "Large departmental consoles and long-lived internal tools.",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "frontend",
    proficiency: "expert",
    description:
      "Typed superset of JavaScript that catches errors at compile time and improves developer productivity.",
    usedFor:
      "IPOR and IV&V, Cash for College, and Business Continuity Management.",
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
    name: "Tailwind CSS",
    icon: "tailwindcss",
    category: "frontend",
    proficiency: "expert",
    description:
      "Utility-first CSS framework for rapidly building custom designs without leaving your markup.",
    usedFor:
      "Product interfaces and marketing surfaces in the Kenla frontend stack.",
  },
  {
    name: "Redux",
    icon: "redux",
    category: "frontend",
    proficiency: "advanced",
    description:
      "Predictable state management for JavaScript apps, commonly paired with React for complex state logic.",
    usedFor:
      "Dashboards, multi-step wizards, and apps with shared global state.",
  },

  // ─── Backend (PDF) ─────────────────────────────────────────────────
  {
    name: "Node.js",
    icon: "nodejs",
    category: "backend",
    proficiency: "expert",
    description:
      "JavaScript runtime built on V8, ideal for scalable network applications and real-time services.",
    usedFor:
      "IPOR and IV&V, Cash for College, BCMP, and Saguaro Health APIs.",
  },
  {
    name: "Python",
    icon: "python",
    category: "backend",
    proficiency: "expert",
    description:
      "Versatile language excelling in web backends, data science, scripting, and AI/ML workloads.",
    usedFor:
      "Legacy Modernization Assistant, Insight 360, Annie ACS, and Resume Analysis Assistant.",
  },
  {
    name: "Java",
    icon: "java",
    category: "backend",
    proficiency: "advanced",
    description:
      "Enterprise workhorse with a mature ecosystem, strong typing, and battle-tested concurrency support.",
    usedFor:
      "Enterprise integrations and departmental backends on the JVM.",
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
    name: "Scala",
    icon: "scala",
    category: "backend",
    proficiency: "proficient",
    description:
      "JVM language for concurrent and data-heavy backends, often paired with Play and Akka.",
    usedFor:
      "High-concurrency services and data pipelines on the JVM.",
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
      "LLM inference APIs for LMA, Insight 360, Annie ACS, and resume screening.",
  },
  {
    name: "Spring Boot",
    icon: "spring",
    category: "backend",
    proficiency: "advanced",
    description:
      "Convention-over-configuration Java framework for production-ready microservices and enterprise apps.",
    usedFor:
      "Enterprise microservices and Java-heavy departmental platforms.",
  },
  {
    name: "Play",
    icon: "play",
    category: "backend",
    proficiency: "proficient",
    description:
      "Reactive web framework on the JVM for Scala and Java HTTP services.",
    usedFor:
      "JVM HTTP APIs and Play-based service layers.",
  },
  {
    name: "Akka",
    icon: "akka",
    category: "backend",
    proficiency: "proficient",
    description:
      "Actor toolkit for concurrent, distributed JVM systems.",
    usedFor:
      "Message-driven backends that have to stay up under load.",
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
      "Field Information System, IPOR and IV&V, and Business Continuity Management integrations.",
  },
  {
    name: ".NET",
    icon: "dotnet",
    category: "backend",
    proficiency: "advanced",
    description:
      "Microsoft's application platform for web APIs, services, and microservices.",
    usedFor:
      "Field Information System — full-stack .NET microservices for State of California field operations.",
  },
  {
    name: "Ruby on Rails",
    icon: "rubyonrails",
    category: "backend",
    proficiency: "proficient",
    description:
      "Convention-over-configuration web framework for rapid, maintainable server-side applications.",
    usedFor:
      "Web applications and admin surfaces when Rails is the stack that fits.",
  },
  {
    name: "Apache Spark",
    icon: "apachespark",
    category: "backend",
    proficiency: "proficient",
    description:
      "Distributed processing engine for large-scale batch and streaming data.",
    usedFor:
      "Batch jobs, catalogs, and data-heavy modernization work.",
  },

  // ─── Mobile (PDF) ──────────────────────────────────────────────────
  {
    name: "Swift",
    icon: "swift",
    category: "mobile",
    proficiency: "proficient",
    description:
      "Apple's modern language for building native iOS, macOS, watchOS, and tvOS applications.",
    usedFor:
      "Native iOS applications when the platform matters.",
  },
  {
    name: "Objective-C",
    icon: "objectivec",
    category: "mobile",
    proficiency: "proficient",
    description:
      "Apple's original language for iOS and macOS — still required on older native estates.",
    usedFor:
      "iOS applications that still run Objective-C alongside Swift.",
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
  {
    name: "React Native",
    icon: "react",
    category: "mobile",
    proficiency: "advanced",
    description:
      "Cross-platform mobile framework using React, sharing code between iOS and Android apps.",
    usedFor:
      "Independent Project Oversight and IV&V — web and mobile findings tracking.",
  },
  {
    name: "Flutter",
    icon: "flutter",
    category: "mobile",
    proficiency: "proficient",
    description:
      "Google's UI toolkit for natively compiled mobile, web, and desktop apps from a single Dart codebase.",
    usedFor:
      "Cross-platform mobile products that must feel native on iOS and Android.",
  },
  {
    name: "Cordova",
    icon: "cordova",
    category: "mobile",
    proficiency: "proficient",
    description:
      "Hybrid mobile toolkit wrapping a web view as an iOS and Android app.",
    usedFor:
      "Existing hybrid estates that need to keep shipping on Cordova.",
  },
  {
    name: "Oracle MAF",
    icon: "oraclemaf",
    category: "mobile",
    proficiency: "proficient",
    description:
      "Oracle Mobile Application Framework for enterprise mobile clients on Oracle stacks.",
    usedFor:
      "Enterprise mobility when the client estate is already on Oracle.",
  },
  {
    name: "SAP Mobile Platform",
    icon: "sapmobileplatform",
    category: "mobile",
    proficiency: "proficient",
    description:
      "SAP's platform for enterprise mobile applications connected to SAP backends.",
    usedFor:
      "Mobile clients on SAP estates when the problem sits there.",
  },

  // ─── Cloud (PDF) ───────────────────────────────────────────────────
  {
    name: "AWS",
    icon: "aws",
    category: "cloud",
    proficiency: "expert",
    description:
      "Amazon's comprehensive cloud platform — EC2, S3, Lambda, RDS, and managed services.",
    usedFor:
      "Field Information System, Cash for College, and Saguaro Health production hosting.",
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
    name: "Google Cloud",
    icon: "gcp",
    category: "cloud",
    proficiency: "advanced",
    description:
      "Google's cloud platform with strengths in data analytics, Kubernetes (GKE), and AI/ML services.",
    usedFor: "Analytics-heavy and ML-adjacent cloud estates.",
  },
  {
    name: "DigitalOcean",
    icon: "digitalocean",
    category: "cloud",
    proficiency: "advanced",
    description:
      "Straightforward cloud for droplets, managed databases, and Kubernetes.",
    usedFor:
      "Production apps and staging estates that need a simpler cloud bill.",
  },
  {
    name: "Vercel",
    icon: "vercel",
    category: "cloud",
    proficiency: "expert",
    description:
      "Frontend cloud platform optimized for Next.js, with instant deployments and edge functions.",
    usedFor:
      "Next.js sites, portals, and edge-rendered product apps.",
  },

  // ─── Generative AI (PDF) ───────────────────────────────────────────
  {
    name: "LangChain",
    icon: "langchain",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "Framework for building context-aware LLM applications with chains, agents, ReAct, Chain-of-Thought, and retrieval-augmented generation.",
    usedFor:
      "Legacy Modernization Assistant, Insight 360, Annie ACS, and Resume Analysis Assistant.",
  },
  {
    name: "LangGraph",
    icon: "langgraph",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "Graph orchestration for LangChain agents — stateful, cyclic workflows with ReAct and Chain-of-Thought control.",
    usedFor:
      "Multi-step assistants, audit and recruitment workflows, and tool-using agents.",
  },
  {
    name: "Hugging Face",
    icon: "huggingface",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Open-source hub for pre-trained models and the Transformers library for NLP, vision, and audio tasks.",
    usedFor:
      "Legacy Modernization Assistant — analysis of COBOL, FORTRAN, and similar stacks.",
  },
  {
    name: "AWS Bedrock",
    icon: "awsbedrock",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Amazon's managed service for running foundation models — Claude, Llama, Titan, and others — behind one API.",
    usedFor:
      "Production LLM workloads on AWS without standing up a GPU fleet.",
  },
  {
    name: "Claude",
    icon: "claude",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "Anthropic's large language models for long-context analysis, drafting, and assistants that stay inside source material.",
    usedFor:
      "Document analysis, clinic and policy assistants, and values-layer command centers.",
  },
  {
    name: "OpenAI / GPT",
    icon: "openai",
    category: "ai-ml",
    proficiency: "expert",
    description:
      "GPT-4 and related large language model APIs for generation, summarization, code, and conversational AI.",
    usedFor:
      "LMA, Insight 360, Annie ACS, and Resume Analysis Assistant.",
  },
  {
    name: "Llama 3",
    icon: "llama3",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Meta's open large language model family for self-hosted and private inference when a public API is not the fit.",
    usedFor:
      "Private RAG pipelines and on-prem or VPC assistants.",
  },
  {
    name: "Gemini",
    icon: "gemini",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Google's multimodal foundation models for text, image, and document understanding.",
    usedFor:
      "Multimodal assistants and Google-cloud LLM paths.",
  },
  {
    name: "Chroma",
    icon: "chroma",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Open-source vector store for embeddings — the retrieval layer in RAG pipelines.",
    usedFor:
      "Company-knowledge and departmental document retrieval.",
  },
  {
    name: "Pinecone",
    icon: "pinecone",
    category: "ai-ml",
    proficiency: "advanced",
    description:
      "Managed vector database for similarity search at production scale.",
    usedFor:
      "Hosted vector search when the RAG corpus has to stay fast under load.",
  },

  // ─── Data (PDF) ────────────────────────────────────────────────────
  {
    name: "PostgreSQL",
    icon: "postgresql",
    category: "database",
    proficiency: "expert",
    description:
      "Advanced open-source relational database with JSONB support, full-text search, and extensibility.",
    usedFor:
      "FIS, CCFC, IPOR, BCMP, Insight 360, resume screening, and Saguaro Health.",
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
    name: "Oracle",
    icon: "oracle",
    category: "database",
    proficiency: "advanced",
    description:
      "Enterprise relational database for systems that already run on Oracle, including long-lived departmental data.",
    usedFor:
      "Legacy and enterprise cores that have to stay on Oracle.",
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
      "In-memory data store used as a cache, message broker, and session backend.",
    usedFor:
      "Session caches and sub-second real-time paths.",
  },
  {
    name: "Elasticsearch",
    icon: "elasticsearch",
    category: "database",
    proficiency: "advanced",
    description:
      "Distributed search and analytics engine for log analysis, full-text search, and real-time data exploration.",
    usedFor:
      "Document search, log analytics, and full-text lookup.",
  },
  {
    name: "Firebase",
    icon: "firebase",
    category: "database",
    proficiency: "advanced",
    description:
      "Google's Backend-as-a-Service with real-time database, authentication, and hosting.",
    usedFor:
      "Realtime clients, auth-backed mobile companions, and rapid backends.",
  },

  // ─── Blockchain (PDF) ──────────────────────────────────────────────
  {
    name: "Solidity",
    icon: "solidity",
    category: "blockchain",
    proficiency: "expert",
    description:
      "Contract-oriented language for writing smart contracts on Ethereum and EVM-compatible chains.",
    usedFor:
      "Smart contracts, tokens, and EVM product logic when the engagement needs a chain.",
  },
  {
    name: "Ethereum",
    icon: "ethereum",
    category: "blockchain",
    proficiency: "expert",
    description:
      "The leading programmable blockchain for decentralized applications.",
    usedFor:
      "Mainnet settlement and EVM application work when the problem calls for it.",
  },
  {
    name: "Polygon",
    icon: "polygon",
    category: "blockchain",
    proficiency: "advanced",
    description:
      "Ethereum Layer 2 scaling solution providing faster, cheaper transactions while inheriting Ethereum security.",
    usedFor:
      "Lower-cost dApps and Layer 2 transaction paths.",
  },
  {
    name: "Alchemy",
    icon: "alchemy",
    category: "blockchain",
    proficiency: "advanced",
    description:
      "Node and developer platform for Ethereum and Polygon — RPC, webhooks, and enhanced APIs.",
    usedFor:
      "Reliable chain access for dApps and contract backends.",
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
      "Decentralized storage protocol for content-addressed file sharing.",
    usedFor:
      "Decentralized assets and content-addressed storage.",
  },

  // ─── DevOps (PDF) ──────────────────────────────────────────────────
  {
    name: "Docker",
    icon: "docker",
    category: "devops",
    proficiency: "expert",
    description:
      "Container platform for packaging applications and dependencies into portable, reproducible units.",
    usedFor:
      "Field Information System and Saguaro Health production containers.",
  },
  {
    name: "Kubernetes",
    icon: "kubernetes",
    category: "devops",
    proficiency: "advanced",
    description:
      "Container orchestration system for automating deployment, scaling, and management of containerized workloads.",
    usedFor:
      "Always-on production clusters for departmental and commercial systems.",
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
      "Field Information System — build, test, and deploy of the AWS microservices.",
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
];
