import {
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_LOCATION,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_REACH_EMAIL,
  COMPANY_TAGLINE,
  SITE_URL,
} from "./constants";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    legalName: COMPANY_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: [COMPANY_REACH_EMAIL, COMPANY_EMAIL],
    telephone: COMPANY_PHONE,
    description: COMPANY_TAGLINE,
    foundingDate: "2009",
    sameAs: ["https://www.linkedin.com/company/kenla-systems"],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No. 3/2, New No. 7, Second Floor, Kamaraj Avenue, 1st Street, Adyar",
      addressLocality: "Chennai",
      postalCode: "600020",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: ["IN", "US", "Middle East"],
    contactPoint: {
      "@type": "ContactPoint",
      email: COMPANY_REACH_EMAIL,
      telephone: COMPANY_PHONE,
      contactType: "sales",
      availableLanguage: ["English"],
      areaServed: COMPANY_LOCATION,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${SITE_URL}/services/${input.slug}`,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    areaServed: ["IN", "US", "Middle East"],
  };
}
