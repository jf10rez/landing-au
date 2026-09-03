"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { isLocale, type Locale } from "@/app/lib/i18n/config";

export default function NotFound() {
  const params = useParams();
  const first = typeof params?.locale === "string" ? params.locale : "";
  const locale: Locale = isLocale(first) ? first : "en";
  const isEs = locale === "es";

  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-bg-base px-6 text-center text-text-primary">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="text-2xl font-bold sm:text-3xl">
        {isEs ? "Página no encontrada" : "Page not found"}
      </h1>
      <p className="max-w-md text-sm text-text-secondary">
        {isEs
          ? "La página que buscas no existe o se ha movido."
          : "The page you're looking for doesn't exist or has been moved."}
      </p>
      <Link
        href={`/${locale}`}
        className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover"
      >
        {isEs ? "Volver al inicio" : "Back home"}
      </Link>
    </section>
  );
}