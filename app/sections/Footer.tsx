import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

export function Footer() {
  const links = [
    { label: "Productos", href: "#productos" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Casos", href: "#casos" },
    { label: "Agendar", href: "#pricing" },
  ];

  const social = [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ];

  return (
    <footer className="border-t border-border-default bg-bg-base">
      <Container>
        {/* Animated top line */}
        <div className="relative h-px w-full overflow-hidden">
          <div className="absolute inset-0 origin-center scale-x-0 animate-line-reveal bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        </div>

        <div className="flex flex-col items-center gap-8 py-16 md:flex-row md:justify-between">
          <ScrollReveal>
            <Link
              href="/"
              className="font-mono text-sm font-medium tracking-wider text-text-primary"
            >
              ILAXUS
            </Link>
          </ScrollReveal>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <ScrollReveal key={link.href} delay={20}>
                <a
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  {link.label}
                </a>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {social.map((s) => (
              <ScrollReveal key={s.label} delay={40}>
                <a
                  href={s.href}
                  className="text-sm text-text-tertiary transition-colors duration-200 hover:text-text-secondary"
                >
                  {s.label}
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-border-default py-8 text-center">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Ilaxus. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-text-tertiary">
            Diseñado para operar sin fricción.
          </p>
        </div>
      </Container>
    </footer>
  );
}
