import type { NavItem } from "@/types";

export const spineItems = [
  { index: "01", label: "Home", href: "/" },
  { index: "02", label: "Services", href: "/services" },
  { index: "03", label: "Stack", href: "/technologies" },
  { index: "04", label: "Project", href: "/projects" },
  { index: "05", label: "About", href: "/about" },
  { index: "06", label: "Contact", href: "/contact" },
] as const;

export function plateForPath(pathname: string) {
  if (pathname.startsWith("/services")) return "KS-02  PRACTICES";
  if (pathname.startsWith("/technologies")) return "KS-03  STACK";
  if (pathname.startsWith("/projects")) return "KS-04  FILES";
  if (pathname.startsWith("/about")) return "KS-05  STUDIO";
  if (pathname.startsWith("/contact")) return "KS-06  CONTACT";
  if (pathname.startsWith("/privacy") || pathname.startsWith("/terms")) {
    return "KS-07  LEGAL";
  }
  if (pathname === "/") return "KS-01  HOME";
  return "KS-00  MISSING";
}

export function spineActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const mainNavItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Custom Software Development",
        href: "/services/custom-software",
      },
      { label: "AI/ML & Generative AI", href: "/services/ai-ml" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "Blockchain & Web3", href: "/services/blockchain-web3" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "Rapid Prototyping", href: "/services/rapid-prototyping" },
      { label: "Salesforce", href: "/services/salesforce" },
      { label: "Automation", href: "/services/automation" },
    ],
  },
  { label: "Technologies", href: "/technologies" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
