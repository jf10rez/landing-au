"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
  pin?: boolean;
  scrub?: number | boolean;
  start?: string;
  end?: string;
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.2,
  direction = "up",
  pin = false,
  scrub = 1,
  start = "top bottom",
  end = "bottom top",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !ref.current || !contentRef.current) return;

      const yDistance = direction === "up" ? -100 * speed : 100 * speed;

      gsap.to(contentRef.current, {
        y: yDistance,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start,
          end,
          scrub,
          pin,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: ref, dependencies: [speed, direction, pin, scrub, start, end] }
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
