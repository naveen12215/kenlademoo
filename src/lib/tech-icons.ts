import type { ComponentType } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiRedux,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiExpress,
  SiFastapi,
  SiSpring,
  SiGraphql,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiAmazonwebservices,
  SiGooglecloud,
  SiVercel,
  SiNetlify,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiScikitlearn,
  SiPandas,
  SiSolidity,
  SiEthereum,
  SiPolygon,
  SiWeb3Dotjs,
  SiIpfs,
  SiRust,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiElasticsearch,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiJenkins,
  SiNginx,
  SiPrometheus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  Cable,
  Cloud,
  Link,
  SmilePlus,
  HardHat,
} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = ComponentType<any>;

interface TechIcon {
  icon: IconComponent;
  color: string;
}

export const techIconMap: Record<string, TechIcon> = {
  // Frontend
  react: { icon: SiReact, color: "#61DAFB" },
  nextjs: { icon: SiNextdotjs, color: "#000000" },
  vuejs: { icon: SiVuedotjs, color: "#4FC08D" },
  angular: { icon: SiAngular, color: "#DD0031" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  tailwindcss: { icon: SiTailwindcss, color: "#06B6D4" },
  html5: { icon: SiHtml5, color: "#E34F26" },
  redux: { icon: SiRedux, color: "#764ABC" },

  // Backend
  nodejs: { icon: SiNodedotjs, color: "#339933" },
  python: { icon: SiPython, color: "#3776AB" },
  java: { icon: FaJava, color: "#007396" },
  go: { icon: SiGo, color: "#00ADD8" },
  expressjs: { icon: SiExpress, color: "#000000" },
  fastapi: { icon: SiFastapi, color: "#009688" },
  spring: { icon: SiSpring, color: "#6DB33F" },
  graphql: { icon: SiGraphql, color: "#E10098" },
  api: { icon: Cable, color: "#6B7280" },

  // Mobile
  flutter: { icon: SiFlutter, color: "#02569B" },
  swift: { icon: SiSwift, color: "#F05138" },
  kotlin: { icon: SiKotlin, color: "#7F52FF" },

  // Cloud
  aws: { icon: SiAmazonwebservices, color: "#FF9900" },
  gcp: { icon: SiGooglecloud, color: "#4285F4" },
  azure: { icon: Cloud, color: "#0078D4" },
  vercel: { icon: SiVercel, color: "#000000" },
  netlify: { icon: SiNetlify, color: "#00C7B7" },

  // AI & ML
  tensorflow: { icon: SiTensorflow, color: "#FF6F00" },
  pytorch: { icon: SiPytorch, color: "#EE4C2C" },
  openai: { icon: SiOpenai, color: "#412991" },
  langchain: { icon: Link, color: "#1C3C3C" },
  huggingface: { icon: SmilePlus, color: "#FFD21E" },
  scikitlearn: { icon: SiScikitlearn, color: "#F7931E" },
  pandas: { icon: SiPandas, color: "#150458" },

  // Blockchain
  solidity: { icon: SiSolidity, color: "#363636" },
  ethereum: { icon: SiEthereum, color: "#3C3C3D" },
  polygon: { icon: SiPolygon, color: "#8247E5" },
  hardhat: { icon: HardHat, color: "#FFF100" },
  web3js: { icon: SiWeb3Dotjs, color: "#F16822" },
  ipfs: { icon: SiIpfs, color: "#65C2CB" },
  rust: { icon: SiRust, color: "#000000" },

  // Database
  postgresql: { icon: SiPostgresql, color: "#4169E1" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  redis: { icon: SiRedis, color: "#DC382D" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  firebase: { icon: SiFirebase, color: "#FFCA28" },
  supabase: { icon: SiSupabase, color: "#3FCF8E" },
  elasticsearch: { icon: SiElasticsearch, color: "#005571" },

  // DevOps
  docker: { icon: SiDocker, color: "#2496ED" },
  kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  terraform: { icon: SiTerraform, color: "#7B42BC" },
  githubactions: { icon: SiGithubactions, color: "#2088FF" },
  jenkins: { icon: SiJenkins, color: "#D24939" },
  nginx: { icon: SiNginx, color: "#009639" },
  prometheus: { icon: SiPrometheus, color: "#E6522C" },
  websocket: { icon: Cable, color: "#EE7A48" },
};

const TECH_ICON_ALIASES: Record<string, string> = {
  "Next.js": "nextjs",
  "Node.js": "nodejs",
  "Tailwind CSS": "tailwindcss",
  "Express.js": "expressjs",
  "OpenAI API": "openai",
  "OpenAI / GPT": "openai",
  AWS: "aws",
  "Google Cloud Platform": "gcp",
  "Microsoft Azure": "azure",
  "GitHub Actions": "githubactions",
  "scikit-learn": "scikitlearn",
  LangChain: "langchain",
  "Hugging Face Transformers": "huggingface",
  Pandas: "pandas",
  PyTorch: "pytorch",
  TensorFlow: "tensorflow",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  GraphQL: "graphql",
  Redis: "redis",
  Docker: "docker",
  Kubernetes: "kubernetes",
  Terraform: "terraform",
  Jenkins: "jenkins",
  Nginx: "nginx",
  Prometheus: "prometheus",
  Grafana: "prometheus",
  WebSocket: "websocket",
  Solidity: "solidity",
  Ethereum: "ethereum",
  Polygon: "polygon",
  Hardhat: "hardhat",
  "Web3.js": "web3js",
  FastAPI: "fastapi",
  Python: "python",
  TypeScript: "typescript",
  React: "react",
};

export function iconForTechName(name: string) {
  const key =
    TECH_ICON_ALIASES[name] ??
    name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return techIconMap[key];
}
