"use client";

import { motion, useReducedMotion } from "motion/react";
import { lab } from "@/lib/content";
import { SectionHeader } from "./section-header";
import { EASE_OUT } from "@/lib/utils";

export function ProjectLab() {
  const reduced = useReducedMotion();

  return (
    <section
      id="lab"
      className="relative border-t border-rule px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          index="07"
          eyebrow="Project lab"
          title="A sketchbook. Studies, not shipments."
          lede="Where I practise the parts of the craft I can't bill for: typography, motion, components, the small disciplines that keep taste from going stale."
        />

        <div className="mt-20 grid grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-3">
          {lab.map((item, i) => {
            // Bento layout: vary sizes across breakpoints
            const span = [
              "md:col-span-3 md:row-span-2", // 0 — large
              "md:col-span-3 md:row-span-1", // 1
              "md:col-span-2 md:row-span-1", // 2
              "md:col-span-4 md:row-span-1", // 3
              "md:col-span-3 md:row-span-1", // 4
              "md:col-span-3 md:row-span-1", // 5
            ][i % 6];

            const isLarge = i === 0;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: reduced ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.05 * i,
                  ease: EASE_OUT,
                }}
                className={`group relative flex min-h-[14rem] flex-col justify-between overflow-hidden border border-rule p-6 transition-colors duration-500 hover:border-cream/30 md:p-7 ${span}`}
              >
                {/* corner notches */}
                <Corner pos="tl" />
                <Corner pos="tr" />
                <Corner pos="bl" />
                <Corner pos="br" />

                <div className="flex items-center justify-between">
                  <span className="eyebrow text-cream">{item.tag}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-mute">
                    L{String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-auto">
                  <h3
                    className={`font-serif tracking-[-0.02em] text-ink ${
                      isLarge
                        ? "text-3xl md:text-4xl lg:text-5xl"
                        : "text-2xl md:text-3xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[50ch] text-pretty text-sm leading-relaxed text-soft md:text-[15px]">
                    {item.note}
                  </p>
                </div>

                {/* hover accent */}
                <span
                  aria-hidden
                  className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-cream/60 transition-transform duration-700 group-hover:scale-x-100"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const map = {
    tl: "top-0 left-0",
    tr: "top-0 right-0",
    bl: "bottom-0 left-0",
    br: "bottom-0 right-0",
  } as const;
  return (
    <span
      aria-hidden
      className={`absolute size-2 ${map[pos]} after:absolute after:inset-0 after:bg-cream/40`}
      style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
    />
  );
}
