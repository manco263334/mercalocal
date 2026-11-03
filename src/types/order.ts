export type OrderStatus = "pendiente" | "confirmado" | "preparacion" | "listo";

export interface OrderItem {
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  number: string;
  stallSlug: string;
  dateLabel: string;
  pickupSlot: string;
  status: OrderStatus;
  items: OrderItem[];
  total: number;
}

export interface CartLine {
  productId: string;
  quantity: number;
  amount: number;
}

export interface PanelOrder {
  number: string;
  customer: string;
  itemsCount: number;
  total: number;
  pickupSlot: string;
  status: OrderStatus;
}
