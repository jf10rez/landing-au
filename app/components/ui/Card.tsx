import { cn } from "@/app/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function Card({ children, className, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border-default bg-bg-surface p-6 transition-all duration-200",
        "hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_0_24px_rgba(255,0,51,0.08)]",
        glow && "border-accent/50 shadow-[0_0_32px_rgba(255,0,51,0.12)]",
        className
      )}
    >
      {/* Scanline pseudo-element handled via CSS group-hover in parent */}
      {children}
    </div>
  );
}
