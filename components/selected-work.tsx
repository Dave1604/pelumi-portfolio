"use client";

import { motion, useReducedMotion } from "motion/react";
import { work, type CaseStudy } from "@/lib/content";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { EASE_OUT } from "@/lib/utils";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="relative border-t border-rule px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          index="01"
          eyebrow="Selected work"
          title="Five projects, five problems worth solving carefully."
          lede="Each one started as a brief, a deadline, and a stack of unknowns. The case studies below trace the shape of the problem, the moves I made, and what was left at the end."
        />

        <div className="mt-20 flex flex-col">
          {work.map((c, i) => (
            <Case key={c.id} study={c} isLast={i === work.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Case({ study, isLast }: { study: CaseStudy; isLast: boolean }) {
  const reduced = useReducedMotion();
  return (
    <article
      className={`relative grid gap-8 border-t border-rule py-12 md:grid-cols-12 md:gap-10 md:py-20 ${
        isLast ? "border-b" : ""
      }`}
    >
      {/* Index + meta sticky column */}
      <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <div className="font-serif text-7xl text-cream md:text-8xl">
            {study.index}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="eyebrow text-cream">{study.kind}</span>
            <span className="text-rule">/</span>
            <span className="eyebrow">{study.year}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {study.role.map((r) => (
              <span
                key={r}
                className="rounded-full border border-rule px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-soft"
              >
                {r}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Narrative */}
      <div className="md:col-span-8">
        {study.image ? (
          <Reveal y={24}>
            <div className="mb-12 overflow-hidden border border-rule">
              <img
                src={study.image.src}
                alt={study.image.alt}
                loading="lazy"
                className="w-full transition-transform duration-700 hover:scale-[1.015]"
              />
            </div>
          </Reveal>
        ) : null}
        <Reveal y={32}>
          <h3 className="font-serif text-3xl tracking-[-0.02em] sm:text-4xl md:text-5xl">
            {study.name}
          </h3>
          <p className="mt-5 max-w-[52ch] text-pretty text-lg leading-relaxed text-soft">
            {study.oneLiner}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Block label="Problem" body={study.problem} />
          <Block label="Process" body={study.process} />
          <Block label="Solution" body={study.solution} />
          <Block label="Outcome" body={study.outcome} />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-rule pt-5">
          <span className="eyebrow text-mute">Stack</span>
          {study.stack.map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              <span className="text-sm text-soft">{s}</span>
              {i < study.stack.length - 1 ? (
                <span className="text-rule">·</span>
              ) : null}
            </span>
          ))}
          {study.links?.length ? (
            <span className="ml-auto flex flex-wrap items-center gap-x-5 gap-y-2">
              {study.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="anchor-line font-mono text-xs uppercase tracking-[0.18em] text-cream"
                >
                  {l.label} →
                </a>
              ))}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <Reveal y={20}>
      <div className="flex flex-col gap-3">
        <span className="eyebrow">{label}</span>
        <p className="text-pretty text-[15px] leading-relaxed text-ink/85">
          {body}
        </p>
      </div>
    </Reveal>
  );
}
