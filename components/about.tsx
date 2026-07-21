"use client";

import { motion, useReducedMotion } from "motion/react";
import { about, identity } from "@/lib/content";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { EASE_OUT } from "@/lib/utils";

export function About() {
  const reduced = useReducedMotion();

  return (
    <section
      id="about"
      className="relative border-t border-rule px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          index="07"
          eyebrow="About"
          title="The person behind the work."
        />

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          {/* Typographic portrait — a name treated like an artefact, not a headshot */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
              className="relative aspect-[4/5] w-full overflow-hidden border border-rule"
            >
              <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(232,225,210,0.06),transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">Pelumi Adewara</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-mute">
                    PA / 25
                  </span>
                </div>

                <div>
                  <div className="font-serif text-[18vw] leading-[0.85] tracking-[-0.04em] text-ink/95 md:text-[7rem] lg:text-[8.2rem]">
                    Pelumi
                    <span className="block italic text-cream">Adewara</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="h-px flex-1 bg-rule" />
                    <span className="eyebrow">{identity.role}</span>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="eyebrow">Origin</span>
                    <span className="text-sm text-soft">Lagos · Worldwide</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="eyebrow">Practice</span>
                    <span className="text-sm text-soft">5+ years</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Story */}
          <div className="md:col-span-7">
            <div className="flex flex-col gap-7">
              {about.map((para, i) => (
                <Reveal key={i} delay={i * 0.06} y={16}>
                  <p
                    className={
                      i === 0
                        ? "max-w-[52ch] text-pretty font-serif text-2xl leading-snug tracking-[-0.015em] text-ink md:text-3xl"
                        : "max-w-[60ch] text-pretty text-base leading-relaxed text-soft md:text-lg"
                    }
                  >
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
