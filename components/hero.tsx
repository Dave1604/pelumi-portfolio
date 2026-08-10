"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { identity, currently, resume, availability } from "@/lib/content";
import { LocalTime } from "./local-time";
import { CTAButton } from "./cta";

const HeroScene = dynamic(
  () => import("./three/hero-scene").then((m) => m.HeroScene),
  { ssr: false }
);

export function Hero() {
  const reduced = useReducedMotion();

  // Defer the decorative 3D layer until the browser is idle, so the hero type
  // paints (LCP) before Three.js starts competing for the main thread.
  const [sceneReady, setSceneReady] = useState(false);
  useEffect(() => {
    if (reduced) return;
    const ric =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? window.requestIdleCallback
        : (cb: () => void) => window.setTimeout(cb, 300);
    const id = ric(() => setSceneReady(true));
    return () => {
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(id as number);
      } else {
        clearTimeout(id as number);
      }
    };
  }, [reduced]);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Ambient 3D layer — sits behind the type, in front of bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {!reduced && sceneReady && <HeroScene />}
        {/* gradient veils so type stays legible at any size */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0b_70%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 pt-28 md:px-10 md:pt-32">
        {/* Eyebrow row */}
        <div className="hero-down flex items-center justify-between">
          <span className="eyebrow">
            Portfolio · 2026 / <span className="text-soft">Vol. V</span>
          </span>
          <span className="eyebrow flex items-center gap-2">
            <span className="size-1 rounded-full bg-cream" />
            Index 00 — Hero
          </span>
        </div>

        {/* Kinetic thesis */}
        <div className="flex flex-1 items-center py-16">
          <h1 className="max-w-[18ch] font-serif text-[14vw] leading-[0.95] tracking-[-0.035em] sm:text-[12vw] md:text-[8.5vw] lg:text-[7.2rem] xl:text-[8rem]">
            {identity.thesis.map((token, i) => (
              <span
                key={i}
                className={`hero-rise inline-block ${
                  token.weight === "italic"
                    ? "italic text-cream"
                    : token.weight === "mute"
                    ? "text-mute"
                    : "text-ink"
                }`}
                style={{ animationDelay: `${(0.15 + i * 0.06).toFixed(3)}s` }}
              >
                {token.word}
                {i < identity.thesis.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
        </div>

        {/* Foot */}
        <div
          className="hero-fade grid grid-cols-1 gap-6 border-t border-rule pt-6 md:grid-cols-12 md:gap-10"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="md:col-span-5">
            <p className="text-pretty text-base leading-relaxed text-soft md:text-lg">
              {identity.intro}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <CTAButton href="#contact">Work with me</CTAButton>
              <CTAButton href="#work" variant="ghost">
                See the work
              </CTAButton>
              {resume.available ? (
                <CTAButton href={resume.href} variant="ghost" external>
                  {resume.label}
                </CTAButton>
              ) : null}
            </div>
          </div>

          <dl className="md:col-span-7 grid grid-cols-2 gap-x-6 gap-y-5 text-sm sm:grid-cols-4">
            <Meta label="Currently" value={currently.workingOn} />
            <Meta label="Status" value={currently.status} />
            <Meta label="Education" value={currently.studying} />
            <Meta
              label="Local"
              value={
                <LocalTime timezone={currently.timezone} city={currently.city} />
              }
            />
          </dl>
        </div>

        {/* The two questions a remote recruiter asks before reading anything
            else. Answering them here costs one line and removes the objection
            that closes the tab. */}
        <div
          className="hero-fade flex flex-col gap-2 border-t border-rule pb-10 pt-5 md:flex-row md:items-baseline md:gap-8 md:pb-14"
          style={{ animationDelay: "0.95s" }}
        >
          <span className="eyebrow shrink-0 text-cream">Working with me</span>
          <p className="text-pretty text-sm leading-relaxed text-soft">
            {availability.setup}{" "}
            <span className="text-mute">{availability.hours}</span>
          </p>
        </div>
      </div>

      {/* scroll hint */}
      <div
        className="hero-fade pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="eyebrow flex items-center gap-2">
          <span className="h-px w-6 bg-mute" />
          Scroll
        </span>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="eyebrow">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}
