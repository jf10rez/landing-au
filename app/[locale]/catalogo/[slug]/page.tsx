import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/app/sections/Navbar";
import { Footer } from "@/app/sections/Footer";
import { ArrowUpRight, Sparkles } from "@/app/catalogo/components/icons";
import { CurrencyToggle, Price } from "@/app/catalogo/components/currency";
import { TRM_LABEL, formatUsd, usdFromCop } from "@/app/catalogo/currency";
import {
  allEmployeeSlugs,
  findCategory,
  findEmployee,
  getCategories,
} from "@/app/catalogo/data";
import { whatsappHref } from "@/app/catalogo/whatsapp";
import { isLocale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/dictionaries";
import {
  SITE_URL,
  canonicalPath,
  format,
  languagesFor,
} from "@/app/lib/i18n/utils";

export function generateStaticParams() {
  // Slugs are identical across locales; the parent [locale] segment
  // generates each language separately.
  return allEmployeeSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const dict = getDictionary(locale);
  const employee = findEmployee(getCategories(dict), slug);
  if (!employee) return {};

  const starterPrice = `${formatUsd(usdFromCop(employee.starterPrice))} USD`;
  const description = `${employee.tagline} ${format(
    dict.employeePage.metaStarter,
    { price: starterPrice },
  )}`;
  const ogLocale = locale === "en" ? "en_US" : "es_ES";
  const path = `/catalogo/${employee.slug}`;

  return {
    title: `${employee.name} — Ilaxus`,
    description,
    alternates: {
      canonical: canonicalPath(locale, path),
      languages: languagesFor(path),
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: `${SITE_URL}/${locale}/catalogo/${employee.slug}`,
      siteName: "Ilaxus",
      title: `${employee.name} — Ilaxus`,
      description: employee.tagline,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function EmployeePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const t = dict.employeePage;
  const catalogT = dict.catalog;
  const categories = getCategories(dict);

  const employee = findEmployee(categories, slug);
  if (!employee) notFound();

  const category = findCategory(categories, employee);
  const Icon = employee.icon;
  const customPlan = dict.catalog.custom;
  const customFeatures = dict.catalog.custom.features;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Navbar locale={locale} t={dict.nav} activeHref={`/${locale}/catalogo`} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(600px 400px at 80% 0%, rgba(255,0,60,0.25), transparent 60%), radial-gradient(500px 500px at 10% 20%, rgba(255,0,60,0.12), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32">
          <nav
            aria-label={t.breadcrumbAria}
            className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/50"
          >
            <Link href={`/${locale}`} className="transition hover:text-white">
              {t.breadcrumbHome}
            </Link>
            <span aria-hidden>/</span>
            <Link
              href={`/${locale}/catalogo`}
              className="transition hover:text-white"
            >
              {t.breadcrumbCatalog}
            </Link>
            <span aria-hidden>/</span>
            {category && (
              <>
                <Link
                  href={`/${locale}/catalogo#${category.id}`}
                  className="transition hover:text-white"
                >
                  {category.name}
                </Link>
                <span aria-hidden>/</span>
              </>
            )}
            <span className="text-white/80">{employee.name}</span>
          </nav>

          <div className="grid gap-10 md:grid-cols-[1fr_360px] md:items-start">
            <div>
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[#ff003c]">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-sm uppercase tracking-wider text-[#ff003c]">
                  {category?.name}
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                {employee.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
                {employee.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-1.5">
                {employee.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Tarjeta de precio */}
            <div className="rounded-2xl border border-[#ff003c]/30 bg-gradient-to-br from-[#ff003c]/10 to-transparent p-6">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-[#ff003c]">
                {t.from}
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">
                  <Price cop={employee.starterPrice} />
                </span>
                <span className="text-sm text-white/50">{t.perMonth}</span>
              </div>
              <p className="mt-2 text-xs text-white/50">{t.noContract}</p>
              <a
                href={whatsappHref(locale, employee.name, "Starter")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-1 rounded-full bg-[#ff003c] px-4 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
              >
                {t.hire} <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="mt-4 flex justify-center">
                <CurrencyToggle label={catalogT.currencyLabel} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.18em] text-white/50">
              {t.whatItDoes}
            </div>
            <p className="max-w-3xl text-lg leading-relaxed text-white/70">
              {employee.description}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-white/50">
              {t.idealFor}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {employee.idealFor}
            </p>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="border-y border-white/5 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.18em] text-white/50">
                {t.plans}
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {t.plansTitle}
              </h2>
            </div>
            <CurrencyToggle label={catalogT.currencyLabel} />
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#ff003c]/30 bg-gradient-to-br from-[#ff003c]/10 to-transparent p-8">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#ff003c]">
                <Sparkles className="h-3.5 w-3.5" /> {catalogT.grid.planStarter}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  <Price cop={employee.starterPrice} />
                </span>
                <span className="text-sm text-white/50">{t.perMonth}</span>
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {employee.starterFeatures.map((feature) => (
                  <FeatureItem key={feature}>{feature}</FeatureItem>
                ))}
              </ul>
              {employee.disclaimer && (
                <p className="mt-6 text-xs leading-relaxed text-white/40">
                  {employee.disclaimer}
                </p>
              )}
              <a
                href={whatsappHref(locale, employee.name, "Starter")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-1 rounded-full bg-[#ff003c] px-4 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
              >
                {t.startStarter}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                  {catalogT.grid.planPro}
                </span>
                {employee.proBadge && (
                  <span className="rounded-full border border-[#ff003c]/40 bg-[#ff003c]/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#ff003c]">
                    {employee.proBadge}
                  </span>
                )}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  <Price cop={employee.proPrice} />
                </span>
                <span className="text-sm text-white/50">{t.perMonth}</span>
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {employee.proFeatures.map((feature) => (
                  <FeatureItem key={feature}>{feature}</FeatureItem>
                ))}
              </ul>
              <a
                href={whatsappHref(locale, employee.name, "Pro")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-1 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/5"
              >
                {t.startPro}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                {customPlan.label}
              </div>
              <div className="mt-3 text-4xl font-bold tracking-tight">
                {customPlan.value}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {customPlan.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {customFeatures.map((feature) => (
                  <FeatureItem key={feature}>{feature}</FeatureItem>
                ))}
              </ul>
              <Link
                href={`/${locale}/#pricing`}
                className="mt-8 inline-flex w-full items-center justify-center gap-1 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/5"
              >
                {t.bookCall}
              </Link>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/40">
            {format(t.note, { trm: TRM_LABEL })}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#141414] to-[#0a0a0a] p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,0,60,0.35), transparent 60%)",
            }}
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              {format(t.ctaTitle, { name: employee.name })}
            </h2>
            <p className="mt-4 text-white/60 md:text-lg">{t.ctaDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappHref(locale, employee.name, "Starter")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff003c] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                {t.startWith}
                <Price cop={employee.starterPrice} />
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href={`/${locale}/catalogo`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/5"
              >
                {t.viewOthers}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} dict={dict} />
    </div>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm">
      <svg
        className="mt-0.5 h-4 w-4 shrink-0 text-[#ff003c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span className="text-white/70">{children}</span>
    </li>
  );
}