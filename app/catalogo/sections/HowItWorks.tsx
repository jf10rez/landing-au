const steps = [
  {
    n: "01",
    t: "Elige el área",
    d: "Ventas, ingeniería, finanzas, operaciones o creativo. Selecciona los roles que te faltan.",
  },
  {
    n: "02",
    t: "Arranca con Starter",
    d: "Desde $89/mes por empleado. Sin contratos, sin setup, activo en 60 segundos.",
  },
  {
    n: "03",
    t: "Escala a Pro",
    d: "Cuando validas el ROI, sube al plan Pro con volumen ilimitado e integraciones a medida.",
  },
];

export function HowItWorks() {
  return (
    <section id="como" className="border-y border-white/5 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-white/50">
            Proceso
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Prueba barato. Escala cuando funcione.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {steps.map((s) => (
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
