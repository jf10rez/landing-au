import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { CountUp } from "@/app/components/animation/CountUp";
import { useCases } from "@/app/data/useCases";

export function UseCases() {
  return (
    <SectionWrapper id="casos" className="bg-bg-surface">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              Resultados
            </span>
            <h2 className="font-sans text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.01em] text-text-primary">
              Números que importan
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.id} delay={i * 150}>
              <div className="grid gap-8 rounded-2xl border border-border-default bg-bg-base p-6 md:grid-cols-3 md:p-8">
                <div className="flex flex-col gap-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                    {uc.clientType}
                  </h3>
                  <h4 className="font-sans text-lg font-semibold text-text-primary">
                    Problema
                  </h4>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {uc.problem}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="font-sans text-lg font-semibold text-text-primary">
                    Solución
                  </h4>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {uc.solution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 md:flex-col md:items-start md:justify-center">
                  {uc.metrics.map((metric) => (
                    <CountUp
                      key={metric.label}
                      end={metric.value}
                      suffix={metric.suffix}
                      label={metric.label}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
