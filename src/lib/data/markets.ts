import type { Market, Stall } from "@/types/market";

export const markets: Market[] = [
  {
    id: "m1",
    slug: "mercado-central",
    name: "Mercado Municipal Central",
    zone: "Centro histórico",
    address: "Calle Hidalgo 120, Centro",
    stallCount: 48,
    categories: ["Frutas", "Verduras", "Carnes"],
    hours: "Lun a Dom · 6:00 – 18:00",
    description: "El mercado más antiguo de la ciudad, con puestos de frutas, verduras y abarrotes.",
  },
  {
    id: "m2",
    slug: "mercado-la-ribera",
    name: "Mercado La Ribera",
    zone: "Barrio de la Ribera",
    address: "Av. del Río 45, La Ribera",
    stallCount: 36,
    categories: ["Carnes", "Pescados"],
    hours: "Lun a Sáb · 5:30 – 16:00",
    description: "Famoso por su pescadería y sus carnicerías de abasto familiar.",
  },
  {
    id: "m3",
    slug: "mercado-san-isidro",
    name: "Mercado San Isidro",
    zone: "Colonia San Isidro",
    address: "Calle Morelos 300, San Isidro",
    stallCount: 22,
    categories: ["Tortillas", "Lácteos"],
    hours: "Lun a Dom · 6:00 – 15:00",
    description: "Mercado de barrio con tortillerías, cremerías y productos del día.",
  },
];

export const stalls: Stall[] = [
  {
    id: "s1", slug: "frutas-dona-chela", marketId: "m1", name: "Frutas Doña Chela",
    category: "Frutas", owner: "Graciela Ramos",
    description: "Fruta de temporada seleccionada cada mañana. Pide por kilo y recoge lista.",
    hours: "6:00 – 17:00", openNow: true,
  },
  {
    id: "s2", slug: "hortalizas-don-memo", marketId: "m1", name: "Hortalizas Don Memo",
    category: "Verduras", owner: "Guillermo Pérez",
    description: "Verduras y hierbas frescas de productores de la región.",
    hours: "6:00 – 16:00", openNow: true,
  },
  {
    id: "s3", slug: "carniceria-la-res-dorada", marketId: "m2", name: "Carnicería La Res Dorada",
    category: "Carnes", owner: "Hilario Torres",
    description: "Cortes de res, pollo y embutidos caseros preparados al momento.",
    hours: "6:00 – 15:00", openNow: true,
  },
  {
    id: "s4", slug: "pescados-el-marino", marketId: "m2", name: "Pescados El Marino",
    category: "Pescados", owner: "Julián Castillo",
    description: "Pescado y mariscos del día, limpios y listos para llevar.",
    hours: "5:30 – 14:00", openNow: false,
  },
  {
    id: "s5", slug: "tortilleria-la-rosa", marketId: "m3", name: "Tortillería La Rosa",
    category: "Tortillas", owner: "Rosa Mendoza",
    description: "Tortilla de maíz hecha a mano y tostadas horneadas.",
    hours: "6:00 – 14:00", openNow: true,
  },
  {
    id: "s6", slug: "lacteos-lupita", marketId: "m3", name: "Lácteos y Huevo Lupita",
    category: "Lácteos", owner: "Guadalupe Salas",
    description: "Quesos, cremas y huevo de granja para el día a día.",
    hours: "6:30 – 15:00", openNow: true,
  },
];

export function getMarketById(id: string): Market | undefined {
  return markets.find((m) => m.id === id);
}

export function getStallBySlug(slug: string): Stall | undefined {
  return stalls.find((s) => s.slug === slug);
}

export function getStallsByMarket(marketId: string): Stall[] {
  return stalls.filter((s) => s.marketId === marketId);
}
