import { Container } from "@/app/components/ui/Container";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { socialProof } from "@/app/data/socialProof";
import type { Messages } from "@/app/lib/i18n/dictionaries";

export function SocialProof({ dict }: { dict: Messages }) {
  return (
    <section className="border-y border-border-default bg-bg-surface py-10 sm:py-12">
      <Container>
        <ScrollReveal>
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-wider text-text-tertiary sm:mb-8">
            {dict.socialProof.eyebrow}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 items-center gap-x-6 gap-y-5 text-center sm:flex sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-8">
          {socialProof.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 60}>
              <div className="flex min-h-8 items-center justify-center">
                <span className="font-sans text-base font-semibold tracking-tight text-text-tertiary transition-colors duration-200 hover:text-text-secondary sm:text-lg">
                  {item.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
