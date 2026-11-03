import Link from "next/link";
import type { Product } from "@/types/product";
import { Illustration } from "@/components/ui/Illustration";
import { Button } from "@/components/ui/Button";
import { ProductPrice } from "./ProductPrice";
import { AvailabilityBadge } from "./AvailabilityBadge";

interface ProductCardProps {
  product: Product;
  stallName?: string;
}

export function ProductCard({ product, stallName }: ProductCardProps) {
  return (
    <article className="card product-card">
      <Link href={`/productos/${product.id}`} className="product-card__media" aria-label={`Ver ${product.name}`}>
        <Illustration kind={product.category} />
      </Link>
      <div className="product-card__body">
        <AvailabilityBadge availability={product.availability} />
        <h3>
          <Link href={`/productos/${product.id}`}>{product.name}</Link>
        </h3>
        {stallName && <p className="muted">{stallName}</p>}
        <ProductPrice price={product.price} unit={product.unit} />
        <Button icon="plus" size="sm" fullWidth disabled={product.availability === "agotado"}>
          Agregar
        </Button>
      </div>
    </article>
  );
}
