import { getCategories } from "../data";
import { CurrencyToggle } from "../components/currency";
import type { Messages } from "@/app/lib/i18n/dictionaries";

export function CategoryNav({ dict }: { dict: Messages }) {
  const categories = getCategories(dict);
  return (
    <section className="border-b border-white/5 bg-[#080808]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-6">
        <span className="mr-2 self-center text-xs uppercase tracking-[0.18em] text-white/40">
          {dict.catalog.categoryNavLabel}
        </span>
        {categories.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 transition hover:border-[#ff003c]/40 hover:text-white"
          >
            {c.name}
          </a>
        ))}
        <div className="ml-auto">
          <CurrencyToggle label={dict.catalog.currencyLabel} />
        </div>
      </div>
    </section>
  );
}