import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductById, getProductsByStall } from "@/data/products";
import { getStallBySlug, getMarketById } from "@/data/markets";
import { Illustration } from "@/components/ui/Illustration";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductPrice } from "@/components/products/ProductPrice";
import { AvailabilityBadge } from "@/components/products/AvailabilityBadge";
import { ProductGrid } from "@/components/products/ProductGrid";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  return { title: product ? product.name : "Producto" };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const stall = getStallBySlug(product.stallSlug);
  const market = stall ? getMarketById(stall.marketId) : undefined;
  const related = getProductsByStall(product.stallSlug).filter((p) => p.id !== product.id).slice(0, 4);
  const soldOut = product.availability === "agotado";

  return (
    <div className="container page">
      <Link href={`/puestos/${product.stallSlug}`} className="back-link">
        <Icon name="arrowLeft" size={18} />
        {stall?.name ?? "Volver al puesto"}
      </Link>

      <section className="detail">
        <Illustration kind={product.category} className="detail__art" />
        <div className="detail__info">
          <AvailabilityBadge availability={product.availability} />
          <h1>{product.name}</h1>
          <ProductPrice price={product.price} unit={product.unit} large />
          <p>{product.description}</p>
          <dl className="detail__meta">
            <div>
              <dt>Puesto</dt>
              <dd>{stall ? <Link href={`/puestos/${stall.slug}`}>{stall.name}</Link> : "—"}</dd>
            </div>
            <div>
              <dt>Mercado</dt>
              <dd>{market?.name ?? "—"}</dd>
            </div>
          </dl>
          <div className="detail__buy">
            <div className="qty" role="group" aria-label="Cantidad">
              <button type="button" aria-label="Disminuir cantidad" disabled={soldOut}><Icon name="minus" size={18} /></button>
              <output>1</output>
              <button type="button" aria-label="Aumentar cantidad" disabled={soldOut}><Icon name="plus" size={18} /></button>
            </div>
            <Button size="lg" icon="cart" disabled={soldOut}>
              {soldOut ? "No disponible hoy" : "Agregar al carrito"}
            </Button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section" aria-labelledby="relacionados">
          <SectionTitle id="relacionados" title="Más de este puesto" href={`/puestos/${product.stallSlug}`} linkLabel="Ver catálogo" />
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
