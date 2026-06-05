import { cn } from "@/app/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center rounded-md border border-white/10 bg-bg-elevated px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-text-secondary transition-colors duration-200 hover:border-accent/30 hover:bg-accent-dim hover:text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
