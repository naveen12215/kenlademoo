import { COMPANY_NAME, COMPANY_DESCRIPTION, SITE_URL } from "./constants";
import type { Metadata } from "next";

const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Kenla Systems — Custom Software, AI/ML, Cloud & Blockchain",
};

export function canonicalFor(path: string): Pick<Metadata, "alternates" | "openGraph"> {
  const url =
    path === "/" ? SITE_URL : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  return {
    alternates: { canonical: url },
    openGraph: { url, images: [shareImage] },
  };
}

function metadataBase() {
  try {
    return new URL(SITE_URL);
  } catch {
    return new URL("https://www.kenlasystems.com");
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
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — Custom Software, AI/ML, Cloud & Blockchain`,
    description: COMPANY_DESCRIPTION,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — Custom Software, AI/ML, Cloud & Blockchain`,
    description: COMPANY_DESCRIPTION,
    images: [shareImage],
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
