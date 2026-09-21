"use client";

import { experience, education, resume } from "@/lib/content";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { CTAButton } from "./cta";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-rule px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          index="02"
          eyebrow="Experience"
          title="Five years, shipped in production."
          lede="Two current engineering roles, a decade's worth of habits, and around ten client projects delivered end to end. The case studies above show how I think; this is where it's been paid for."
        />

        <div className="mt-20 flex flex-col border-t border-rule">
          {experience.map((role, i) => (
            <Reveal
              key={`${role.org}-${role.period}`}
              delay={i * 0.04}
              y={16}
              className="grid gap-6 border-b border-rule py-10 md:grid-cols-12 md:gap-10 md:py-12"
            >
              <div className="md:col-span-4">
                <p className="eyebrow text-cream">{role.period}</p>
                <h3 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.02em] md:text-[1.75rem]">
                  {role.title}
                </h3>
                <p className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-soft">
                  {role.href ? (
                    <a
                      href={role.href}
                      target="_blank"
                      rel="noreferrer"
                      className="anchor-line text-ink"
                    >
                      {role.org}
                    </a>
                  ) : (
                    <span className="text-ink">{role.org}</span>
                  )}
                  {role.live ? (
                    <span className="border border-rule px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-cream">
                      Live
                    </span>
                  ) : null}
                </p>
                {role.context ? (
                  <p className="mt-1.5 text-sm leading-snug text-mute">
                    {role.context}
                  </p>
                ) : null}
              </div>

              <div className="md:col-span-8">
                <ul className="flex flex-col gap-3.5">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="grid grid-cols-[auto_1fr] gap-3 text-pretty text-[15px] leading-relaxed text-soft md:text-base"
                    >
                      <span aria-hidden className="pt-2.5">
                        <span className="block h-px w-3 bg-rule" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {role.stack ? (
                  <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="eyebrow">Stack</span>
                    {role.stack.map((item, k) => (
                      <span key={item} className="text-sm text-mute">
                        {item}
                        {k < role.stack!.length - 1 ? (
                          <span className="pl-3 text-rule">·</span>
                        ) : null}
                      </span>
                    ))}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}

          {/* Education sits inside the same rule system — it's one more row, not
              a section of its own. */}
          <Reveal
            y={16}
            delay={experience.length * 0.04}
            className="grid gap-6 border-b border-rule py-10 md:grid-cols-12 md:gap-10 md:py-12"
          >
            <div className="md:col-span-4">
              <p className="eyebrow text-cream">{education.period}</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.02em] md:text-[1.75rem]">
                {education.degree}
              </h3>
              <p className="mt-2 text-sm text-ink">{education.school}</p>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-[62ch] text-pretty text-[15px] leading-relaxed text-soft md:text-base">
                {education.note}
              </p>
            </div>
          </Reveal>
        </div>

        {resume.available ? (
          <Reveal y={20} className="mt-14">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-[46ch] font-serif text-2xl leading-snug tracking-[-0.015em] text-ink md:text-3xl">
                The full version, with every project and reference.
              </p>
              <CTAButton href={resume.href} variant="ghost" external>
                Download résumé
              </CTAButton>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
