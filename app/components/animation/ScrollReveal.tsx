"use client";

import { useEffect, useRef } from "react";
import { animate, set } from "animejs";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { cn } from "@/app/lib/utils";

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
  duration = 800,
  direction = "up",
  distance = 40,
  easing = "cubicBezier(0.16, 1, 0.3, 1)",
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;

    const el = ref.current;

    const getTranslate = () => {
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

    const translate = getTranslate();
    const initial = { opacity: 0, ...translate };
    const target =
      "x" in translate ? { x: [translate.x, 0] } : { y: [translate.y, 0] };

    set(el, initial);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(el, {
              opacity: [0, 1],
              ...target,
              duration,
              delay,
              easing,
              autoplay: true,
            });
            if (once) observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
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
