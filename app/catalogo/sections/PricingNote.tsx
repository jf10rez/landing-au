import { Sparkles } from "../components/icons";

export function PricingNote() {
  return (
    <section className="border-y border-white/5 bg-[#080808]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2">
        <div className="rounded-2xl border border-[#ff003c]/30 bg-gradient-to-br from-[#ff003c]/10 to-transparent p-8">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#ff003c]">
            <Sparkles className="h-3.5 w-3.5" /> Plan Starter
          </div>
          <div className="mt-3 text-4xl font-bold tracking-tight">Desde $89/mes</div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Ideal para arrancar. Un empleado, un canal, hasta 500 tareas al mes.
            Cero setup, cancela cuando quieras.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
            Plan Pro
          </div>
          <div className="mt-3 text-4xl font-bold tracking-tight">Desde $229/mes</div>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Volumen ilimitado, integraciones custom con tu stack, prioridad de
            soporte y modelos avanzados. Para operación seria.
          </p>
        </div>
      </div>
    </section>
  );
}
