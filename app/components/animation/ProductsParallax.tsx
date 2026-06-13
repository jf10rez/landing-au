"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface ProductsParallaxProps {
  children: React.ReactNode;
}

export function ProductsParallax({ children }: ProductsParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !ref.current) return;

      const cards = ref.current.querySelectorAll("[data-parallax-card]");
      if (!cards.length) return;

      cards.forEach((card, i) => {
        const speed = i % 2 === 0 ? 15 : -10;

        gsap.to(card, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.from(card, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
