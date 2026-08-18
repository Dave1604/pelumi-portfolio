"use client";

import { services, booking } from "@/lib/content";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { CTAButton } from "./cta";

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-rule px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          index="03"
          eyebrow="Services"
          title="What you can hire me to build."
          lede="Fixed-scope projects or ongoing work. Whether you arrive with a Figma file, a rough idea, or a broken site, I take it from where it is to shipped. Design and code, both sides."
        />

        <div className="mt-20 flex flex-col border-t border-rule">
          {services.map((s, i) => (
            <Reveal
              key={s.number}
              delay={i * 0.04}
              y={16}
              className={`grid gap-6 border-b border-rule py-10 md:grid-cols-12 md:gap-10 md:py-12`}
            >
              <div className="md:col-span-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-4xl text-cream md:text-5xl">
                    {s.number}
                  </span>
                  <span className="eyebrow">Service</span>
                </div>
              </div>

              <div className="md:col-span-6">
                <h3 className="font-serif text-2xl tracking-[-0.02em] md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-[52ch] text-pretty text-[15px] leading-relaxed text-soft md:text-base">
                  {s.body}
                </p>
              </div>

              <div className="md:col-span-3 md:text-right">
                <span className="eyebrow">For</span>
                <p className="mt-2 text-sm leading-snug text-mute">
                  {s.audience}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The ask */}
        <Reveal y={20} className="mt-14">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[42ch] font-serif text-2xl leading-snug tracking-[-0.015em] text-ink md:text-3xl">
              Building something? Start with a free 30-minute call.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {booking.available ? (
                <>
                  <CTAButton href={booking.href} external>
                    {booking.label}
                  </CTAButton>
                  <CTAButton href="#contact" variant="ghost">
                    Send a message
                  </CTAButton>
                </>
              ) : (
                <>
                  <CTAButton href="#contact">Work with me</CTAButton>
                  <CTAButton href="#work" variant="ghost">
                    See the work
                  </CTAButton>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
