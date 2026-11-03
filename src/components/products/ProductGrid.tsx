import type { Product } from "@/types/product";
import { getStallBySlug } from "@/data/markets";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  showStall?: boolean;
}

export function ProductGrid({ products, showStall }: ProductGridProps) {
  return (
    <div className="grid grid--products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          stallName={showStall ? getStallBySlug(product.stallSlug)?.name : undefined}
        />
      ))}
    </div>
  );
}
