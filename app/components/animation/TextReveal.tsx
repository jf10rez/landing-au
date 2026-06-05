"use client";

import { useEffect, useRef, useMemo } from "react";
import { createTimeline } from "animejs";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { cn } from "@/app/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  glitch?: boolean;
  stagger?: number;
  duration?: number;
  delay?: number;
}

export function TextReveal({
  text,
  className,
  as: Tag = "h1",
  glitch = false,
  stagger = 30,
  duration = 1000,
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const chars = useMemo(() => text.split(""), [text]);

  useEffect(() => {
    if (reduced || !containerRef.current) return;

    const spans = containerRef.current.querySelectorAll(".char");

    const tl = createTimeline({
      autoplay: true,
    });

    tl.add(spans, {
      translateY: ["110%", "0%"],
      opacity: [0, 1],
      duration,
      delay: stagger,
      easing: "cubicBezier(0.16, 1, 0.3, 1)",
    });

    if (glitch) {
      const glitchLayers = containerRef.current.querySelectorAll(".glitch-layer");
      tl.add(glitchLayers, {
        translateX: ["-4px", "4px", "-2px", "2px", "0px"],
        opacity: [0, 0.8, 0.4, 0.8, 0],
        duration: 80,
        easing: "linear",
      });
    }
  }, [reduced, text, glitch, stagger, duration, delay]);

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag ref={containerRef as React.RefObject<HTMLHeadingElement>} className={cn("relative", className)}>
      {glitch && (
        <>
          <span
            aria-hidden
            className="glitch-layer pointer-events-none absolute inset-0 text-accent opacity-0"
            style={{ clipPath: "inset(0 0 50% 0)" }}
          >
            {text}
          </span>
          <span
            aria-hidden
            className="glitch-layer pointer-events-none absolute inset-0 text-white opacity-0"
            style={{ clipPath: "inset(50% 0 0 0)" }}
          >
            {text}
          </span>
        </>
      )}
      <span className="block overflow-hidden">
        {chars.map((char, i) => (
          <span
            key={i}
            className="char inline-block"
            style={{
              opacity: reduced ? 1 : 0,
              whiteSpace: char === " " ? "pre" : undefined,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </Tag>
  );
}
