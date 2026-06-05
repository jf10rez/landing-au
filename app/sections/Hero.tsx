import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { TextReveal } from "@/app/components/animation/TextReveal";
import { WorkflowSVG } from "@/app/components/animation/WorkflowSVG";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <TextReveal
              text="Automatización de procesos sin plantillas."
              as="h1"
              glitch
              className="font-sans text-[clamp(3rem,6vw,6rem)] font-bold leading-[1.0] tracking-[-0.02em] text-text-primary"
            />

            <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
              Workflows con IA que se acoplan a tu arquitectura. n8n, agentes
              personalizados y APIs — sin forzar herramientas que no necesitás.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="#pricing" size="lg">
                Agendar una llamada
              </Button>
              <Button href="#como-funciona" variant="secondary" size="lg">
                Ver c\u00f3mo funciona
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <WorkflowSVG />
          </div>
        </div>
      </Container>
    </section>
  );
}
