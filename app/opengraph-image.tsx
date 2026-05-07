import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Flumixa Media Server — Multi-stream broadcasting on your machine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_SVG = readFileSync(join(process.cwd(), "public/logo.svg"), "utf8");
const LOGO_DATA_URI = `data:image/svg+xml;base64,${Buffer.from(LOGO_SVG).toString("base64")}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #F4F5F7 50%, #E5EDFE 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(13,85,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13,85,246,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.7,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_DATA_URI} alt="Flumixa" width={250} height={112} />
          <div style={{ flex: 1 }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              borderRadius: 999,
              background: "#F5A524",
              color: "#FFFFFF",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.08em",
              fontFamily: "monospace",
              textTransform: "uppercase",
            }}
          >
            Public Beta
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, position: "relative" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              color: "#14161A",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Multi-stream broadcasting,</span>
            <span
              style={{
                background: "linear-gradient(90deg, #0D55F6 0%, #4E29FE 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              on your machine.
            </span>
          </div>
          <div style={{ fontSize: 26, color: "#4A5160", lineHeight: 1.4, maxWidth: 980 }}>
            Pull RTMP from any encoder. Mix, record, schedule. Broadcast to YouTube, Twitch, Kick — all at once.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            color: "#4A5160",
            fontSize: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <span style={{ fontWeight: 700, color: "#14161A" }}>macOS · Windows · Linux</span>
            <span style={{ color: "#ADB3BC" }}>·</span>
            <span style={{ fontFamily: "monospace" }}>Free during beta</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#E5484D",
              }}
            />
            <span style={{ fontFamily: "monospace", fontWeight: 700, color: "#E5484D", letterSpacing: "0.12em" }}>
              LIVE
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
