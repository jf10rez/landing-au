"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/utils";
import type { Product } from "@/app/types";

/* ========================================================================
   Types & config
   ======================================================================== */

interface ProductCarouselProps {
  products: Product[];
  autoplayMs?: number;
}

interface CardStyle {
  rotateY: number;
  xPercent: number;
  scale: number;
  opacity: number;
  zIndex: number;
}

const ANIMATION_CONFIG: Record<Breakpoint, { offset1: CardStyle; offsetN: CardStyle }> = {
  mobile: {
    offset1: { rotateY: 0, xPercent: 0, scale: 0.92, opacity: 0, zIndex: 2 },
    offsetN: { rotateY: 0, xPercent: 0, scale: 0.85, opacity: 0, zIndex: 0 },
  },
  tablet: {
    offset1: { rotateY: 15, xPercent: -55, scale: 0.85, opacity: 0.35, zIndex: 1 },
    offsetN: { rotateY: 0, xPercent: 0, scale: 0.75, opacity: 0, zIndex: 0 },
  },
  desktop: {
    offset1: { rotateY: 25, xPercent: -65, scale: 0.82, opacity: 0.45, zIndex: 1 },
    offsetN: { rotateY: 0, xPercent: 0, scale: 0.7, opacity: 0, zIndex: 0 },
  },
};

type Breakpoint = "mobile" | "tablet" | "desktop";

/* ========================================================================
   Helpers
   ======================================================================== */

function getCardStyles(offset: number, bp: Breakpoint): CardStyle {
  if (offset === 0) {
    return { rotateY: 0, xPercent: 0, scale: 1, opacity: 1, zIndex: 3 };
  }

  const cfg = ANIMATION_CONFIG[bp];
  const abs = Math.abs(offset);

  if (abs === 1) {
    return offset === -1
      ? cfg.offset1
      : { ...cfg.offset1, xPercent: -cfg.offset1.xPercent, rotateY: -cfg.offset1.rotateY };
  }

  return abs <= 2 ? cfg.offsetN : { ...cfg.offsetN, opacity: 0 };
}

function getCategoryLabel(category: string): string {
  switch (category) {
    case "b2b":
      return "Automatización B2B";
    case "agency":
      return "Automatización para Agencias";
    case "openclaw":
      return "Agente de IA";
    default:
      return category;
  }
}

/* ========================================================================
   Component
   ======================================================================== */

export function ProductCarousel({ products, autoplayMs = 5000 }: ProductCarouselProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressTweenRef = useRef<gsap.core.Tween | null>(null);
  const touchStartX = useRef(0);

  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const reduced = useReducedMotion();
  const bp = useBreakpoint();

  const count = products.length;
  const isMobile = bp === "mobile";

  /* ---- Navigation ---- */
  const goTo = useCallback(
    (index: number) => setActive(((index % count) + count) % count),
    [count],
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  /* ---- IntersectionObserver ---- */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ---- GSAP card transitions ---- */
  useEffect(() => {
    if (reduced) return;

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const raw = ((i - active + count) % count) - Math.floor(count / 2);
      const wrapped = raw > Math.floor(count / 2) ? raw - count : raw < -Math.floor(count / 2) ? raw + count : raw;
      const s = getCardStyles(wrapped, bp);

      gsap.to(el, {
        rotateY: s.rotateY,
        xPercent: s.xPercent,
        scale: s.scale,
        opacity: s.opacity,
        zIndex: s.zIndex,
        duration: isMobile ? 0.5 : 0.7,
        ease: "power3.out",
      });

      if (isMobile) {
        el.style.transformStyle = "flat";
        el.style.willChange = wrapped === 0 ? "transform, opacity" : "auto";
      } else {
        el.style.transformStyle = "preserve-3d";
        el.style.willChange = Math.abs(wrapped) <= 1 ? "transform, opacity" : "auto";
      }
    });
  }, [active, count, bp, isMobile, reduced]);

  /* ---- Progress bar ---- */
  useEffect(() => {
    if (reduced || !progressBarRef.current || !isVisible) return;

    progressTweenRef.current?.kill();
    gsap.set(progressBarRef.current, { scaleX: 1 });

    progressTweenRef.current = gsap.to(progressBarRef.current, {
      scaleX: 0,
      duration: autoplayMs / 1000,
      ease: "linear",
    });

    return () => {
      progressTweenRef.current?.kill();
    };
  }, [active, autoplayMs, reduced, isVisible]);

  /* ---- Autoplay (only when visible) ---- */
  useEffect(() => {
    if (reduced || !isVisible) return;

    autoplayRef.current = setInterval(next, autoplayMs);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [next, autoplayMs, reduced, isVisible]);

  const pauseAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  const resumeAutoplay = useCallback(() => {
    if (reduced || !isVisible) return;
    pauseAutoplay();
    autoplayRef.current = setInterval(next, autoplayMs);
  }, [next, autoplayMs, reduced, isVisible, pauseAutoplay]);

  /* ---- Touch (passive) ---- */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      pauseAutoplay();
    };

    const onTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
      resumeAutoplay();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev, pauseAutoplay, resumeAutoplay]);

  /* ---- Keyboard (only when visible) ---- */
  useEffect(() => {
    if (!isVisible) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prev();
        pauseAutoplay();
        resumeAutoplay();
      }
      if (e.key === "ArrowRight") {
        next();
        pauseAutoplay();
        resumeAutoplay();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, isVisible, pauseAutoplay, resumeAutoplay]);

  /* ---- Initial GSAP state (no animation) ---- */
  useEffect(() => {
    if (reduced) return;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const raw = ((i - active + count) % count) - Math.floor(count / 2);
      const wrapped = raw > Math.floor(count / 2) ? raw - count : raw < -Math.floor(count / 2) ? raw + count : raw;
      const s = getCardStyles(wrapped, bp);
      gsap.set(el, {
        rotateY: s.rotateY,
        xPercent: s.xPercent,
        scale: s.scale,
        opacity: s.opacity,
        zIndex: s.zIndex,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  /* ---- Reduced motion: static grid ---- */
  if (reduced) {
    return (
      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {products.map((product) => (
          <ProductCardContent key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={stageRef}
      className="relative"
      role="region"
      aria-label="Carrusel de productos"
      aria-roledescription="carrusel"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* 3D stage */}
      <div className="relative mx-auto min-h-[480px] max-w-5xl md:min-h-[500px] lg:min-h-[540px]">
        <div
          className="relative h-full w-full"
          style={{
            perspective: isMobile ? "none" : "1200px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          {products.map((product, i) => {
            const raw = ((i - active + count) % count) - Math.floor(count / 2);
            const wrapped =
              raw > Math.floor(count / 2)
                ? raw - count
                : raw < -Math.floor(count / 2)
                  ? raw + count
                  : raw;

            return (
              <div
                key={product.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={cn("absolute inset-x-0 top-0 mx-auto w-full md:w-[70%] lg:w-[55%] lg:max-w-[460px]")}
                style={{
                  transformStyle: isMobile ? "flat" : "preserve-3d",
                  willChange: Math.abs(wrapped) <= 1 ? "transform, opacity" : "auto",
                }}
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`${product.title} — diapositiva ${i + 1} de ${count}`}
                aria-hidden={wrapped !== 0}
              >
                <div
                  className={cn(
                    "transition-shadow duration-300",
                    wrapped === 0
                      ? "cursor-pointer shadow-[0_0_40px_rgba(255,0,51,0.12)]"
                      : "pointer-events-none",
                  )}
                  onClick={() => {
                    if (wrapped !== 0) goTo(i);
                  }}
                >
                  <ProductCardContent product={product} featured={wrapped === 0} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          <NavButton direction="prev" onClick={() => { prev(); pauseAutoplay(); resumeAutoplay(); }} />
          <div className="flex items-center gap-2" role="tablist" aria-label="Seleccionar producto">
            {products.map((product, i) => (
              <button
                key={product.id}
                onClick={() => { goTo(i); pauseAutoplay(); resumeAutoplay(); }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === active ? "w-8 bg-accent" : "w-2 bg-white/20 hover:bg-white/40",
                )}
                role="tab"
                aria-selected={i === active}
                aria-label={product.title}
              />
            ))}
          </div>
          <NavButton direction="next" onClick={() => { next(); pauseAutoplay(); resumeAutoplay(); }} />
        </div>

        {/* Progress bar */}
        <div className="h-0.5 w-24 overflow-hidden rounded-full bg-white/10 md:w-32">
          <div
            ref={progressBarRef}
            className="h-full origin-left rounded-full bg-accent"
          />
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   Sub-components
   ======================================================================== */

function NavButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-bg-surface text-text-secondary transition-all duration-200 hover:border-accent/50 hover:text-accent motion-safe:hover:scale-110 md:h-10 md:w-10"
      aria-label={isPrev ? "Producto anterior" : "Siguiente producto"}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={isPrev ? "M10 12L6 8L10 4" : "M6 12L10 8L6 4"} />
      </svg>
    </button>
  );
}

function ProductCardContent({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  return (
    <Card
      className={cn(
        "flex h-full min-w-0 flex-col gap-5 sm:gap-6",
        featured && "border-accent/40",
      )}
    >
      <div>
        <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-accent">
          {getCategoryLabel(product.category)}
        </span>
        <h3 className="font-sans text-xl font-semibold leading-snug text-text-primary sm:text-2xl">
          {product.title}
        </h3>
      </div>

      <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
        {product.description}
      </p>

      <ul className="flex flex-col gap-2">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="flex min-w-0 items-start gap-2 text-sm text-text-secondary"
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

      <div className="pt-2 sm:pt-4">
        <Button
          href={product.ctaHref}
          variant="secondary"
          className="w-full sm:w-auto"
        >
          {product.ctaLabel}
        </Button>
      </div>
    </Card>
  );
}
