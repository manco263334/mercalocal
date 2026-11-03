import type { Metadata } from "next";
import Link from "next/link";
import { PanelShell } from "@/components/layout/PanelShell";
import { panelNav } from "@/components/layout/navItems";
import { StatCard } from "@/components/ui/StatCard";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Illustration } from "@/components/ui/Illustration";
import { OrderStatusBadge } from "@/components/orders/OrderStatusBadge";
import { AvailabilityBadge } from "@/components/products/AvailabilityBadge";
import { panelMetrics, panelOrders, panelStallSlug } from "@/data/dashboard";
import { getStallBySlug, getMarketById } from "@/data/markets";
import { getProductsByStall } from "@/data/products";
import { formatPrice, unitLabels } from "@/lib/format";
import type { PanelOrder } from "@/types/order";

export const metadata: Metadata = { title: "Panel del locatario" };

const columns: Column<PanelOrder>[] = [
  { header: "Pedido", cell: (o) => <span className="strong">{o.number}</span> },
  { header: "Cliente", cell: (o) => o.customer },
  { header: "Artículos", cell: (o) => o.itemsCount },
  { header: "Recogida", cell: (o) => o.pickupSlot },
  { header: "Estado", cell: (o) => <OrderStatusBadge status={o.status} /> },
  { header: "Importe", align: "right", cell: (o) => formatPrice(o.total) },
];

export default function StallPanelPage() {
  const stall = getStallBySlug(panelStallSlug);
  const market = stall ? getMarketById(stall.marketId) : undefined;
  const catalog = getProductsByStall(panelStallSlug);

  return (
    <PanelShell role="Locatario" navLabel="Panel del locatario" nav={panelNav}>
      <header className="panel-head">
        <Illustration kind="Frutas" className="panel-head__art" />
        <div>
          <h1>{stall?.name}</h1>
          <p className="muted">{market?.name} · Horario {stall?.hours}</p>
        </div>
        <Badge tone="green">Abierto ahora</Badge>
      </header>

      <section aria-labelledby="resumen-dia">
        <SectionTitle id="resumen-dia" title="Resumen del día" description="Viernes 23 de octubre" />
        <div className="grid grid--stats">
          {panelMetrics.map((metric) => (
            <StatCard key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      <div className="quick">
        <Link href="/panel#catalogo" className="card quick__item"><Icon name="box" size={22} />Catálogo<Icon name="chevronRight" size={16} /></Link>
        <Link href="/panel#pedidos" className="card quick__item"><Icon name="receipt" size={22} />Pedidos<Icon name="chevronRight" size={16} /></Link>
      </div>

      <section id="pedidos" className="panel-section" aria-labelledby="pedidos-recientes">
        <SectionTitle id="pedidos-recientes" title="Pedidos recientes" />
        <DataTable caption="Pedidos recientes del puesto" columns={columns} rows={panelOrders} rowKey={(o) => o.number} />
      </section>

      <section id="catalogo" className="panel-section" aria-labelledby="catalogo-panel">
        <SectionTitle id="catalogo-panel" title="Productos del puesto" description="Disponibilidad de hoy" />
        <ul className="product-rows">
          {catalog.map((product) => (
            <li key={product.id} className="card product-row">
              <Illustration kind={product.category} className="product-row__art" />
              <div className="product-row__info">
                <h3>{product.name}</h3>
                <p className="muted">{formatPrice(product.price)} por {unitLabels[product.unit].long}</p>
              </div>
              <AvailabilityBadge availability={product.availability} />
            </li>
          ))}
        </ul>
        <div className="panel-actions"><Button variant="secondary" icon="plus">Agregar producto</Button></div>
      </section>
    </PanelShell>
  );
}
