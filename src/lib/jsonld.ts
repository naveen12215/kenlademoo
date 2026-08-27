import {
  COMPANY_EMAIL,
  COMPANY_NAME,
  COMPANY_TAGLINE,
  SITE_URL,
} from "./constants";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    alternateName: "Optiwise",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: COMPANY_EMAIL,
    description: COMPANY_TAGLINE,
    foundingDate: "2009",
    sameAs: ["https://www.linkedin.com/company/kenla-systems"],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressRegion: "California",
        addressCountry: "US",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: COMPANY_EMAIL,
      contactType: "sales",
      availableLanguage: ["English"],
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
    areaServed: ["IN", "US"],
  };
}
