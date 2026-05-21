import { Container } from "@/app/components/ui/Container";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { socialProof } from "@/app/data/socialProof";

export function SocialProof() {
  return (
    <section className="border-y border-border-default bg-bg-surface py-12">
      <Container>
        <ScrollReveal>
          <p className="mb-8 text-center font-mono text-xs uppercase tracking-wider text-text-tertiary">
            Equipos que ya operan sin fricci\u00f3n
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {socialProof.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 60}>
              <div className="flex h-8 items-center">
                <span className="font-sans text-lg font-semibold tracking-tight text-text-tertiary transition-colors duration-200 hover:text-text-secondary">
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
