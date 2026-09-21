"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { statement } from "@/lib/content";

// Scroll-scrubbed statement: each character brightens in sequence as the line
// travels up the viewport, and dims again on the way back down. The progress
// window ends before the line reaches mid-screen so it is never read half-lit.
export function Statement() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  // Track the paragraph itself, not the section: the section's top padding
  // would otherwise burn most of the progress before the text is even visible.
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.95", "start 0.4"],
  });

  const words = statement.text.split(" ");
  const totalChars = statement.text.replace(/ /g, "").length;
  let charCursor = 0;

  return (
    <section
      aria-label={statement.text}
      className="relative border-t border-rule px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <span className="eyebrow">{statement.eyebrow}</span>
        <p
          ref={textRef}
          aria-hidden
          className="mt-8 max-w-[24ch] font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-cream md:text-6xl lg:text-7xl"
        >
          {words.map((word, wi) => {
            const wordStart = charCursor;
            charCursor += word.length;
            return (
              <span key={wi}>
                <span className="inline-block">
                  {word.split("").map((char, ci) =>
                    reduced ? (
                      <span key={ci}>{char}</span>
                    ) : (
                      <Char
                        key={ci}
                        char={char}
                        index={wordStart + ci}
                        total={totalChars}
                        progress={scrollYProgress}
                      />
                    )
                  )}
                </span>
                {wi < words.length - 1 ? " " : null}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Each character owns a small overlapping slice of the scroll progress, so
  // the light sweeps through the line instead of switching per letter.
  const start = (index / total) * 0.8;
  const opacity = useTransform(progress, [start, start + 0.2], [0.14, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}
