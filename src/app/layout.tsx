import type { Metadata, Viewport } from "next";
import { jakarta, plexMono } from "@/lib/fonts";
import { siteMetadata } from "@/lib/metadata";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/jsonld";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: "#faf9f7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        {/* Skip-to-content for keyboard / screen-reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-dark focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
        >
          Skip to main content
        </a>
        <JsonLd data={organizationJsonLd()} />
        <SiteChrome>
          <main
            id="main-content"
            className="relative pt-[6.25rem] lg:pt-[var(--chrome-header)] lg:pl-[var(--chrome-spine)]"
          >
            {children}
          </main>
        </SiteChrome>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontFamily: "var(--font-plus-jakarta)",
              background: "#faf9f7",
              border: "1px solid #ebe8e1",
              color: "#2d2b29",
            },
          }}
        />
      </body>
    </html>
  );
}
