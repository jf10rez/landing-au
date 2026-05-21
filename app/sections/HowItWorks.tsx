import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Diagn\u00f3stico Operativo",
    description:
      "Mapeamos tus procesos actuales. Identificamos los puntos donde el tiempo se pierde y el dinero se filtra.",
  },
  {
    number: "02",
    title: "Construcci\u00f3n del Workflow",
    description:
      "Dise\u00f1amos el flujo con n8n, agentes de IA y las APIs de tus herramientas. Cada nodo tiene un prop\u00f3sito medible.",
  },
  {
    number: "03",
    title: "Entrega y Monitoreo",
    description:
      "No te dejamos solo. Entregamos el sistema documentado, capacitamos a tu equipo y monitoreamos que los n\u00fameros mejoren.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="como-funciona" className="bg-bg-surface">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              Proceso
            </span>
            <h2 className="font-sans text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.01em] text-text-primary">
              C\u00f3mo funciona
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.number}
              delay={i * 200}
              direction={i % 2 === 0 ? "left" : "right"}
              distance={30}
            >
              <div className="flex flex-col gap-4">
                <span className="font-mono text-4xl font-medium text-text-tertiary">
                  {step.number}
                </span>
                <h3 className="font-sans text-xl font-semibold text-text-primary">
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
