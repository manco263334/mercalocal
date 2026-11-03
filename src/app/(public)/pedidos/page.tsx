import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { OrderCard } from "@/components/orders/OrderCard";
import { OrderStatusBadge } from "@/components/orders/OrderStatusBadge";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { orders } from "@/data/orders";
import type { OrderStatus } from "@/types/order";

export const metadata: Metadata = { title: "Mis pedidos" };

const statuses: OrderStatus[] = ["pendiente", "confirmado", "preparacion", "listo"];

export default function OrdersPage() {
  return (
    <div className="container page">
      <PageHeader title="Mis pedidos" description="Sigue el estado de tus pedidos y revisa a qué hora recogerlos." />
      <ul className="status-summary" aria-label="Resumen por estado">
        {statuses.map((status) => (
          <li key={status} className="card status-summary__item">
            <span className="status-summary__count">{orders.filter((o) => o.status === status).length}</span>
            <OrderStatusBadge status={status} />
          </li>
        ))}
      </ul>
      <div className="grid grid--orders">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>

      <section className="section" aria-labelledby="sin-pedidos">
        <SectionTitle id="sin-pedidos" title="Estado: sin pedidos" description="Así se verá cuando aún no hayas hecho ninguno." />
        <EmptyState icon="receipt" title="Todavía no tienes pedidos" description="Cuando hagas tu primer pedido aparecerá aquí con su estado." actionLabel="Explorar mercados" actionHref="/mercados" />
      </section>
    </div>
  );
}
