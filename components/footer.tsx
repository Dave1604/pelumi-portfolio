import { identity } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule px-6 py-10 md:px-10 md:py-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <span className="eyebrow">Colophon</span>
          <p className="max-w-[44ch] text-pretty text-sm leading-relaxed text-soft">
            Designed and built by {identity.name}. Set in Instrument Serif &
            Geist. Drafted in Figma, written in TypeScript, rendered with
            Next.js, animated with Framer Motion, lit with Three.js.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <span className="eyebrow">Index</span>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-soft">
            © {year} · v1.0 · No cookies · No tracking
          </p>
        </div>
      </div>
    </footer>
  );
}
