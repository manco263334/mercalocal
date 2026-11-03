import type { IconName } from "@/types/navigation";
import type { StallStatus } from "@/types/market";
import type { PanelOrder } from "@/types/order";

export interface Metric {
  label: string;
  value: string;
  hint: string;
  icon: IconName;
  tone: "green" | "yellow" | "blue" | "purple";
}

export const panelStallSlug = "frutas-dona-chela";

export const panelMetrics: Metric[] = [
  { label: "Pedidos pendientes", value: "4", hint: "Esperan confirmación", icon: "bell", tone: "yellow" },
  { label: "En preparación", value: "3", hint: "Se recogen hoy", icon: "box", tone: "purple" },
  { label: "Listos para recoger", value: "2", hint: "Clientes por llegar", icon: "check", tone: "green" },
  { label: "Ventas estimadas", value: "$1,860", hint: "Pagos al recoger", icon: "chart", tone: "blue" },
];

export const panelOrders: PanelOrder[] = [
  { number: "MLO-2410", customer: "Mariana L.", itemsCount: 3, total: 164, pickupSlot: "5:00 – 5:30 pm", status: "pendiente" },
  { number: "MLO-2406", customer: "Carlos R.", itemsCount: 5, total: 248, pickupSlot: "4:30 – 5:00 pm", status: "pendiente" },
  { number: "MLO-2404", customer: "Ana P.", itemsCount: 2, total: 96, pickupSlot: "1:00 – 1:30 pm", status: "preparacion" },
  { number: "MLO-2402", customer: "Luis G.", itemsCount: 4, total: 212, pickupSlot: "12:30 – 1:00 pm", status: "listo" },
  { number: "MLO-2399", customer: "Sofía M.", itemsCount: 1, total: 38, pickupSlot: "11:30 am – 12:00 pm", status: "confirmado" },
];

export const adminMetrics: Metric[] = [
  { label: "Mercados", value: "3", hint: "Registrados", icon: "store", tone: "green" },
  { label: "Puestos", value: "106", hint: "98 activos", icon: "grid", tone: "blue" },
  { label: "Pedidos hoy", value: "214", hint: "+12% vs. ayer", icon: "receipt", tone: "yellow" },
  { label: "Compradores", value: "1,320", hint: "Cuentas activas", icon: "users", tone: "purple" },
];

export interface AdminStallRow {
  stallSlug: string;
  status: StallStatus;
  ordersToday: number;
}

export const adminStallRows: AdminStallRow[] = [
  { stallSlug: "frutas-dona-chela", status: "activo", ordersToday: 18 },
  { stallSlug: "hortalizas-don-memo", status: "activo", ordersToday: 14 },
  { stallSlug: "carniceria-la-res-dorada", status: "activo", ordersToday: 22 },
  { stallSlug: "pescados-el-marino", status: "pausado", ordersToday: 0 },
  { stallSlug: "tortilleria-la-rosa", status: "activo", ordersToday: 31 },
  { stallSlug: "lacteos-lupita", status: "revision", ordersToday: 6 },
];

export const marketActivity: Record<string, { status: StallStatus; ordersToday: number }> = {
  m1: { status: "activo", ordersToday: 96 },
  m2: { status: "activo", ordersToday: 71 },
  m3: { status: "activo", ordersToday: 47 },
};

export interface ActivityItem {
  id: string;
  text: string;
  time: string;
  icon: IconName;
}

export const recentActivity: ActivityItem[] = [
  { id: "a1", text: "Lácteos y Huevo Lupita envió su perfil a revisión", time: "Hace 12 min", icon: "store" },
  { id: "a2", text: "Pescados El Marino pausó sus pedidos del día", time: "Hace 1 h", icon: "bell" },
  { id: "a3", text: "Nuevo puesto registrado en Mercado San Isidro", time: "Hace 3 h", icon: "plus" },
  { id: "a4", text: "Mercado La Ribera actualizó su horario", time: "Ayer", icon: "clock" },
];
