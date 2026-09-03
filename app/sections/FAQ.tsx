import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { FAQAccordion } from "@/app/components/ui/FAQAccordion";
import { getFaq } from "@/app/data/faq";
import type { Messages } from "@/app/lib/i18n/dictionaries";

export function FAQ({ dict }: { dict: Messages }) {
  const t = dict.faq;
  const faq = getFaq(dict);

  return (
    <SectionWrapper id="faq" className="bg-bg-surface">
      <Container>
        <ScrollReveal>
          <div className="mb-10 max-w-2xl sm:mb-14 lg:mb-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              {t.eyebrow}
            </span>
            <h2 className="font-sans text-[clamp(2rem,8vw,3rem)] font-bold leading-tight tracking-normal text-text-primary sm:text-[clamp(2.25rem,4vw,3rem)]">
              {t.title}
            </h2>
          </div>
        </ScrollReveal>

        <FAQAccordion items={faq} />
      </Container>
    </SectionWrapper>
  );
}