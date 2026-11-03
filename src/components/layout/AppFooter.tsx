import Link from "next/link";
import { Logo } from "./Logo";

export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="container app-footer__grid">
        <div>
          <Logo />
          <p className="muted">Pedidos anticipados para mercados municipales y de barrio.</p>
        </div>
        <nav aria-label="Compradores">
          <h2>Compradores</h2>
          <ul>
            <li><Link href="/mercados">Explorar mercados</Link></li>
            <li><Link href="/carrito">Mi carrito</Link></li>
            <li><Link href="/pedidos">Mis pedidos</Link></li>
          </ul>
        </nav>
        <nav aria-label="Locatarios">
          <h2>Locatarios</h2>
          <ul>
            <li><Link href="/panel">Panel del puesto</Link></li>
            <li><Link href="/registro">Crear cuenta</Link></li>
            <li><Link href="/admin">Administración</Link></li>
          </ul>
        </nav>
      </div>
      <p className="container app-footer__legal">Prototipo académico · Proyecto PWA, Unidad 1</p>
    </footer>
  );
}
