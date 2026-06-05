"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/utils";

export function StickyCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    let frame = 0;
    let current = false;

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const threshold = window.innerHeight * 0.8;
        const next = window.scrollY > threshold;
        if (next !== current) {
          current = next;
          setVisible(next);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!ref.current || reduced) return;

    const animation = animate(ref.current, {
      translateX: visible ? ["120%", "0%"] : ["0%", "120%"],
      opacity: visible ? [0, 1] : [1, 0],
      duration: visible ? 700 : 500,
      easing: visible
        ? "cubicBezier(0.34, 1.56, 0.64, 1)"
        : "cubicBezier(0.87, 0, 0.13, 1)",
      autoplay: true,
    });

    return () => {
      animation.pause();
    };
  }, [visible, reduced]);

  if (reduced && !visible) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "fixed inset-x-4 bottom-4 z-50 translate-x-[120%] opacity-0 sm:inset-x-auto sm:right-6 md:bottom-8 md:right-8",
        reduced && visible && "translate-x-0 opacity-100"
      )}
    >
      <Button
        href="#pricing"
        size="lg"
        className="w-full shadow-[0_0_24px_rgba(255,0,51,0.2)] hover:shadow-[0_0_40px_rgba(255,0,51,0.35)] sm:w-auto"
      >
        Agendar llamada
      </Button>
    </div>
  );
}
