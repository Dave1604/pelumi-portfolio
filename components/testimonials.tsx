"use client";

import { testimonials } from "@/lib/content";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="relative border-t border-rule px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          index="03"
          eyebrow="In their words"
          title="Shipped, and the client came back happy."
          lede="Short notes from people I've built for. The work is live; these are the receipts."
        />

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-rule md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              y={16}
              className="bg-bg"
            >
              <figure className="flex h-full flex-col justify-between gap-10 p-8 md:p-10">
                <blockquote className="font-serif text-3xl leading-[1.15] tracking-[-0.02em] text-ink md:text-4xl">
                  <span className="text-cream">“</span>
                  {t.quote.replace(/^[“"]|[”"]$/g, "")}
                  <span className="text-cream">”</span>
                </blockquote>

                <figcaption className="flex items-end justify-between border-t border-rule pt-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-ink">{t.name}</span>
                    <span className="eyebrow">{t.detail}</span>
                  </div>
                  {t.href ? (
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noreferrer"
                      className="anchor-line font-mono text-[10px] uppercase tracking-[0.18em] text-cream"
                    >
                      Visit site ↗
                    </a>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
