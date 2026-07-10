"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT } from "@/lib/utils";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Distance in px to translate up from. */
  y?: number;
  as?: keyof typeof motion;
  amount?: number;
};

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
  amount = 0.25,
}: Props) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: EASE_OUT, delay },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
