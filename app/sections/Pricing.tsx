import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { Card } from "@/app/components/ui/Card";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { PricingParallax } from "@/app/components/animation/PricingParallax";
import { BookingForm } from "@/app/components/ui/BookingForm";

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
              Solicita un diagnóstico gratuito
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              Cuéntanos qué proceso quieres automatizar y te contactaremos en
              menos de 24 horas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto max-w-xl">
            <PricingParallax>
              <Card glow className="relative overflow-visible p-5 text-center sm:p-8">
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
                  <BookingForm />
                </div>

                <p className="mt-4 text-xs text-text-tertiary">
                  Sin tarjeta de crédito. Sin compromiso.
                </p>
              </Card>
            </PricingParallax>
          </div>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
