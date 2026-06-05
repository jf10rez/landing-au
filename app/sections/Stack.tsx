import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { stack } from "@/app/data/stack";

export function Stack() {
  return (
    <SectionWrapper id="stack">
      <Container>
        <ScrollReveal>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14 lg:mb-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              Stack
            </span>
            <h2 className="font-sans text-[clamp(2rem,8vw,3rem)] font-bold leading-tight tracking-normal text-text-primary sm:text-[clamp(2.25rem,4vw,3rem)]">
              n8n + OpenClaw + las herramientas que ya tienes
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {stack.map((item, i) => (
            <ScrollReveal
              key={item.id}
              delay={i * 80}
              direction="up"
              distance={20}
            >
              <div className="group flex min-h-24 min-w-0 flex-col items-center justify-center gap-3 rounded-lg border border-border-default bg-bg-surface p-4 text-center transition-all duration-150 motion-safe:hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_0_16px_rgba(255,0,51,0.08)] sm:p-5">
                <span className="max-w-full break-words font-sans text-sm font-semibold text-text-primary transition-colors duration-150 group-hover:text-accent sm:text-base">
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
