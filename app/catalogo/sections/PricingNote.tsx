import Link from "next/link";
import { ArrowUpRight, Sparkles } from "../components/icons";
import { Price } from "../components/currency";
import { TRM_LABEL } from "../currency";
import { localizedHref, format } from "@/app/lib/i18n/utils";
import type { Locale } from "@/app/lib/i18n/config";
import type { Messages } from "@/app/lib/i18n/dictionaries";

export function PricingNote({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Messages;
}) {
  const t = dict.catalog.pricingNote;
  const customPlan = dict.catalog.custom;
  const perMonth = dict.catalog.perMonth;

  return (
    <section className="border-y border-white/5 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-[#ff003c]/30 bg-gradient-to-br from-[#ff003c]/10 to-transparent p-8">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#ff003c]">
              <Sparkles className="h-3.5 w-3.5" /> {t.starter.title}
            </div>
            <div className="mt-3 text-4xl font-bold tracking-tight">
              {t.starter.from}
              <Price cop={9900} />
              {perMonth}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {t.starter.description}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
              {t.pro.title}
            </div>
            <div className="mt-3 text-4xl font-bold tracking-tight">
              {t.pro.from}
              <Price cop={49900} />
              {perMonth}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {t.pro.description}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
              {t.custom.title}
            </div>
            <div className="mt-3 text-4xl font-bold tracking-tight">
              {customPlan.value}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {customPlan.description}
            </p>
            <Link
              href={localizedHref(locale, "/#pricing")}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#ff003c] transition hover:brightness-110"
            >
              {t.bookCall} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/40">
          {format(t.note, { trm: TRM_LABEL })}
        </p>
      </div>
    </section>
  );
}