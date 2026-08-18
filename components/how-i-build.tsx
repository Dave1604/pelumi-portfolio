"use client";

import { motion } from "motion/react";
import { principles } from "@/lib/content";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { EASE_OUT } from "@/lib/utils";

export function HowIBuild() {
  return (
    <section
      id="build"
      className="relative border-t border-rule px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          index="05"
          eyebrow="How I build"
          title="Engineering and design, held in one hand."
          lede="The split between 'designers' and 'developers' is mostly a hiring convenience. I treat product as one practice. These are the principles I keep returning to."
        />

        <ol className="mt-20 flex flex-col">
          {principles.map((p, i) => (
            <li
              key={p.number}
              className={`grid gap-6 border-t border-rule py-10 md:grid-cols-12 md:gap-10 md:py-14 ${
                i === principles.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="md:col-span-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-4xl text-cream md:text-5xl">
                    {p.number}
                  </span>
                  <span className="eyebrow">Principle</span>
                </div>
              </div>
              <Reveal className="md:col-span-9" y={20}>
                <h3 className="font-serif text-3xl tracking-[-0.02em] md:text-4xl">
                  <UnderlineOnView text={p.title} />
                </h3>
                <p className="mt-5 max-w-[58ch] text-pretty text-base leading-relaxed text-soft md:text-lg">
                  {p.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function UnderlineOnView({ text }: { text: string }) {
  return (
    <span className="relative inline-block">
      <span>{text}</span>
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
        style={{ originX: 0 }}
        className="absolute -bottom-1 left-0 right-0 block h-px bg-cream/40"
      />
    </span>
  );
}
