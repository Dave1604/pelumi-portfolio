"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { about, identity, portrait } from "@/lib/content";
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
          index="08"
          eyebrow="About"
          title="The person behind the work."
        />

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
              className="relative aspect-[4/5] w-full overflow-hidden border border-rule bg-surface"
            >
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                sizes="(min-width: 768px) 40vw, 92vw"
                className="object-cover object-[center_18%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 via-[28%] to-transparent"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-bg/75 to-transparent"
              />

              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-cream">{identity.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-mute">
                    PA / 26
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="eyebrow">Origin</span>
                    <span className="text-sm text-ink">Lagos · Worldwide</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="eyebrow">Practice</span>
                    <span className="text-sm text-ink">5+ years</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

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
