import type { Metadata } from "next";
import Link from "next/link";
import { PanelShell } from "@/components/layout/PanelShell";
import { adminNav } from "@/components/layout/navItems";
import { StatCard } from "@/components/ui/StatCard";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge, type BadgeTone } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { adminMetrics, adminStallRows, marketActivity, recentActivity, type AdminStallRow } from "@/data/dashboard";
import { markets, getStallBySlug, getMarketById } from "@/data/markets";
import type { Market, StallStatus } from "@/types/market";

export const metadata: Metadata = { title: "Administración" };

const statusConfig: Record<StallStatus, { label: string; tone: BadgeTone }> = {
  activo: { label: "Activo", tone: "green" },
  pausado: { label: "Pausado", tone: "gray" },
  revision: { label: "En revisión", tone: "yellow" },
};

function StatusBadge({ status }: { status: StallStatus }) {
  const { label, tone } = statusConfig[status];
  return <Badge tone={tone}>{label}</Badge>;
}

const marketColumns: Column<Market>[] = [
  { header: "Mercado", cell: (m) => <span className="strong">{m.name}</span> },
  { header: "Zona", cell: (m) => m.zone },
  { header: "Puestos", cell: (m) => m.stallCount },
  { header: "Pedidos hoy", cell: (m) => marketActivity[m.id]?.ordersToday ?? 0 },
  { header: "Estado", cell: (m) => <StatusBadge status={marketActivity[m.id]?.status ?? "activo"} /> },
];

const stallColumns: Column<AdminStallRow>[] = [
  { header: "Puesto", cell: (r) => <span className="strong">{getStallBySlug(r.stallSlug)?.name}</span> },
  { header: "Mercado", cell: (r) => {
      const stall = getStallBySlug(r.stallSlug);
      return stall ? getMarketById(stall.marketId)?.name : "—";
    } },
  { header: "Categoría", cell: (r) => getStallBySlug(r.stallSlug)?.category },
  { header: "Pedidos hoy", cell: (r) => r.ordersToday },
  { header: "Estado", cell: (r) => <StatusBadge status={r.status} /> },
];

export default function AdminPage() {
  return (
    <PanelShell role="Administrador" navLabel="Administración" nav={adminNav}>
      <header className="panel-head panel-head--plain">
        <div>
          <h1>Panel administrativo</h1>
          <p className="muted">Supervisión de mercados, puestos y pedidos de la plataforma.</p>
        </div>
      </header>

      <section id="resumen" aria-labelledby="resumen-general">
        <SectionTitle id="resumen-general" title="Resumen general" />
        <div className="grid grid--stats">
          {adminMetrics.map((metric) => (
            <StatCard key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      <div className="quick">
        <Link href="/admin#mercados" className="card quick__item"><Icon name="store" size={22} />Administrar mercados<Icon name="chevronRight" size={16} /></Link>
        <Link href="/admin#puestos" className="card quick__item"><Icon name="grid" size={22} />Administrar puestos<Icon name="chevronRight" size={16} /></Link>
      </div>

      <section id="mercados" className="panel-section" aria-labelledby="t-mercados">
        <SectionTitle id="t-mercados" title="Mercados" />
        <DataTable caption="Mercados registrados" columns={marketColumns} rows={markets} rowKey={(m) => m.id} />
      </section>

      <section id="puestos" className="panel-section" aria-labelledby="t-puestos">
        <SectionTitle id="t-puestos" title="Puestos" />
        <DataTable caption="Puestos registrados" columns={stallColumns} rows={adminStallRows} rowKey={(r) => r.stallSlug} />
      </section>

      <section id="actividad" className="panel-section" aria-labelledby="t-actividad">
        <SectionTitle id="t-actividad" title="Actividad reciente" />
        <ul className="activity">
          {recentActivity.map((item) => (
            <li key={item.id} className="card activity__item">
              <span className="activity__icon"><Icon name={item.icon} size={18} /></span>
              <p>{item.text}</p>
              <time className="muted">{item.time}</time>
            </li>
          ))}
        </ul>
      </section>
    </PanelShell>
  );
}
