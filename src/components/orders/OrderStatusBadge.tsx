import type { OrderStatus } from "@/types/order";
import { Badge, type BadgeTone } from "@/components/ui/Badge";

export const orderStatusConfig: Record<OrderStatus, { label: string; tone: BadgeTone; step: number }> = {
  pendiente: { label: "Pendiente", tone: "yellow", step: 1 },
  confirmado: { label: "Confirmado", tone: "blue", step: 2 },
  preparacion: { label: "En preparación", tone: "purple", step: 3 },
  listo: { label: "Listo para recoger", tone: "green", step: 4 },
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const { label, tone } = orderStatusConfig[status];
  return <Badge tone={tone}>{label}</Badge>;
}
