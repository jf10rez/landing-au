import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ilaxus.com"),
  title: "Ilaxus — Automatización con IA que da resultados reales",
  description:
    "Workflows inteligentes con n8n y agentes de IA que llenan tu pipeline, actualizan tus dashboards en automático y gestionan tu día a día. Sin plantillas. Sin copiar y pegar datos nunca más.",
  keywords: [
    "automatización con IA",
    "workflows n8n",
    "automatización ventas",
    "reporting automático marketing",
    "agentes de IA",
    "automatización para agencias",
    "pipeline de ventas automático",
  ],
  authors: [{ name: "Ilaxus" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://ilaxus.com",
    siteName: "Ilaxus",
    title: "Ilaxus — Automatización con IA que da resultados reales",
    description:
      "Workflows inteligentes con n8n y agentes de IA que llenan tu pipeline, actualizan tus dashboards en automático y gestionan tu día a día. Sin plantillas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ilaxus — Automatización con IA que da resultados reales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilaxus — Automatización con IA que da resultados reales",
    description:
      "Workflows con n8n y agentes de IA que llenan tu pipeline y actualizan tus dashboards solos. Sin plantillas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-bg-base text-text-primary"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
