// Helper de eventos de analítica (GA4). No-op si gtag no está cargado.

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  // push a dataLayer para que GTM pueda capturar el evento…
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  // …y a gtag directo si GA4 está cargado sin GTM.
  window.gtag?.("event", name, params);
}
