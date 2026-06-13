import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { ProductCarousel } from "@/app/components/ui/ProductCarousel";
import { products } from "@/app/data/products";

export function Products() {
  return (
    <SectionWrapper id="productos">
      <Container>
        <ScrollReveal>
          <div className="mb-10 max-w-2xl sm:mb-14 lg:mb-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              Productos
            </span>
            <h2 className="font-sans text-[clamp(2rem,8vw,3rem)] font-bold leading-tight tracking-normal text-text-primary sm:text-[clamp(2.25rem,4vw,3rem)]">
              Tres modelos. Un mismo resultado: menos trabajo manual.
            </h2>
          </div>
        </ScrollReveal>

        <ProductCarousel products={products} />
      </Container>
    </SectionWrapper>
  );
}
