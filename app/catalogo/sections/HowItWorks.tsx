import type { Messages } from "@/app/lib/i18n/dictionaries";

export function HowItWorks({ dict }: { dict: Messages }) {
  const t = dict.catalog.howItWorks;
  return (
    <section id="como" className="border-y border-white/5 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-white/50">
            {t.eyebrow}
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            {t.title}
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s) => (
            <div key={s.n} className="bg-[#080808] p-8">
              <div className="font-mono text-sm text-[#ff003c]">{s.n}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}