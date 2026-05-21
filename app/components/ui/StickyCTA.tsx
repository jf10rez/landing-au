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
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!ref.current || reduced) return;

    if (visible) {
      animate(ref.current, {
        translateX: ["120%", "0%"],
        opacity: [0, 1],
        duration: 700,
        easing: "cubicBezier(0.34, 1.56, 0.64, 1)",
        autoplay: true,
      });
    } else {
      animate(ref.current, {
        translateX: ["0%", "120%"],
        opacity: [1, 0],
        duration: 500,
        easing: "cubicBezier(0.87, 0, 0.13, 1)",
        autoplay: true,
      });
    }
  }, [visible, reduced]);

  if (reduced && !visible) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "fixed bottom-6 right-6 z-50 translate-x-[120%] opacity-0 md:bottom-8 md:right-8",
        reduced && visible && "translate-x-0 opacity-100"
      )}
    >
      <Button
        href="#pricing"
        size="lg"
        className="shadow-[0_0_32px_rgba(255,0,51,0.25)] hover:shadow-[0_0_48px_rgba(255,0,51,0.4)]"
      >
        Agendar llamada
      </Button>
    </div>
  );
}
