"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface PricingParallaxProps {
  children: React.ReactNode;
}

export function PricingParallax({ children }: PricingParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !ref.current || !cardRef.current) return;

      gsap.from(cardRef.current, {
        scale: 0.92,
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          once: true,
        },
      });

      if (glowRef.current) {
        gsap.fromTo(
          glowRef.current,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 70%",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      <div ref={cardRef} style={{ willChange: "transform" }}>
        {children}
      </div>
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-x-4 inset-y-0 -z-10 hidden rounded-lg bg-accent/20 blur-2xl sm:block"
        aria-hidden
        style={{ willChange: "opacity, transform" }}
      >
        <div className="h-full w-full rounded-lg bg-accent/30 animate-pulse-glow" />
      </div>
    </div>
  );
}
