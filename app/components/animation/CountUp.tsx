"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  label: string;
}

export function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
  label,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || hasAnimated || reduced) return;

      const el = ref.current;

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: end,
          duration: duration / 1000,
          ease: "power3.out",
          snap: { innerText: 1 },
          onUpdate() {
            el.textContent = `${prefix}${Math.round(Number(gsap.getProperty(el, "innerText")))}${suffix}`;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        }
      );

      setHasAnimated(true);
    },
    { dependencies: [end, prefix, suffix, duration, reduced, hasAnimated] }
  );

  return (
    <div className={className}>
      <span
        ref={ref}
        className="font-mono text-[clamp(2.5rem,5vw,4rem)] font-medium text-metric"
        aria-label={`${label}: ${end}${suffix}`}
      >
        {reduced ? `${prefix}${end}${suffix}` : `${prefix}0${suffix}`}
      </span>
      <span className="mt-2 block font-mono text-xs uppercase tracking-wider text-text-tertiary">
        {label}
      </span>
    </div>
  );
}
