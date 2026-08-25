export const COP_PER_USD = 3056.51;

export const TRM_LABEL = "$3.056,51";

export function usdFromCop(cop: number): number {
  return Math.round(cop / COP_PER_USD);
}

export function formatCop(value: number): string {
  return `$${value.toLocaleString("es-CO")}`;
}

export function formatUsd(value: number): string {
  return `$${value.toLocaleString("en-US")}`;
}
