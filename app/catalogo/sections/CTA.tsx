import Link from "next/link";
import { ArrowUpRight, Sparkles } from "../components/icons";
import { Price } from "../components/currency";
import { localizedHref } from "@/app/lib/i18n/utils";
import type { Locale } from "@/app/lib/i18n/config";
import type { Messages } from "@/app/lib/i18n/dictionaries";

export function CTA({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Messages;
}) {
  const t = dict.catalog.cta;
  const perMonth = dict.catalog.perMonth;

  return (
    <section id="contratar" className="mx-auto max-w-7xl px-6 py-28">
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff003c]/40 bg-[#ff003c]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff003c]">
            <Sparkles className="h-3 w-3" /> {t.badge}
            <Price cop={9900} />
            {perMonth}
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-white/60 md:text-lg">
            {t.descriptionStart}
            <Price cop={9900} />
            {perMonth}
            {t.descriptionEnd}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localizedHref(locale, "/#pricing")}
              className="inline-flex items-center gap-2 rounded-full bg-[#ff003c] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            >
              {t.start} <Price cop={9900} />{" "}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/5"
            >
              {t.back}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}