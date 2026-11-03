import { AppShell } from "@/components/layout/AppShell";
import { EmptyState } from "@/components/ui/EmptyState";

export default function NotFound() {
  return (
    <AppShell>
      <div className="container page">
        <EmptyState
          icon="search"
          title="No encontramos lo que buscas"
          description="Es posible que el puesto o el producto ya no esté en el catálogo de demostración."
          actionLabel="Explorar mercados"
          actionHref="/mercados"
        />
      </div>
    </AppShell>
  );
}
