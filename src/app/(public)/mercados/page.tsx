import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Input } from "@/components/ui/Input";
import { FilterChips } from "@/components/ui/FilterChips";
import { MarketGrid } from "@/components/markets/MarketGrid";
import { markets } from "@/data/markets";

export const metadata: Metadata = { title: "Mercados" };

export default function MarketsPage() {
  return (
    <div className="container page">
      <PageHeader
        title="Mercados"
        description="Elige un mercado y entra a los puestos donde sueles comprar."
      />
      <div className="toolbar">
        <Input id="busqueda-mercados" label="Buscar mercado" hideLabel icon="search" type="search" placeholder="Busca por nombre o zona" />
        <FilterChips
          label="Filtrar por categoría"
          options={["Todos", "Frutas", "Verduras", "Carnes", "Pescados", "Tortillas", "Lácteos"]}
          active="Todos"
        />
      </div>
      <MarketGrid markets={markets} />
    </div>
  );
}
