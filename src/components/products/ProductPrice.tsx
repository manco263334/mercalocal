import { formatPrice, unitLabels } from "@/lib/format";
import type { SaleUnit } from "@/types/product";

export function ProductPrice({ price, unit, large }: { price: number; unit: SaleUnit; large?: boolean }) {
  return (
    <p className={`price${large ? " price--large" : ""}`}>
      <span className="price__amount">{formatPrice(price)}</span>
      <span className="price__unit">por {unitLabels[unit].long}</span>
    </p>
  );
}
