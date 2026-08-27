import { COMPANY_NAME, COMPANY_DESCRIPTION, SITE_URL } from "./constants";
import type { Metadata } from "next";

function metadataBase() {
  try {
    return new URL(SITE_URL);
  } catch {
    return new URL("https://kenlasystems.com");
  }
}

export const siteMetadata: Metadata = {
  metadataBase: metadataBase(),
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
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};
