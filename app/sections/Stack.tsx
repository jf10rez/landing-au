import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { StackParallax } from "@/app/components/animation/StackParallax";
import { stack } from "@/app/data/stack";

export function Stack() {
  return (
    <SectionWrapper id="stack">
      <Container>
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-20">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              Stack Tecnológico
            </span>
            <h2 className="font-sans text-[clamp(2rem,8vw,3rem)] font-bold leading-tight tracking-normal text-text-primary sm:text-[clamp(2.25rem,4vw,3rem)]">
              n8n + OpenClaw + las herramientas que ya tienes
            </h2>
            <p className="mt-4 text-text-secondary">
              Integración nativa con tu ecosistema actual
            </p>
          </div>
        </ScrollReveal>

        <StackParallax>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {stack.map((item, index) => (
              <div
                key={item.id}
                data-stack-item
                data-stack-index={index}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative flex min-h-28 flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-border-default bg-bg-surface p-5 text-center transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.02] sm:p-6"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:from-accent/5 group-hover:via-accent/0 group-hover:to-accent/5 group-hover:opacity-100" />

                <div className="card-glow pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 shadow-[0_0_20px_rgba(255,0,51,0.15),0_0_40px_rgba(255,0,51,0.05)] transition-opacity duration-300 group-hover:opacity-100" />

                <span className="relative font-sans text-base font-semibold text-text-primary transition-colors duration-300 group-hover:text-accent sm:text-lg">
                  {item.name}
                </span>
                <span className="relative font-mono text-[10px] uppercase tracking-wider text-text-tertiary transition-colors duration-300 group-hover:text-text-secondary">
                  {item.category}
                </span>

                <div className="pointer-events-none absolute inset-0 rounded-xl border border-accent/0 transition-all duration-300 group-hover:border-accent/40" />
              </div>
            ))}
          </div>
        </StackParallax>
      </Container>
    </SectionWrapper>
  );
}
