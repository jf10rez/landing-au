"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface UseCasesParallaxProps {
  children: React.ReactNode;
}

export function UseCasesParallax({ children }: UseCasesParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !ref.current) return;

      const cards = ref.current.querySelectorAll("[data-case-card]");
      if (!cards.length) return;

      cards.forEach((card, i) => {
        const fromLeft = i % 2 === 0;

        gsap.from(card, {
          x: fromLeft ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });

        gsap.to(card, {
          y: -15,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
