"use client";

import { useSyncExternalStore } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

const QUERIES = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
} as const;

function getBreakpoint(): Breakpoint {
  if (window.matchMedia(QUERIES.desktop).matches) return "desktop";
  if (window.matchMedia(QUERIES.tablet).matches) return "tablet";
  return "mobile";
}

function subscribe(callback: () => void) {
  const mqls = [
    window.matchMedia(QUERIES.mobile),
    window.matchMedia(QUERIES.tablet),
    window.matchMedia(QUERIES.desktop),
  ];
  mqls.forEach((mql) => mql.addEventListener("change", callback));
  return () => mqls.forEach((mql) => mql.removeEventListener("change", callback));
}

export function useBreakpoint(): Breakpoint {
  return useSyncExternalStore(subscribe, getBreakpoint, () => "desktop");
}
