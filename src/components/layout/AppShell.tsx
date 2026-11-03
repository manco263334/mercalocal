import type { ReactNode } from "react";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import { BottomNav } from "./BottomNav";

export function AppShell({ children, notice }: { children: ReactNode; notice?: ReactNode }) {
  return (
    <div className="shell">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <AppHeader />
      {notice && <div className="container shell__notice">{notice}</div>}
      <main id="contenido" className="shell__main">
        {children}
      </main>
      <AppFooter />
      <BottomNav />
    </div>
  );
}
