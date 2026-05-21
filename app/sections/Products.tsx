import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { products } from "@/app/data/products";
import { cn } from "@/app/lib/utils";

export function Products() {
  return (
    <SectionWrapper id="productos">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              Productos
            </span>
            <h2 className="font-sans text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.01em] text-text-primary">
              Dos modelos. Un mismo resultado: menos trabajo manual.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, i) => (
            <ScrollReveal
              key={product.id}
              delay={i * 120}
              className="perspective-[1000px]"
            >
              <div className="group relative">
                <Card className="flex h-full flex-col gap-6">
                  <div>
                    <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-accent">
                      {product.category === "b2b"
                        ? "Automatizaci\u00f3n B2B"
                        : "Para Agencias"}
                    </span>
                    <h3 className="font-sans text-2xl font-semibold text-text-primary">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-base leading-relaxed text-text-secondary">
                    {product.description}
                  </p>

                  <ul className="flex flex-col gap-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {product.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button href={product.ctaHref} variant="secondary">
                      {product.ctaLabel}
                    </Button>
                  </div>
                </Card>

                {/* Scanline effect */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 overflow-hidden rounded-xl opacity-0 transition-opacity duration-100",
                    "group-hover:opacity-100"
                  )}
                  aria-hidden
                >
                  <div className="absolute inset-y-0 -left-full w-1/2 bg-accent/10 group-hover:animate-scanline" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
