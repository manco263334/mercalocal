import type { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

interface PageHeaderProps {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
  actions?: ReactNode;
}

export function PageHeader({ title, description, backHref, backLabel, actions }: PageHeaderProps) {
  return (
    <header className="page-header">
      {backHref && (
        <Link href={backHref} className="back-link">
          <Icon name="arrowLeft" size={18} />
          {backLabel ?? "Volver"}
        </Link>
      )}
      <div className="page-header__row">
        <div>
          <h1>{title}</h1>
          {description && <p className="page-header__desc">{description}</p>}
        </div>
        {actions && <div className="page-header__actions">{actions}</div>}
      </div>
    </header>
  );
}
