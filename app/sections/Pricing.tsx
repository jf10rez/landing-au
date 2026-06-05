import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

export function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <Container>
        <ScrollReveal>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14 lg:mb-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              Primer paso
            </span>
            <h2 className="font-sans text-[clamp(2rem,8vw,3rem)] font-bold leading-tight tracking-normal text-text-primary sm:text-[clamp(2.25rem,4vw,3rem)]">
              Agenda una llamada de diagnóstico
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              Sin compromiso. 30 minutos para mapear tus procesos y ver si hay
              margen de automatización.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto max-w-xl">
            <Card glow className="relative overflow-visible p-5 text-center sm:p-8">
              {/* Glow pulse behind card */}
              <div
                className="absolute inset-x-4 inset-y-0 -z-10 hidden rounded-lg bg-accent/20 blur-2xl sm:block"
                aria-hidden
              >
                <div className="animate-pulse-glow h-full w-full rounded-lg bg-accent/30" />
              </div>

              <h3 className="font-sans text-xl font-semibold text-text-primary sm:text-2xl">
                Diagnóstico gratuito
              </h3>
              <p className="mt-3 text-base text-text-secondary">
                Analizamos tus operaciones actuales y te entregamos un mapa de
                workflows automatizables con estimación de ROI.
              </p>

              <ul className="mt-6 flex flex-col gap-3 text-left">
                {[
                  "Mapeo de procesos actuales",
                  "Identificación de cuellos de botella",
                  "Propuesta de workflows con estimación",
                  "Roadmap de implementación",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="https://calendly.com"
                  rel="noopener noreferrer"
                  size="lg"
                  className="w-full shadow-[0_0_20px_rgba(255,0,51,0.22)] sm:shadow-[0_0_32px_rgba(255,0,51,0.3)]"
                >
                  Agendar llamada
                </Button>
              </div>

              <p className="mt-4 text-xs text-text-tertiary">
                Sin tarjeta de crédito. Sin compromiso.
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
