import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stalls, getStallBySlug, getMarketById } from "@/data/markets";
import { getProductsByStall } from "@/data/products";
import { Illustration } from "@/components/ui/Illustration";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Input";
import { FilterChips } from "@/components/ui/FilterChips";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { EmptyState } from "@/components/ui/EmptyState";
import Link from "next/link";
import { ProductGrid } from "@/components/products/ProductGrid";

interface StallPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return stalls.map((stall) => ({ slug: stall.slug }));
}

export async function generateMetadata({ params }: StallPageProps): Promise<Metadata> {
  const { slug } = await params;
  const stall = getStallBySlug(slug);
  return { title: stall ? stall.name : "Puesto" };
}

export default async function StallPage({ params }: StallPageProps) {
  const { slug } = await params;
  const stall = getStallBySlug(slug);
  if (!stall) notFound();

  const market = getMarketById(stall.marketId);
  const stallProducts = getProductsByStall(stall.slug);
  const sections = ["Todos", ...Array.from(new Set(stallProducts.map((p) => p.section)))];

  return (
    <div className="container page">
      <Link href="/mercados" className="back-link">
        <Icon name="arrowLeft" size={18} />
        Mercados
      </Link>
      <section className="stall-hero" aria-labelledby="puesto-nombre">
        <Illustration kind={stall.category} className="stall-hero__art" />
        <div className="stall-hero__info">
          <div className="tags">
            <Badge tone="green">{stall.category}</Badge>
            {stall.openNow ? <Badge tone="green">Abierto ahora</Badge> : <Badge tone="gray">Cerrado por hoy</Badge>}
          </div>
          <h1 id="puesto-nombre">{stall.name}</h1>
          <p className="muted stall-hero__line"><Icon name="pin" size={16} />{market?.name ?? "Mercado"}</p>
          <p className="muted stall-hero__line"><Icon name="clock" size={16} />Horario: {stall.hours}</p>
          <p>{stall.description}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="catalogo-titulo">
        <SectionTitle id="catalogo-titulo" title="Catálogo" description={`${stallProducts.length} productos del día`} />
        <div className="toolbar">
          <Input id="busqueda-productos" label="Buscar producto" hideLabel icon="search" type="search" placeholder="Busca en este puesto" />
          <FilterChips label="Categorías del puesto" options={sections} active="Todos" />
        </div>
        {stallProducts.length > 0 ? (
          <ProductGrid products={stallProducts} />
        ) : (
          <EmptyState icon="box" title="Este puesto aún no publica productos" description="Vuelve pronto para ver su catálogo del día." />
        )}
      </section>
    </div>
  );
}
