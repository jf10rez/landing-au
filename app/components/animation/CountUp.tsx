"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

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

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const el = ref.current;
    let animation: ReturnType<typeof animate> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (reduced) {
              el.textContent = `${prefix}${end}${suffix}`;
            } else {
              animation = animate(el, {
                innerText: [0, end],
                duration,
                round: 1,
                easing: "cubicBezier(0.16, 1, 0.3, 1)",
                onUpdate: (self) => {
                  const val = Math.round(self.progress * end);
                  el.textContent = `${prefix}${val}${suffix}`;
                },
              });
            }
            setHasAnimated(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      animation?.pause();
    };
  }, [end, prefix, suffix, duration, reduced, hasAnimated]);

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
