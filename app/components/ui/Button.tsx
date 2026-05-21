import { cn } from "@/app/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  href?: string;
}

export function Button({
  className,
  variant = "primary",
  size = "default",
  href,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,0,51,0.3)] active:scale-[0.98]",
    secondary:
      "border border-text-primary/20 bg-transparent text-text-primary hover:border-accent/50 hover:text-accent hover:shadow-[0_0_16px_rgba(255,0,51,0.15)] active:scale-[0.98]",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5 active:scale-[0.98]",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    sm: "px-4 py-2 text-xs",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
