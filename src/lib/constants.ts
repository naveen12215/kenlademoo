import type { CompanyStat } from "@/types";

export const COMPANY_NAME = "Kenla Systems";
export const COMPANY_LEGAL_NAME = "KENLA Systems Private Limited";
export const COMPANY_TAGLINE = "Software Engineering Since 2009";
export const COMPANY_DESCRIPTION =
  "KENLA Systems is a custom software services company. We design, build, and support internet, mobile, and enterprise applications for government, healthcare, and commercial organizations in the United States, India, and the Middle East.";
export const COMPANY_LOCATION = "Chennai, India";
export const COMPANY_ADDRESS_LINES = [
  "No. 3/2, New No. 7, Second Floor",
  "Kamaraj Avenue, 1st Street",
  "Adyar, Chennai – 600020",
  "Tamil Nadu, India",
] as const;
export const COMPANY_FOUNDED = 2009;
export const COMPANY_EMAIL = "inquiries@kenlasystems.com";
export const COMPANY_INQUIRIES_EMAIL = "inquiries@kenlasystems.com";
export const COMPANY_REACH_EMAIL = "venkatm@kenlasystems.com";
export const COMPANY_PHONE = "+91 95000 62603";
export const COMPANY_CONTACT_NAME = "Venkat Munsif";
export const COMPANY_WEB = "www.kenlasystems.com";
export const COMPANY_VISION =
  "Creating systems that make connections between people simpler in a complex world.";
export const COMPANY_MISSION =
  "Empower small and medium sized businesses around the world to reach their fullest potential.";
export const COMPANY_REGIONS = "United States · India · Middle East";

export const companyStats: CompanyStat[] = [
  { value: 17, suffix: "", label: "Years since 2009" },
  { value: 20, suffix: "+", label: "Years founder experience" },
  { value: 3, suffix: "", label: "Regions served" },
  { value: 6, suffix: "", label: "Areas of strength" },
];

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kenlasystems.com";
