import type { Metadata } from "next";
import { syne, inter, plexMono } from "@/lib/fonts";
import { siteMetadata } from "@/lib/metadata";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        <SiteChrome>
          <main
            id="main-content"
            className="relative pt-[6.25rem] lg:pt-14 lg:pl-24"
          >
            {children}
          </main>
        </SiteChrome>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontFamily: "var(--font-inter)",
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
