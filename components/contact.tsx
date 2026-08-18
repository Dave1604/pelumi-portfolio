"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { contact, availability, booking } from "@/lib/content";
import { SectionHeader } from "./section-header";
import { EASE_OUT } from "@/lib/utils";

export function Contact() {
  const reduced = useReducedMotion();
  const [value, setValue] = useState("");
  const [sent, setSent] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);

  // Auto-grow textarea to its content
  useEffect(() => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 320)}px`;
  }, [value]);

  function send() {
    if (!value.trim()) return;
    const subject = encodeURIComponent("A signal. Let's talk");
    const body = encodeURIComponent(value.trim());
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    window.setTimeout(() => setSent(false), 3500);
  }

  function onKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      send();
    }
  }

  const count = value.length;
  const live = count > 0;

  return (
    <section
      id="contact"
      className="relative border-t border-rule px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          index="09"
          eyebrow="Contact"
          title="Leave a signal."
          lede="No form. No fields. Type a note. Hit ⌘ + ⏎. It opens in your email so you stay in control, and so it lands somewhere I'll actually read it."
        />

        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          {/* Signal surface */}
          <div className="md:col-span-8">
            <div className="relative border border-rule p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`size-1.5 rounded-full transition-colors ${
                      live ? "bg-signal live-dot" : "bg-rule"
                    }`}
                  />
                  <span className="eyebrow">
                    {sent ? "Transmitted" : live ? "Drafting" : "Standby"}
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.15em] text-mute">
                  {count.toString().padStart(3, "0")} CH
                </span>
              </div>

              <label className="sr-only" htmlFor="signal">
                Your message
              </label>
              <textarea
                ref={taRef}
                id="signal"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKey}
                rows={3}
                placeholder="Hi Pelumi, I'm working on..."
                className="mt-6 block w-full resize-none border-0 bg-transparent font-serif text-3xl leading-snug tracking-[-0.015em] text-ink outline-none placeholder:text-mute/60 md:text-4xl lg:text-5xl"
              />

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-5">
                <span className="eyebrow">
                  Press ⌘ + ⏎ to send · or click
                </span>
                <motion.button
                  whileHover={reduced ? undefined : { x: 4 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  onClick={send}
                  disabled={!live}
                  type="button"
                  className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-cream disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Transmit
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </motion.button>
              </div>
            </div>

            <p className="mt-5 max-w-[52ch] text-pretty text-sm leading-relaxed text-mute">
              Or skip the niceties and write to{" "}
              <a
                href={`mailto:${contact.email}`}
                className="anchor-line text-soft hover:text-ink"
              >
                {contact.email}
              </a>{" "}
              directly.
            </p>

            {booking.available ? (
              <p className="mt-4">
                <a
                  href={booking.href}
                  target="_blank"
                  rel="noreferrer"
                  className="anchor-line font-mono text-xs uppercase tracking-[0.18em] text-cream"
                >
                  {booking.label} →
                </a>
              </p>
            ) : null}

            {/* Repeated from the hero on purpose: plenty of recruiters land
                here from a link and never see the top of the page. */}
            <div className="mt-8 border-t border-rule pt-5">
              <span className="eyebrow text-cream">Working with me</span>
              <p className="mt-2 max-w-[62ch] text-pretty text-sm leading-relaxed text-soft">
                {availability.setup}{" "}
                <span className="text-mute">{availability.hours}</span>
              </p>
            </div>
          </div>

          {/* Sidebar — channels */}
          <aside className="md:col-span-4">
            <div className="border-t border-rule pt-5">
              <span className="eyebrow">Elsewhere</span>
              <ul className="mt-5 flex flex-col">
                {contact.socials.map((s) => (
                  <li
                    key={s.label}
                    className="group flex items-center justify-between border-b border-rule py-4"
                  >
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-between gap-4"
                    >
                      <span className="font-serif text-2xl tracking-[-0.015em] text-ink transition-colors group-hover:text-cream md:text-3xl">
                        {s.label}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-mute">
                          {s.handle}
                        </span>
                        <span className="text-mute transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream">
                          ↗
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
