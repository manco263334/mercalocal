import type { NavItem } from "@/types/navigation";

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/", icon: "home" },
  { label: "Mercados", href: "/mercados", icon: "store" },
  { label: "Carrito", href: "/carrito", icon: "cart" },
  { label: "Mis pedidos", href: "/pedidos", icon: "receipt" },
];

export const bottomNav: NavItem[] = [
  ...mainNav,
  { label: "Cuenta", href: "/ingresar", icon: "user" },
];

export const panelNav: NavItem[] = [
  { label: "Resumen", href: "/panel", icon: "chart" },
  { label: "Catálogo", href: "/panel#catalogo", icon: "box" },
  { label: "Pedidos", href: "/panel#pedidos", icon: "receipt" },
  { label: "Ver tienda", href: "/puestos/frutas-dona-chela", icon: "store" },
];

export const adminNav: NavItem[] = [
  { label: "Resumen", href: "/admin", icon: "chart" },
  { label: "Mercados", href: "/admin#mercados", icon: "store" },
  { label: "Puestos", href: "/admin#puestos", icon: "grid" },
  { label: "Actividad", href: "/admin#actividad", icon: "bell" },
];
