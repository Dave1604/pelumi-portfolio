import { cn } from "@/lib/utils";

export function SectionHeader({
  index,
  eyebrow,
  title,
  lede,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-12 md:gap-10", className)}>
      <div className="md:col-span-4">
        <div className="eyebrow flex items-center gap-3">
          <span className="text-cream">{index}</span>
          <span className="h-px w-8 bg-rule" />
          {eyebrow}
        </div>
      </div>
      <div className="md:col-span-8">
        <h2 className="max-w-[16ch] font-serif text-4xl tracking-[-0.025em] sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {lede ? (
          <p className="mt-6 max-w-[52ch] text-pretty text-base leading-relaxed text-soft md:text-lg">
            {lede}
          </p>
        ) : null}
      </div>
    </div>
  );
}
