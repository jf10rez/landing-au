import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { CreatureBackground } from "@/app/components/animation/CreatureBackground";
import { HeroParallax } from "@/app/components/animation/HeroParallax";
import type { Locale } from "@/app/lib/i18n/config";
import type { Messages } from "@/app/lib/i18n/dictionaries";
import { localizedHref } from "@/app/lib/i18n/utils";

export function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Messages;
}) {
  const t = dict.hero;
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
              {t.title}
            </h1>

            <p
              className="max-w-2xl text-center text-base leading-relaxed text-text-secondary sm:text-lg"
              style={{ willChange: "transform, opacity" }}
            >
              {t.subtitle}
            </p>

            <div
              data-parallax="cta"
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
              style={{ willChange: "transform, opacity" }}
            >
              <Button href={localizedHref(locale, "/#pricing")} size="lg">
                {t.ctaPrimary}
              </Button>
              <Button href={localizedHref(locale, "/#como-funciona")} variant="secondary" size="lg">
                {t.ctaSecondary}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </HeroParallax>
  );
}