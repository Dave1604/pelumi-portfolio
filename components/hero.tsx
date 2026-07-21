"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { identity, currently, resume } from "@/lib/content";
import { LocalTime } from "./local-time";
import { CTAButton } from "./cta";
import { EASE_OUT } from "@/lib/utils";

const HeroScene = dynamic(
  () => import("./three/hero-scene").then((m) => m.HeroScene),
  { ssr: false }
);

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Ambient 3D layer — sits behind the type, in front of bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {!reduced && <HeroScene />}
        {/* gradient veils so type stays legible at any size */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0b_70%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 pt-28 md:px-10 md:pt-32">
        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="flex items-center justify-between"
        >
          <span className="eyebrow">
            Portfolio · 2026 / <span className="text-soft">Vol. V</span>
          </span>
          <span className="eyebrow flex items-center gap-2">
            <span className="size-1 rounded-full bg-cream" />
            Index 00 — Hero
          </span>
        </motion.div>

        {/* Kinetic thesis */}
        <div className="flex flex-1 items-center py-16">
          <h1 className="max-w-[18ch] font-serif text-[14vw] leading-[0.95] tracking-[-0.035em] sm:text-[12vw] md:text-[8.5vw] lg:text-[7.2rem] xl:text-[8rem]">
            {identity.thesis.map((token, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: reduced ? 0 : 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.06,
                  ease: EASE_OUT,
                }}
                className={
                  token.weight === "italic"
                    ? "italic text-cream"
                    : token.weight === "mute"
                    ? "text-mute"
                    : "text-ink"
                }
              >
                {token.word}
                {i < identity.thesis.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Foot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="grid grid-cols-1 gap-6 border-t border-rule pb-10 pt-6 md:grid-cols-12 md:gap-10 md:pb-14"
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
            <Meta label="Studying" value={currently.studying} />
            <Meta
              label="Local"
              value={
                <LocalTime timezone={currently.timezone} city={currently.city} />
              }
            />
          </dl>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2"
      >
        <span className="eyebrow flex items-center gap-2">
          <span className="h-px w-6 bg-mute" />
          Scroll
        </span>
      </motion.div>
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
