import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/app/sections/Navbar";
import { CategoryNav } from "@/app/catalogo/sections/CategoryNav";
import { CatalogGrid } from "@/app/catalogo/sections/CatalogGrid";
import { CTA } from "@/app/catalogo/sections/CTA";
import { Footer } from "@/app/sections/Footer";
import { Hero } from "@/app/catalogo/sections/Hero";
import { HowItWorks } from "@/app/catalogo/sections/HowItWorks";
import { PricingNote } from "@/app/catalogo/sections/PricingNote";
import { StatsBar } from "@/app/catalogo/sections/StatsBar";
import { isLocale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/dictionaries";
import {
  SITE_URL,
  canonicalPath,
  languagesFor,
} from "@/app/lib/i18n/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const dict = getDictionary(locale);
  const ogLocale = locale === "en" ? "en_US" : "es_ES";
  const languages = languagesFor("/catalogo");

  return {
    title: dict.meta.catalog.title,
    description: dict.meta.catalog.description,
    alternates: {
      canonical: canonicalPath(locale, "/catalogo"),
      languages,
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: `${SITE_URL}/${locale}/catalogo`,
      siteName: "Ilaxus",
      title: dict.meta.catalog.ogTitle,
      description: dict.meta.catalog.ogDescription,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: dict.meta.catalog.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function CatalogoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Navbar locale={locale} t={dict.nav} activeHref={`/${locale}/catalogo`} />
      <Hero dict={dict} />
      <StatsBar dict={dict} />
      <CategoryNav dict={dict} />
      <CatalogGrid locale={locale} dict={dict} />
      <PricingNote locale={locale} dict={dict} />
      <HowItWorks dict={dict} />
      <CTA locale={locale} dict={dict} />
      <Footer locale={locale} dict={dict} />
    </div>
  );
}