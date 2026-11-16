import type { CartLine, Order, OrderItem } from "@/types/order";
import { getProductById } from "./products";

function sumItems(items: OrderItem[]): number {
  return items.reduce(
    (acc, item) => acc + (getProductById(item.productId)?.price ?? 0) * item.quantity,
    0,
  );
}

function makeOrder(base: Omit<Order, "total">): Order {
  return { ...base, total: sumItems(base.items) };
}

export const orders: Order[] = [
  makeOrder({ id: "o1", number: "MLO-2410", stallSlug: "frutas-dona-chela", dateLabel: "Hoy, 23 oct", pickupSlot: "5:00 – 5:30 pm", status: "pendiente", items: [{ productId: "p101", quantity: 2 }, { productId: "p103", quantity: 1 }] }),
  makeOrder({ id: "o2", number: "MLO-2409", stallSlug: "tortilleria-la-rosa", dateLabel: "Hoy, 23 oct", pickupSlot: "6:00 – 6:30 pm", status: "confirmado", items: [{ productId: "p501", quantity: 2 }, { productId: "p502", quantity: 1 }] }),
  makeOrder({ id: "o3", number: "MLO-2408", stallSlug: "pescados-el-marino", dateLabel: "Hoy, 23 oct", pickupSlot: "11:00 – 11:30 am", status: "preparacion", items: [{ productId: "p401", quantity: 1 }, { productId: "p403", quantity: 2 }] }),
  makeOrder({ id: "o4", number: "MLO-2407", stallSlug: "hortalizas-don-memo", dateLabel: "Ayer, 22 oct", pickupSlot: "9:00 – 9:30 am", status: "listo", items: [{ productId: "p201", quantity: 2 }, { productId: "p202", quantity: 3 }] }),
];

const cartItems: OrderItem[] = [
  { productId: "p101", quantity: 2 },
  { productId: "p102", quantity: 1 },
  { productId: "p104", quantity: 1 },
];

export const cartLines: CartLine[] = cartItems.map((item) => ({
  ...item,
  amount: sumItems([item]),
}));

export const cartStallSlug = "frutas-dona-chela";
export const cartTotal = cartLines.reduce((acc, line) => acc + line.amount, 0);

export const pickupSlots = [
  "5:00 – 5:30 pm",
  "5:30 – 6:00 pm",
  "6:00 – 6:30 pm",
];
