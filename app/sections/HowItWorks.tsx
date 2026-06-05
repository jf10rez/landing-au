import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Operativo",
    description:
      "Mapeamos tus procesos actuales. Identificamos los puntos donde el tiempo se pierde y el dinero se filtra.",
  },
  {
    number: "02",
    title: "Construcción del Workflow",
    description:
      "Diseñamos el flujo con n8n, agentes de IA y las APIs de tus herramientas. Cada nodo tiene un propósito medible.",
  },
  {
    number: "03",
    title: "Entrega y Monitoreo",
    description:
      "No te dejamos solo. Entregamos el sistema documentado, capacitamos a tu equipo y monitoreamos que los números mejoren.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="como-funciona" className="bg-bg-surface">
      <Container>
        <ScrollReveal>
          <div className="mb-10 max-w-2xl sm:mb-14 lg:mb-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              Proceso
            </span>
            <h2 className="font-sans text-[clamp(2rem,8vw,3rem)] font-bold leading-tight tracking-normal text-text-primary sm:text-[clamp(2.25rem,4vw,3rem)]">
              Cómo automatizamos tus procesos
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.number}
              delay={i * 200}
              direction="up"
              distance={24}
            >
              <div className="flex min-w-0 flex-col gap-3 rounded-lg border border-border-default/70 bg-bg-base/35 p-5 md:border-0 md:bg-transparent md:p-0">
                <span className="font-mono text-4xl font-medium text-text-tertiary">
                  {step.number}
                </span>
                <h3 className="font-sans text-lg font-semibold leading-snug text-text-primary lg:text-xl">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
