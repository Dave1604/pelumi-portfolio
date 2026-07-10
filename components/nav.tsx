"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { nav as navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500",
          scrolled
            ? "border-b border-rule bg-bg/70 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between px-6 md:h-16 md:px-10">
          <a
            href="#top"
            className="font-mono text-xs tracking-[0.18em] uppercase text-ink"
          >
            <span className="text-mute">PA</span>
            <span className="mx-1.5 text-rule">/</span>
            <span>Pelumi Adewara</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="anchor-line font-mono text-xs uppercase tracking-[0.18em] text-soft hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden font-mono text-xs uppercase tracking-[0.18em] text-ink md:inline-flex"
          >
            <span className="live-dot mr-2 inline-block size-1.5 rounded-full bg-signal" />
            Available
          </a>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative h-8 w-8 md:hidden"
          >
            <span
              className={cn(
                "absolute left-1 right-1 top-3 h-px bg-ink transition-transform duration-300",
                open && "translate-y-1 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-1 right-1 top-5 h-px bg-ink transition-transform duration-300",
                open && "-translate-y-1 -rotate-45"
              )}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-14 items-center justify-end px-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                Index
              </span>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.06 * i + 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-serif text-5xl tracking-[-0.02em] text-ink"
                >
                  <span className="mr-3 font-mono text-xs align-middle text-mute">
                    0{i + 1}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
