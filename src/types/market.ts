import type { ProductCategory } from "./product";

export type StallStatus = "activo" | "pausado" | "revision";

export interface Market {
  id: string;
  slug: string;
  name: string;
  zone: string;
  address: string;
  stallCount: number;
  categories: ProductCategory[];
  hours: string;
  description: string;
}

export interface Stall {
  id: string;
  slug: string;
  marketId: string;
  name: string;
  category: ProductCategory;
  owner: string;
  description: string;
  hours: string;
  openNow: boolean;
}
