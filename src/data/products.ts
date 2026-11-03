import type { Product } from "@/types/product";

export const products: Product[] = [
  { id: "p101", stallSlug: "frutas-dona-chela", name: "Mango ataulfo", category: "Frutas", section: "Tropicales", price: 38, unit: "kg", availability: "disponible", description: "Mango maduro, dulce y sin fibra. Ideal para comer solo o en licuado." },
  { id: "p102", stallSlug: "frutas-dona-chela", name: "Plátano macho", category: "Frutas", section: "Tropicales", price: 24, unit: "kg", availability: "disponible", description: "Plátano macho firme, para freír, hornear o cocer." },
  { id: "p103", stallSlug: "frutas-dona-chela", name: "Papaya maradol", category: "Frutas", section: "Tropicales", price: 32, unit: "kg", availability: "pocas", description: "Papaya de pulpa roja y dulce, vendida por kilo." },
  { id: "p104", stallSlug: "frutas-dona-chela", name: "Limón persa", category: "Frutas", section: "Cítricos", price: 30, unit: "kg", availability: "disponible", description: "Limón jugoso y de cáscara delgada." },
  { id: "p201", stallSlug: "hortalizas-don-memo", name: "Jitomate saladette", category: "Verduras", section: "Hortalizas", price: 26, unit: "kg", availability: "disponible", description: "Jitomate firme para salsas, guisos y ensaladas." },
  { id: "p202", stallSlug: "hortalizas-don-memo", name: "Cilantro fresco", category: "Verduras", section: "Hierbas", price: 8, unit: "manojo", availability: "disponible", description: "Manojo grande de cilantro recién cortado." },
  { id: "p203", stallSlug: "hortalizas-don-memo", name: "Chile serrano", category: "Verduras", section: "Hortalizas", price: 45, unit: "kg", availability: "pocas", description: "Chile serrano verde, picante y de buen tamaño." },
  { id: "p204", stallSlug: "hortalizas-don-memo", name: "Calabacita tierna", category: "Verduras", section: "Hortalizas", price: 22, unit: "kg", availability: "agotado", description: "Calabacita tierna, perfecta para caldos y guisados." },
  { id: "p301", stallSlug: "carniceria-la-res-dorada", name: "Bistec de res", category: "Carnes", section: "Res", price: 210, unit: "kg", availability: "disponible", description: "Bistec de res cortado delgado, sin exceso de grasa." },
  { id: "p302", stallSlug: "carniceria-la-res-dorada", name: "Pechuga de pollo", category: "Carnes", section: "Aves", price: 118, unit: "kg", availability: "disponible", description: "Pechuga fresca, entera o fileteada según indiques." },
  { id: "p303", stallSlug: "carniceria-la-res-dorada", name: "Chorizo casero", category: "Carnes", section: "Embutidos", price: 140, unit: "kg", availability: "pocas", description: "Chorizo preparado en el puesto con receta de la casa." },
  { id: "p401", stallSlug: "pescados-el-marino", name: "Filete de tilapia", category: "Pescados", section: "Pescado", price: 135, unit: "kg", availability: "disponible", description: "Filete limpio y sin espinas, listo para cocinar." },
  { id: "p402", stallSlug: "pescados-el-marino", name: "Camarón mediano", category: "Pescados", section: "Mariscos", price: 260, unit: "kg", availability: "pocas", description: "Camarón fresco mediano, con o sin cáscara." },
  { id: "p403", stallSlug: "pescados-el-marino", name: "Mojarra fresca", category: "Pescados", section: "Pescado", price: 95, unit: "kg", availability: "disponible", description: "Mojarra entera, limpia y escamada." },
  { id: "p501", stallSlug: "tortilleria-la-rosa", name: "Tortilla de maíz", category: "Tortillas", section: "Tortillas", price: 22, unit: "kg", availability: "disponible", description: "Tortilla de maíz recién hecha, suave y caliente." },
  { id: "p502", stallSlug: "tortilleria-la-rosa", name: "Tostadas horneadas", category: "Tortillas", section: "Botanas", price: 35, unit: "paquete", availability: "disponible", description: "Paquete de tostadas horneadas, crujientes y sin aceite." },
  { id: "p503", stallSlug: "tortilleria-la-rosa", name: "Totopos", category: "Tortillas", section: "Botanas", price: 40, unit: "paquete", availability: "agotado", description: "Totopos fritos con sal, para botanear o acompañar." },
  { id: "p601", stallSlug: "lacteos-lupita", name: "Queso fresco", category: "Lácteos", section: "Quesos", price: 120, unit: "kg", availability: "disponible", description: "Queso fresco de leche de vaca, suave y ligeramente salado." },
  { id: "p602", stallSlug: "lacteos-lupita", name: "Crema de rancho", category: "Lácteos", section: "Cremas", price: 45, unit: "litro", availability: "disponible", description: "Crema espesa de rancho, vendida por litro." },
  { id: "p603", stallSlug: "lacteos-lupita", name: "Huevo blanco", category: "Lácteos", section: "Huevo", price: 54, unit: "docena", availability: "pocas", description: "Huevo blanco de granja, seleccionado por tamaño." },
];

export const popularProductIds = ["p101", "p201", "p501", "p601"];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByStall(stallSlug: string): Product[] {
  return products.filter((p) => p.stallSlug === stallSlug);
}
