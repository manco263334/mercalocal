import type { ReactNode } from "react";
import Link from "next/link";
import type { NavItem } from "@/types/navigation";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Logo } from "./Logo";

interface PanelShellProps {
  role: string;
  navLabel: string;
  nav: NavItem[];
  children: ReactNode;
}

export function PanelShell({ role, navLabel, nav, children }: PanelShellProps) {
  return (
    <div className="panel-shell">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <aside className="panel-shell__side">
        <div className="panel-shell__brand">
          <Logo />
          <Badge tone="yellow">{role}</Badge>
        </div>
        <nav aria-label={navLabel} className="panel-shell__nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              <Icon name={item.icon} size={20} />
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="panel-shell__exit">
          <Icon name="arrowLeft" size={18} />
          Salir al sitio
        </Link>
      </aside>
      <main id="contenido" className="panel-shell__main">
        {children}
      </main>
    </div>
  );
}
