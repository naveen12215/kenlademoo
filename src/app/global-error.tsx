"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#faf9f7",
          color: "#2d2b29",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <main style={{ maxWidth: 40 * 16, margin: "0 auto", padding: "6rem 1.5rem" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#ee7a48",
              fontWeight: 700,
            }}
          >
            Error
          </p>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, margin: "1.5rem 0 0" }}>
            Something went wrong
          </h1>
          <p style={{ maxWidth: 28 * 16, lineHeight: 1.6, color: "#4e4a46" }}>
            That request did not complete. Try again, or send a note — we will
            pick it up from there.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                border: 0,
                borderRadius: 6,
                padding: "12px 24px",
                background: "linear-gradient(135deg, #f6ba29, #ee7a48, #e95559)",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <a
              href="/contact"
              style={{
                borderRadius: 6,
                padding: "12px 24px",
                border: "1px solid #ddd8ce",
                color: "#393644",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Contact us
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
