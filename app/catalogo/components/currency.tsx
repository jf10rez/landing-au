"use client";

import { useSyncExternalStore } from "react";
import { formatCop, formatUsd, usdFromCop } from "../currency";

type Currency = "COP" | "USD";

const STORAGE_KEY = "ilaxus-currency";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot(): Currency {
  return window.localStorage.getItem(STORAGE_KEY) === "USD" ? "USD" : "COP";
}

function getServerSnapshot(): Currency {
  return "COP";
}

export function useCurrency() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setCurrency(currency: Currency) {
  window.localStorage.setItem(STORAGE_KEY, currency);
  listeners.forEach((listener) => listener());
}

export function Price({
  cop,
  className,
}: {
  cop: number;
  className?: string;
}) {
  const currency = useCurrency();
  const formatted =
    currency === "COP" ? formatCop(cop) : formatUsd(usdFromCop(cop));
  return <span className={className}>{formatted}</span>;
}

export function CurrencyToggle() {
  const currency = useCurrency();
  return (
    <div
      role="group"
      aria-label="Seleccionar moneda"
      className="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-semibold"
    >
      {(["COP", "USD"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setCurrency(option)}
          aria-pressed={currency === option}
          className={
            currency === option
              ? "rounded-full bg-[#ff003c] px-3 py-1 text-black"
              : "rounded-full px-3 py-1 text-white/60 transition hover:text-white"
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}
