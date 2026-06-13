"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProviderProps {
  children: React.ReactNode;
}

export function ParallaxProvider({ children }: ParallaxProviderProps) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reduced) return;

      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => {
        clearTimeout(refreshTimeout);
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (reduced) return;

    const onFontLoad = () => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(onFontLoad);
    }

    window.addEventListener("load", onFontLoad);
    return () => window.removeEventListener("load", onFontLoad);
  }, [reduced]);

  return <div ref={containerRef}>{children}</div>;
}
