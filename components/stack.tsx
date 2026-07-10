"use client";

import { stack } from "@/lib/content";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Stack() {
  return (
    <section
      id="stack"
      className="relative border-t border-rule px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          index="03"
          eyebrow="Stack"
          title="A working set, not a list of logos."
          lede="The tools I reach for first. Each one earned its place by surviving real projects — and they're held lightly enough that the next better tool will replace them."
        />

        <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-14 border-t border-rule pt-14 md:grid-cols-5 md:gap-x-14">
          {stack.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05} y={16}>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="eyebrow text-cream">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="eyebrow">{group.group}</span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-pretty text-[15px] leading-snug text-ink/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
