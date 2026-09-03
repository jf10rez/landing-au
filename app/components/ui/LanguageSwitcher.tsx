"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, locales, type Locale } from "@/app/lib/i18n/config";
import { cn } from "@/app/lib/utils";

export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0] ?? "")) segments.shift();
  const rest = segments.length > 0 ? `/${segments.join("/")}` : "";

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 text-[11px] font-semibold",
        className
      )}
    >
      {locales.map((option) => {
        const isActive = option === locale;
        return (
          <Link
            key={option}
            href={`/${option}${rest}`}
            rel="alternate"
            className={cn(
              "rounded-full px-2 py-1 transition",
              isActive
                ? "bg-[#ff003c] text-black"
                : "text-white/60 hover:text-white"
            )}
            aria-current={isActive ? "true" : undefined}
            title={option === "en" ? "English" : "Español"}
          >
            {option.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}