import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cartLines, cartStallSlug, cartTotal, pickupSlots } from "@/data/orders";
import { getProductById } from "@/data/products";
import { getStallBySlug, getMarketById } from "@/data/markets";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = { title: "Confirmar pedido" };

export default function ConfirmOrderPage() {
  const stall = getStallBySlug(cartStallSlug);
  const market = stall ? getMarketById(stall.marketId) : undefined;

  return (
    <div className="container page">
      <PageHeader title="Revisa tu pedido" description="Verifica los datos antes de confirmar." backHref="/carrito" backLabel="Carrito" />
      <div className="two-col">
        <div className="stack">
          <section className="card block" aria-labelledby="c-puesto">
            <h2 id="c-puesto">Puesto</h2>
            <p className="strong">{stall?.name}</p>
            <p className="muted block__line"><Icon name="pin" size={16} />{market?.name}</p>
          </section>

          <section className="card block" aria-labelledby="c-productos">
            <h2 id="c-productos">Productos</h2>
            <ul className="mini-list">
              {cartLines.map((line) => (
                <li key={line.productId}>
                  <span>{line.quantity} × {getProductById(line.productId)?.name}</span>
                  <span>{formatPrice(line.amount)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="card block" aria-labelledby="c-contacto">
            <h2 id="c-contacto">Datos de contacto</h2>
            <form className="form" aria-label="Datos de contacto">
              <Input id="contacto-nombre" label="Nombre" defaultValue="Mariana López" />
              <Input id="contacto-tel" type="tel" label="Teléfono" defaultValue="55 0000 0000" hint="Solo se usa para avisarte cuando tu pedido esté listo." />
            </form>
          </section>

          <section className="card block" aria-labelledby="c-recogida">
            <h2 id="c-recogida">Recogida</h2>
            <div className="form form__row">
              <Select id="fecha" label="Día" options={["Hoy, viernes 23 oct", "Mañana, sábado 24 oct"]} />
              <Select id="franja" label="Franja de recogida" options={pickupSlots} />
            </div>
          </section>
        </div>

        <aside className="card summary" aria-label="Resumen del importe">
          <h2>Resumen</h2>
          <dl>
            <div><dt>Subtotal</dt><dd>{formatPrice(cartTotal)}</dd></div>
            <div className="summary__total"><dt>Total estimado</dt><dd>{formatPrice(cartTotal)}</dd></div>
          </dl>
          <div className="notice notice--info">
            <Icon name="receipt" size={18} />
            <p>El pago se realiza en el puesto al recoger tu pedido.</p>
          </div>
          <Button size="lg" fullWidth icon="check">Confirmar pedido</Button>
          <p className="muted">Vista previa: este botón todavía no envía ningún pedido.</p>
        </aside>
      </div>
    </div>
  );
}
