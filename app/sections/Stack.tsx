import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { StackParallax } from "@/app/components/animation/StackParallax";
import { stack } from "@/app/data/stack";
import type { Messages } from "@/app/lib/i18n/dictionaries";

export function Stack({ dict }: { dict: Messages }) {
  const t = dict.stack;
  return (
    <SectionWrapper id="stack">
      <Container>
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-20">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              {t.eyebrow}
            </span>
            <h2 className="font-sans text-[clamp(2rem,8vw,3rem)] font-bold leading-tight tracking-normal text-text-primary sm:text-[clamp(2.25rem,4vw,3rem)]">
              {t.title}
            </h2>
            <p className="mt-4 text-text-secondary">
              {t.description}
            </p>
          </div>
        </ScrollReveal>

        <StackParallax>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {stack.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  data-stack-item
                  className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border-default bg-bg-surface p-5 text-center opacity-0 transition-all duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] motion-safe:hover:border-accent/30 motion-safe:hover:bg-bg-elevated motion-safe:hover:shadow-[0_0_24px_rgba(255,0,51,0.08)] sm:gap-4 sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-bg-base text-text-secondary transition-colors duration-300 group-hover:text-accent sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-sans text-base font-semibold text-text-primary sm:text-lg">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary">
                      {t.categories[item.category as keyof Messages["stack"]["categories"]] ?? item.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </StackParallax>

        <ScrollReveal delay={200}>
          <p className="mx-auto mt-12 max-w-lg text-center text-sm text-text-tertiary sm:mt-16">
            {t.footer}
          </p>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
