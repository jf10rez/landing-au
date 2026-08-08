import type { Metadata } from "next";
import { Navbar } from "@/app/sections/Navbar";
import { CategoryNav } from "./sections/CategoryNav";
import { CatalogGrid } from "./sections/CatalogGrid";
import { CTA } from "./sections/CTA";
import { Footer } from "@/app/sections/Footer";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { PricingNote } from "./sections/PricingNote";
import { StatsBar } from "./sections/StatsBar";

export const metadata: Metadata = {
  title: "Empleados Digitales IA — Ilaxus",
  description:
    "Catálogo de empleados digitales basados en IA por categoría: ventas, ingeniería, finanzas, marketing y más. Desde $89/mes.",
  alternates: {
    canonical: "https://ilaxus.com/catalogo"
  },
  openGraph: {
    type: "website",
    title: "Empleados Digitales IA — Ilaxus",
    description:
      "Contrata talento IA especializado desde $89/mes. Traders, programadores, analistas y más, operando 24/7.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Navbar activeHref="/catalogo" />
      <Hero />
      <StatsBar />
      <CategoryNav />
      <CatalogGrid />
      <PricingNote />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
