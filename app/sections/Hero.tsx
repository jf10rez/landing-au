import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { TextReveal } from "@/app/components/animation/TextReveal";
import { WorkflowSVG } from "@/app/components/animation/WorkflowSVG";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-28 sm:pt-24 lg:min-h-[100dvh] lg:pb-0"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,600px)] lg:gap-16">
          <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
            <TextReveal
              text="Automatización de procesos sin plantillas."
              as="h1"
              glitch
              className="max-w-[11ch] font-sans text-[clamp(2.55rem,13vw,4rem)] font-bold leading-[1.08] tracking-normal text-text-primary sm:max-w-[13ch] sm:text-[clamp(3.25rem,8vw,5.25rem)] lg:max-w-[12ch]"
            />

            <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Workflows con IA que se acoplan a tu arquitectura. n8n, agentes
              personalizados y APIs — sin forzar herramientas que no necesitas.
            </p>

            <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <Button href="#pricing" size="lg" className="w-full sm:w-auto">
                Agendar una llamada
              </Button>
              <Button
                href="#como-funciona"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Ver cómo funciona
              </Button>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[560px] justify-center lg:justify-end">
            <WorkflowSVG />
          </div>
        </div>
      </Container>
    </section>
  );
}
