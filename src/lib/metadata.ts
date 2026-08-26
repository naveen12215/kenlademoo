import { COMPANY_NAME, COMPANY_DESCRIPTION, SITE_URL } from "./constants";
import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} — Custom Software, AI/ML, Cloud & Blockchain`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — Custom Software, AI/ML, Cloud & Blockchain`,
    description: COMPANY_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — Custom Software, AI/ML, Cloud & Blockchain`,
    description: COMPANY_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};
