import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { UseCasesParallax } from "@/app/components/animation/UseCasesParallax";
import { CountUp } from "@/app/components/animation/CountUp";
import { getUseCases } from "@/app/data/useCases";
import type { Messages } from "@/app/lib/i18n/dictionaries";

export function UseCases({ dict }: { dict: Messages }) {
  const t = dict.useCases;
  const useCases = getUseCases(dict);
  return (
    <SectionWrapper id="casos" className="bg-bg-surface">
      <Container>
        <ScrollReveal>
          <div className="mb-10 max-w-2xl sm:mb-14 lg:mb-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              {t.eyebrow}
            </span>
            <h2 className="font-sans text-[clamp(2rem,8vw,3rem)] font-bold leading-tight tracking-normal text-text-primary sm:text-[clamp(2.25rem,4vw,3rem)]">
              {t.title}
            </h2>
          </div>
        </ScrollReveal>

        <UseCasesParallax>
          <div className="flex flex-col gap-6 lg:gap-8">
            {useCases.map((uc) => (
              <div
                key={uc.id}
                data-case-card
                style={{ willChange: "transform" }}
                className="grid gap-6 rounded-lg border border-border-default bg-bg-base p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(180px,0.7fr)] md:gap-8 lg:p-8"
              >
                <div className="flex min-w-0 flex-col gap-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                    {uc.clientType}
                  </h3>
                  <h4 className="font-sans text-lg font-semibold text-text-primary">
                    {t.problemLabel}
                  </h4>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {uc.problem}
                  </p>
                </div>

                <div className="flex min-w-0 flex-col gap-3">
                  <h4 className="font-sans text-lg font-semibold text-text-primary">
                    {t.solutionLabel}
                  </h4>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {uc.solution}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-border-default pt-5 md:flex md:flex-col md:items-start md:justify-center md:border-t-0 md:pt-0">
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
            ))}
          </div>
        </UseCasesParallax>
      </Container>
    </SectionWrapper>
  );
}
