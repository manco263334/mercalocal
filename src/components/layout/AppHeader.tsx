import Link from "next/link";
import { mainNav } from "./navItems";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="container app-header__bar">
        <Logo />
        <nav aria-label="Principal" className="app-header__nav">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="app-header__actions">
          <Button href="/carrito" variant="ghost" size="sm" icon="cart" ariaLabel="Ir al carrito" />
          <Button href="/ingresar" size="sm">Ingresar</Button>
        </div>
      </div>
      <div className="awning" aria-hidden="true" />
    </header>
  );
}
