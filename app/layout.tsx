import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ilaxus.com"),
  title: "Automatización de Procesos B2B con IA | Ilaxus",
  description:
    "Automatizamos workflows empresariales con n8n y agentes de IA. Sin plantillas. Diseño a medida de tu arquitectura. Solicita un diagnóstico gratuito.",
  keywords: [
    "automatización de procesos",
    "automatización B2B",
    "workflows con IA",
    "n8n para empresas",
    "automatización agencias marketing",
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
    title: "Automatización de Procesos B2B con IA | Ilaxus",
    description:
      "Automatizamos workflows empresariales con n8n y agentes de IA. Sin plantillas. Diseño a medida para tu arquitectura. Solicita un diagnóstico gratuito.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ilaxus — Automatización de procesos empresariales con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización de Procesos B2B con IA | Ilaxus",
    description:
      "Workflows empresariales con n8n y agentes de IA. Sin plantillas. A medida de tu arquitectura.",
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
