import Link from "next/link";
import { ArrowUpRight, Sparkles } from "../components/icons";
import { Price } from "../components/currency";
import { formatCop } from "../currency";
import { categories, customPlan, type Category, type Employee } from "../data";

export function CatalogGrid() {
  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between gap-8">
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-white/50">
            Catálogo
          </div>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            Elige un área. Contrata un empleado.
          </h2>
        </div>
        <div className="hidden max-w-sm text-sm text-white/50 md:block">
          Cada empleado tiene tres planes: <span className="text-white">Starter</span>{" "}
          para probar, <span className="text-white">Pro</span> para producción y{" "}
          <span className="text-white">Custom</span> para agentes a la medida.
        </div>
      </div>

      <div className="space-y-4">
        {categories.map((cat, index) => (
          <DepartmentCard
            key={cat.id}
            category={cat}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

const pad = (n: number) => String(n + 1).padStart(2, "0");

function DepartmentCard({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  const DeptIcon = category.employees[0].icon;
  return (
    <article
      id={category.id}
      className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition hover:bg-[#111] scroll-mt-24 md:flex-row md:items-stretch md:gap-8 md:p-8"
    >
      {/* Columna 1 — Departamento */}
      <div className="flex flex-row items-center gap-4 md:w-[220px] md:shrink-0 md:flex-col md:items-center md:justify-center md:gap-4 md:border-r md:border-white/10 md:pr-8">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[#ff003c]">
          <DeptIcon className="h-5 w-5" />
        </div>
        <div className="md:text-center">
          <div className="font-mono text-sm text-[#ff003c]">{pad(index)}</div>
          <h3 className="mt-1 text-lg font-bold leading-tight tracking-tight">
            {category.name}
          </h3>
        </div>
      </div>

      {/* Columna 2 — Empleados (sub-filas apiladas) + Columna 3 — Conversión por empleado */}
      <div className="flex flex-1 flex-col">
        {category.employees.map((employee, i) => (
          <EmployeeRow
            key={employee.name}
            employee={employee}
            isFirst={i === 0}
            isLast={i === category.employees.length - 1}
            category={category}
          />
        ))}
      </div>
    </article>
  );
}

function EmployeeRow({
  employee,
  category,
  isFirst,
  isLast,
}: {
  employee: Employee;
  category: Category;
  isFirst: boolean;
  isLast: boolean;
}) {
  const Icon = employee.icon;
  return (
    <div
      className={[
        "flex flex-col gap-4 md:flex-row md:items-stretch md:gap-8",
        isFirst ? "md:pt-0" : "md:pt-6 md:border-t md:border-white/10",
        isLast ? "md:pb-0" : "md:pb-6",
      ].join(" ")}
    >
      {/* Columna 2 — Empleado */}
      <div className="relative flex flex-1 flex-col gap-4">
        {employee.featured && (
          <span className="absolute right-0 top-0 rounded-full border border-[#ff003c]/40 bg-[#ff003c]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#ff003c]">
            Popular
          </span>
        )}
        <div className="flex items-center gap-3 md:hidden">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[#ff003c]">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-bold tracking-tight">{employee.name}</h4>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
            {employee.tagline}
          </p>
          {isFirst && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/40">
              {category.description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {employee.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-2">
          <div className="flex flex-wrap items-end gap-x-8 gap-y-2">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#ff003c]">
                <Sparkles className="h-3 w-3" /> Starter
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold tracking-tight text-white">
                  <Price cop={employee.starterPrice} />
                </span>
                <span className="text-xs text-white/50">/mes</span>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Pro
                </span>
                {employee.proBadge && (
                  <span className="rounded-full border border-[#ff003c]/40 bg-[#ff003c]/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#ff003c]">
                    {employee.proBadge}
                  </span>
                )}
              </div>
              <div className="mt-1 flex items-baseline gap-1 text-sm">
                <span className="text-white/50">
                  <Price cop={employee.proPrice} />
                </span>
                <span className="text-white/30">/mes</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                {customPlan.label}
              </div>
              <div className="mt-1 flex items-baseline gap-1 text-sm">
                <span className="text-white/50">{customPlan.value}</span>
              </div>
            </div>
          </div>
          {employee.disclaimer && (
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/40">
              {employee.disclaimer}
            </p>
          )}
        </div>
      </div>

      {/* Columna 3 — Conversión */}
      <div className="flex flex-col gap-4 md:w-[200px] md:shrink-0 md:border-l md:border-white/10 md:pl-8">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-white/50">
            Desde
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight text-white">
              <Price cop={employee.starterPrice} />
            </span>
            <span className="text-sm text-white/50">/mes</span>
          </div>
        </div>
        <Link
          href="/#pricing"
          aria-label={`Contratar a ${employee.name} desde ${formatCop(employee.starterPrice)} COP/mes`}
          className="inline-flex w-full items-center justify-center gap-1 rounded-full bg-[#ff003c] px-4 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
        >
          Contratar
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}