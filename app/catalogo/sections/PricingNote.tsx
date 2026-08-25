import Link from "next/link";
import { ArrowUpRight, Sparkles } from "../components/icons";
import { Price } from "../components/currency";
import { TRM_LABEL } from "../currency";
import { customPlan } from "../data";

export function PricingNote() {
  return (
    <section className="border-y border-white/5 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-[#ff003c]/30 bg-gradient-to-br from-[#ff003c]/10 to-transparent p-8">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#ff003c]">
              <Sparkles className="h-3.5 w-3.5" /> Plan Starter
            </div>
            <div className="mt-3 text-4xl font-bold tracking-tight">
              Desde <Price cop={9900} />/mes
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Ideal para arrancar. El Agente Autoconfigurable es el punto de
              entrada más bajo del catálogo. Cero setup, cancela cuando
              quieras.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
              Plan Pro
            </div>
            <div className="mt-3 text-4xl font-bold tracking-tight">
              Desde <Price cop={49900} />/mes
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Volumen ilimitado, integraciones custom con tu stack, prioridad
              de soporte y modelos avanzados. Mucho más capacidad por menos de
              2× el precio del Starter.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
              Plan {customPlan.label}
            </div>
            <div className="mt-3 text-4xl font-bold tracking-tight">
              {customPlan.value}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {customPlan.description}
            </p>
            <Link
              href="/#pricing"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#ff003c] transition hover:brightness-110"
            >
              Agendar llamada <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/40">
          Precios en COP. Convierte a USD con el selector de moneda — cálculo
          según TRM vigente ({TRM_LABEL}).
        </p>
      </div>
    </section>
  );
}
