"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface HeroParallaxProps {
  children: React.ReactNode;
}

export function HeroParallax({ children }: HeroParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !containerRef.current) return;

      const section = containerRef.current;

      const title = section.querySelector("h1");
      const subtitle = section.querySelector("p");
      const ctaGroup = section.querySelector('[data-parallax="cta"]');
      const bg = section.querySelector('[data-parallax="bg"]');

      if (bg) {
        gsap.to(bg, {
          y: 80,
          scale: 1.1,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (title) {
        gsap.to(title, {
          y: -40,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "50% top",
            scrub: 1,
          },
        });
      }

      if (subtitle) {
        gsap.to(subtitle, {
          y: -25,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "10% top",
            end: "60% top",
            scrub: 1,
          },
        });
      }

      if (ctaGroup) {
        gsap.to(ctaGroup, {
          y: -15,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "15% top",
            end: "70% top",
            scrub: 1,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return <div ref={containerRef}>{children}</div>;
}
