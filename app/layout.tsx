import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ilaxus.com"),
  title: "Ilaxus | Contrata empleados digitales con IA",
  description:
    "Empleados digitales con IA para ventas, marketing, finanzas y más. Incorpora especialistas que trabajan para tu negocio 24/7 y potencia tu equipo.",
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
    title: "Ilaxus | Contrata empleados digitales con IA",
    description:
      "Empleados digitales con IA para ventas, marketing, finanzas y más. Incorpora especialistas que trabajan para tu negocio 24/7 y potencia tu equipo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ilaxus | Contrata empleados digitales con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilaxus | Contrata empleados digitales con IA",
    description:
      "Empleados digitales con IA para ventas, marketing, finanzas y más. Incorpora especialistas que trabajan para tu negocio 24/7 y potencia tu equipo.",
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
