import { Price } from "../components/currency";

const stats = [
  { value: <Price cop={9900} />, label: "precio de entrada" },
  { value: "24/7", label: "operativos" },
  { value: "60s", label: "de despliegue" },
  { value: "7", label: "áreas cubiertas" },
];

export function StatsBar() {
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
