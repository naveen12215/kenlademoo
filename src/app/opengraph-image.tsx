import { ImageResponse } from "next/og";

export const alt = "Kenla Systems — Custom Software, AI/ML, Cloud & Blockchain";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f7",
          padding: "64px 72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 8,
            borderRadius: 4,
            background: "linear-gradient(90deg, #f6ba29 0%, #ee7a48 50%, #e95559 100%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#ee7a48",
              fontWeight: 700,
            }}
          >
            Kenla Systems
          </div>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 800,
              color: "#393644",
              letterSpacing: "-0.03em",
            }}
          >
            Custom software, AI, cloud & blockchain.
          </div>
          <div style={{ fontSize: 28, color: "#4e4a46", fontWeight: 500 }}>
            Engineering Tomorrow&apos;s Software, Today.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            fontWeight: 600,
            color: "#ee7a48",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span>Chennai · California</span>
          <span>Since 2009</span>
        </div>
      </div>
    ),
    size
  );
}
