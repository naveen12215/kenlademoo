import type { CompanyStat } from "@/types";

export const COMPANY_NAME = "Kenla Systems";
export const COMPANY_TAGLINE = "Engineering Tomorrow's Software, Today";
export const COMPANY_DESCRIPTION =
  "Since 2009, Kenla Systems has been a trusted technology partner delivering custom software, AI/ML solutions, cloud infrastructure, and blockchain applications for businesses worldwide.";
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
  process.env.NEXT_PUBLIC_SITE_URL || "https://kenlasystems.com";
