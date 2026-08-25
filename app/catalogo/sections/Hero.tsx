import { ArrowUpRight } from "../components/icons";
import { Price } from "../components/currency";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(600px 400px at 80% 0%, rgba(255,0,60,0.25), transparent 60%), radial-gradient(500px 500px at 10% 20%, rgba(255,0,60,0.12), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-40">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff003c]" />
          Empleados IA · desde <Price cop={9900} />/mes
        </div>
        <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
          Contrata un empleado IA{" "}
          <span className="text-[#ff003c]">por menos que un café al día</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
          Catálogo de agentes especializados organizados por área. Arranca con
          el plan <span className="text-white">Starter desde <Price cop={9900} />/mes</span> y
          escala a Pro o Custom cuando lo necesites. Sin contratos, sin setup
          fee. Precios en COP o USD.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#catalogo"
            className="inline-flex items-center gap-2 rounded-full bg-[#ff003c] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
          >
            Ver catálogo <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#como"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/5"
          >
            Cómo trabajan
          </a>
        </div>
      </div>
    </section>
  );
}
