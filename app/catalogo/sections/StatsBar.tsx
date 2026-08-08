const stats = [
  ["$89", "precio de entrada"],
  ["24/7", "operativos"],
  ["60s", "de despliegue"],
  ["5", "áreas cubiertas"],
];

export function StatsBar() {
  return (
    <section className="border-b border-white/5">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-white/5 md:grid-cols-4 md:divide-x">
        {stats.map(([n, l]) => (
          <div key={l} className="px-6 py-8">
            <div className="text-3xl font-bold tracking-tight md:text-4xl">{n}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
