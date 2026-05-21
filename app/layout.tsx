import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://operador-ia.com"),
  title: "Automatizaciones que no fallan | Operador IA",
  description:
    "Dise\u00f1amos workflows con n8n, agentes de IA y APIs para eliminar tareas repetitivas en ventas, marketing y operaciones. Sin plantillas. Sin promesas vac\u00edas.",
  keywords: [
    "automatizaci\u00f3n",
    "n8n",
    "workflows",
    "agentes IA",
    "automatizaci\u00f3n B2B",
    "automatizaci\u00f3n agencias",
    "CRM automation",
    "lead generation",
  ],
  authors: [{ name: "Operador IA" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://operador-ia.com",
    siteName: "Operador IA",
    title: "Automatizaciones que no fallan | Operador IA",
    description:
      "Dise\u00f1amos workflows con n8n, agentes de IA y APIs para eliminar tareas repetitivas en ventas, marketing y operaciones.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Operador IA - Automatizaciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatizaciones que no fallan | Operador IA",
    description:
      "Dise\u00f1amos workflows con n8n, agentes de IA y APIs para eliminar tareas repetitivas.",
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
