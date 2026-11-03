import type { SaleUnit } from "@/types/product";

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});

export function formatPrice(value: number): string {
  return currency.format(value);
}

export const unitLabels: Record<SaleUnit, { short: string; long: string }> = {
  kg: { short: "kg", long: "kilogramo" },
  pieza: { short: "pza", long: "pieza" },
  manojo: { short: "manojo", long: "manojo" },
  litro: { short: "L", long: "litro" },
  docena: { short: "doc", long: "docena" },
  paquete: { short: "paq", long: "paquete" },
};
