"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: React.ReactNode;
  panelCount?: number;
  className?: string;
  panelClassName?: string;
  pin?: boolean;
  scrub?: number | boolean;
}

export function HorizontalScroll({
  children,
  panelCount = 3,
  className = "",
  panelClassName = "",
  pin = true,
  scrub = 1,
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !trackRef.current || !containerRef.current) return;

      const panels = trackRef.current.children;
      if (!panels.length) return;

      const getScrollAmount = () => {
        return trackRef.current!.scrollWidth - window.innerWidth;
      };

      gsap.to(trackRef.current, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin,
          scrub,
          invalidateOnRefresh: true,
        },
      });

      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: containerRef, dependencies: [pin, scrub] }
  );

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        ref={trackRef}
        className="flex h-screen w-max"
        style={{ willChange: "transform" }}
      >
        {Array.from({ length: panelCount }).map((_, i) => (
          <div
            key={i}
            className={`flex h-screen w-screen shrink-0 items-center justify-center ${panelClassName}`}
          >
            {typeof children === "function"
              ? (children as (props: { index: number }) => React.ReactNode)({ index: i })
              : children}
          </div>
        ))}
      </div>
    </div>
  );
}
