"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * A restrained custom cursor: a thin ring that lerps toward the mouse,
 * scales up over interactive elements. Hidden on touch / coarse pointers
 * and when the user prefers reduced motion. The native cursor stays.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 320, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 320, damping: 32, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        "a, button, [role='button'], input, textarea, [data-cursor='active']"
      );
      setActive(interactive);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{
          width: active ? 56 : 10,
          height: active ? 56 : 10,
          borderColor: active ? "rgba(232,225,210,0.9)" : "rgba(232,225,210,0.45)",
          backgroundColor: active ? "rgba(232,225,210,0.05)" : "rgba(232,225,210,0)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border"
      />
    </motion.div>
  );
}
