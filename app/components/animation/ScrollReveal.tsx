"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { cn } from "@/app/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  easing?: string;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 40,
  easing = "power3.out",
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;

    const el = ref.current;

    const getFromVars = () => {
      switch (direction) {
        case "up":
          return { y: distance };
        case "down":
          return { y: -distance };
        case "left":
          return { x: distance };
        case "right":
          return { x: -distance };
      }
    };

    const fromVars = { opacity: 0, ...getFromVars() };

    gsap.set(el, fromVars);

    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay: delay / 1000,
        ease: easing,
        scrollTrigger: {
          trigger: el,
          start: `top ${100 - threshold * 100}%`,
          once,
        },
      });
    });

    return () => ctx.revert();
  }, [reduced, delay, duration, direction, distance, easing, threshold, once]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
}
