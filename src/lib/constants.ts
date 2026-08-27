import type { CompanyStat } from "@/types";

export const COMPANY_NAME = "Kenla Systems";
export const COMPANY_TAGLINE = "Engineering Tomorrow's Software, Today";
export const COMPANY_DESCRIPTION =
  "Kenla Systems builds custom software, AI/ML, cloud, and blockchain products — Chennai and California, since 2009. Start a conversation.";
export const COMPANY_LOCATION = "Chennai, India";
export const COMPANY_FOUNDED = 2009;
export const COMPANY_EMAIL = "inquiries@kenlasystem.com";

export const companyStats: CompanyStat[] = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Clients Worldwide" },
  { value: 4, suffix: "", label: "Continents Served" },
];

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kenlasystems.com";
