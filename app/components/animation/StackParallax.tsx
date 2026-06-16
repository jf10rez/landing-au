"use client";

import { useRef, useEffect } from "react";
import { animate, stagger, utils } from "animejs";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

interface StackParallaxProps {
  children: React.ReactNode;
}

export function StackParallax({ children }: StackParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll("[data-stack-item]");
    if (!items.length) return;

    if (reduced) {
      utils.set(items, { opacity: 1, translateY: 0, scale: 1 });
      return;
    }

    utils.set(items, {
      opacity: 0,
      translateY: 24,
      scale: 0.98,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          animationRef.current = animate(items, {
            opacity: [0, 1],
            translateY: [24, 0],
            scale: [0.98, 1],
            duration: 650,
            ease: "outQuad",
            delay: stagger(55),
          });

          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      animationRef.current?.pause();
    };
  }, [reduced]);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
}
