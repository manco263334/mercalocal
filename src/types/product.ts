export type ProductCategory =
  | "Frutas" | "Verduras" | "Carnes" | "Pescados" | "Tortillas" | "Lácteos";

export type SaleUnit = "kg" | "pieza" | "manojo" | "litro" | "docena" | "paquete";

export type Availability = "disponible" | "pocas" | "agotado";

export interface Product {
  id: string;
  stallSlug: string;
  name: string;
  category: ProductCategory;
  section: string;
  price: number;
  unit: SaleUnit;
  availability: Availability;
  description: string;
}
