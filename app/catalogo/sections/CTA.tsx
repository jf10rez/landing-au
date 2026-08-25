import Link from "next/link";
import { ArrowUpRight, Sparkles } from "../components/icons";
import { Price } from "../components/currency";

export function CTA() {
  return (
    <section id="contratar" className="mx-auto max-w-7xl px-6 py-28">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#141414] to-[#0a0a0a] p-10 md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,0,60,0.35), transparent 60%)",
          }}
        />
        <div className="relative max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff003c]/40 bg-[#ff003c]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff003c]">
            <Sparkles className="h-3 w-3" /> Starter desde <Price cop={9900} />/mes
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Arma tu equipo digital hoy.
          </h2>
          <p className="mt-4 text-white/60 md:text-lg">
            Empieza con un agente por <Price cop={9900} />/mes. Si funciona,
            escalas a Pro o sumas más roles. Si no, cancelas sin costo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff003c] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Empezar por <Price cop={9900} /> <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/5"
            >
              Volver al catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
