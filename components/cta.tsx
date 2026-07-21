import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

/**
 * Shared call-to-action. `primary` is the filled cream button (the one ask
 * per screen); `ghost` is the restrained bordered secondary.
 */
export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: Props) {
  const base =
    "group inline-flex items-center gap-2.5 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-300";
  const look =
    variant === "primary"
      ? "bg-cream text-bg hover:bg-ink"
      : "border border-rule text-soft hover:border-cream/40 hover:text-ink";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(base, look, className)}
    >
      {children}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
