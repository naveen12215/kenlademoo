import { ServiceDetailMotion } from "@/components/sections/ServiceDetailMotion";
import type { Service } from "@/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";

interface ServicePageLayoutProps {
  service: Service;
}

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.title,
          description: service.shortDescription,
          slug: service.slug,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <ServiceDetailMotion slug={service.slug} />
    </>
  );
}
