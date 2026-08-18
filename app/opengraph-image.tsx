import { ImageResponse } from "next/og";

// Route segment config
export const alt = "Pelumi Adewara · Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens (mirrors app/globals.css @theme)
const BG = "#0a0a0b";
const INK = "#f3f1ec";
const MUTE = "#7e7d77";
const CREAM = "#e8e1d2";
const SIGNAL = "#ff5c2c";
const RULE = "#1c1c20";

async function instrumentSerif(): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(
      "https://github.com/google/fonts/raw/main/ofl/instrumentserif/InstrumentSerif-Regular.ttf",
    );
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const serif = await instrumentSerif();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "72px 80px",
          fontFamily: "sans-serif",
          // subtle vignette so the type sits on depth, matching the site hero
          backgroundImage:
            "radial-gradient(ellipse 80% 80% at 70% 20%, #131316 0%, #0a0a0b 60%)",
        }}
      >
        {/* Top eyebrow row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: MUTE,
          }}
        >
          <span>Portfolio · 2026</span>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: SIGNAL,
              }}
            />
            Product Engineer
          </span>
        </div>

        {/* Name + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontFamily: serif ? "Instrument Serif" : "serif",
              fontSize: 132,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: INK,
            }}
          >
            Pelumi Adewara
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              color: CREAM,
              maxWidth: 900,
            }}
          >
            I design and build web &amp; mobile products, from the first
            wireframe to the App Store.
          </div>
        </div>

        {/* Foot rule + meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${RULE}`,
            paddingTop: 28,
            fontSize: 22,
            color: MUTE,
          }}
        >
          <span>React · Next.js · React Native · Node</span>
          <span style={{ color: CREAM }}>Available for work</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: serif
        ? [{ name: "Instrument Serif", data: serif, style: "normal", weight: 400 }]
        : [],
    },
  );
}
