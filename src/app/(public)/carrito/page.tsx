import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Illustration } from "@/components/ui/Illustration";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cartLines, cartStallSlug, cartTotal } from "@/data/orders";
import { getProductById } from "@/data/products";
import { getStallBySlug } from "@/data/markets";
import { formatPrice, unitLabels } from "@/lib/format";

export const metadata: Metadata = { title: "Carrito" };

export default function CartPage() {
  const stall = getStallBySlug(cartStallSlug);

  return (
    <div className="container page">
      <PageHeader title="Tu carrito" description={`Productos de ${stall?.name ?? "tu puesto"}`} backHref={`/puestos/${cartStallSlug}`} backLabel="Seguir comprando" />
      <div className="two-col">
        <ul className="cart-list">
          {cartLines.map((line) => {
            const product = getProductById(line.productId);
            if (!product) return null;
            return (
              <li key={line.productId} className="card cart-item">
                <Illustration kind={product.category} className="cart-item__art" />
                <div className="cart-item__info">
                  <h3>{product.name}</h3>
                  <p className="muted">{stall?.name}</p>
                  <p className="muted">{formatPrice(product.price)} por {unitLabels[product.unit].long}</p>
                </div>
                <div className="qty qty--sm" role="group" aria-label={`Cantidad de ${product.name}`}>
                  <button type="button" aria-label="Disminuir cantidad"><Icon name="minus" size={16} /></button>
                  <output>{line.quantity}</output>
                  <button type="button" aria-label="Aumentar cantidad"><Icon name="plus" size={16} /></button>
                </div>
                <p className="cart-item__amount">{formatPrice(line.amount)}</p>
              </li>
            );
          })}
        </ul>
        <aside className="card summary" aria-label="Resumen del pedido">
          <h2>Resumen</h2>
          <dl>
            <div><dt>Productos</dt><dd>{cartLines.length}</dd></div>
            <div><dt>Pago</dt><dd>Al recoger</dd></div>
            <div className="summary__total"><dt>Total estimado</dt><dd>{formatPrice(cartTotal)}</dd></div>
          </dl>
          <p className="muted">El importe final puede variar según el peso real de cada producto.</p>
          <Button href="/pedido/confirmar" size="lg" fullWidth>Continuar con el pedido</Button>
        </aside>
      </div>

      <section className="section" aria-labelledby="carrito-vacio">
        <SectionTitle id="carrito-vacio" title="Estado: carrito vacío" description="Así se verá cuando no haya productos agregados." />
        <EmptyState
          icon="cart"
          title="Tu carrito está vacío"
          description="Entra a un puesto y agrega los productos que quieras recoger."
          actionLabel="Explorar mercados"
          actionHref="/mercados"
        />
      </section>
    </div>
  );
}
