import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { CreatureBackground } from "@/app/components/animation/CreatureBackground";
import { HeroParallax } from "@/app/components/animation/HeroParallax";

export function Hero() {
  return (
    <HeroParallax>
      <section
        id="hero"
        className="relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-28 sm:pt-24 lg:min-h-[100dvh] lg:pb-0"
      >
        <div
          aria-hidden="true"
          data-parallax="bg"
          className="absolute inset-0 -z-10 flex items-center justify-center"
          style={{ willChange: "transform, opacity" }}
        >
          <CreatureBackground />
        </div>
        <Container>
          <div className="mx-auto flex max-w-[920px] flex-col items-center gap-6 sm:gap-8">
            <h1
              className="max-w-[20ch] text-center font-sans text-[clamp(2.5rem,10vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-text-primary"
              style={{ willChange: "transform, opacity" }}
            >
              Automatización de procesos sin plantillas.
            </h1>

            <p
              className="max-w-2xl text-center text-base leading-relaxed text-text-secondary sm:text-lg"
              style={{ willChange: "transform, opacity" }}
            >
              Workflows con IA que se acoplan a tu arquitectura. n8n, agentes
              personalizados y APIs — sin forzar herramientas que no necesitas.
            </p>

            <div
              data-parallax="cta"
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
              style={{ willChange: "transform, opacity" }}
            >
              <Button href="#pricing" size="lg">
                Agendar una llamada
              </Button>
              <Button href="#como-funciona" variant="secondary" size="lg">
                Ver cómo funciona
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </HeroParallax>
  );
}
