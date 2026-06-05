import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { stack } from "@/app/data/stack";

export function Stack() {
  return (
    <SectionWrapper id="stack">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              Stack
            </span>
            <h2 className="font-sans text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.01em] text-text-primary">
              n8n + OpenClaw + las herramientas que ya ten\u00e9s
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {stack.map((item, i) => (
            <ScrollReveal
              key={item.id}
              delay={i * 80}
              direction="up"
              distance={20}
            >
              <div className="group flex flex-col items-center gap-3 rounded-xl border border-border-default bg-bg-surface p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_0_16px_rgba(255,0,51,0.08)]">
                <span className="font-sans text-base font-semibold text-text-primary transition-colors duration-150 group-hover:text-accent">
                  {item.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary">
                  {item.category}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
