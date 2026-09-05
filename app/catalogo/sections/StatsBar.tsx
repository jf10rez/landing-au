import { Price } from "../components/currency";
import type { Messages } from "@/app/lib/i18n/dictionaries";

export function StatsBar({ dict }: { dict: Messages }) {
  const labels = dict.catalog.stats.labels;
  const stats = [
    { value: <Price cop={9900} />, label: labels[0] },
    { value: "24/7", label: labels[1] },
    { value: "60s", label: labels[2] },
    { value: "8", label: labels[3] },
  ];

  return (
    <section className="border-b border-white/5">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-white/5 md:grid-cols-4 md:divide-x">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-8">
            <div className="text-3xl font-bold tracking-tight md:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}