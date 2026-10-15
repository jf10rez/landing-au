"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackEvent } from "@/app/lib/analytics";

export function Analytics() {
  // Variables de build (NEXT_PUBLIC_*): se incrustan en el bundle al compilar.
  // Por eso deben estar presentes en el `docker build`, no solo en runtime.
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-VYTWE0X95E";
  const cfToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;
  // Eventos de contacto: un único listener global captura todos los clics
  // en enlaces de WhatsApp, email y teléfono del sitio.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackEvent("contact_whatsapp", { link_url: href });
      } else if (href.startsWith("mailto:")) {
        trackEvent("contact_email");
      } else if (href.startsWith("tel:")) {
        trackEvent("contact_phone");
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {cfToken ? (
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: cfToken })}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
