import type { Order } from "@/types/order";
import { getStallBySlug } from "@/data/markets";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/ui/Icon";
import { OrderStatusBadge, orderStatusConfig } from "./OrderStatusBadge";

export function OrderCard({ order }: { order: Order }) {
  const stall = getStallBySlug(order.stallSlug);
  const step = orderStatusConfig[order.status].step;
  const summary = order.items
    .map((item) => `${item.quantity} × ${getProductById(item.productId)?.name ?? "Producto"}`)
    .join(", ");

  return (
    <article className="card order-card">
      <div className="order-card__top">
        <div>
          <p className="order-card__number">Pedido {order.number}</p>
          <h3>{stall?.name ?? "Puesto"}</h3>
        </div>
        <OrderStatusBadge status={order.status} />
      </div>
      <p className="muted">{summary}</p>
      <ol className="steps-bar" aria-label={`Avance del pedido: paso ${step} de 4`}>
        {[1, 2, 3, 4].map((n) => (
          <li key={n} className={n <= step ? "is-done" : undefined} />
        ))}
      </ol>
      <dl className="order-card__meta">
        <div>
          <dt><Icon name="receipt" size={16} /> Fecha</dt>
          <dd>{order.dateLabel}</dd>
        </div>
        <div>
          <dt><Icon name="clock" size={16} /> Recogida</dt>
          <dd>{order.pickupSlot}</dd>
        </div>
        <div>
          <dt>Importe</dt>
          <dd className="strong">{formatPrice(order.total)}</dd>
        </div>
      </dl>
    </article>
  );
}
