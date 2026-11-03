import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Illustration } from "@/components/ui/Illustration";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MarketGrid } from "@/components/markets/MarketGrid";
import { ProductGrid } from "@/components/products/ProductGrid";
import { markets } from "@/data/markets";
import { popularProductIds, getProductById } from "@/data/products";
import type { IconName } from "@/types/navigation";
import type { Product } from "@/types/product";

const steps = [
  { title: "Elige tu puesto", text: "Recorre los mercados cercanos y entra al catálogo de cada puesto." },
  { title: "Arma tu pedido", text: "Agrega lo que necesitas y escoge una hora para recogerlo." },
  { title: "Recoge y paga", text: "Pasa por tu pedido ya preparado y paga directamente en el puesto." },
];

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "clock", title: "Sin filas", text: "Tu pedido te espera a la hora que elegiste." },
  { icon: "receipt", title: "Pago al recoger", text: "No necesitas tarjeta: pagas en el puesto." },
  { icon: "leaf", title: "Producto del día", text: "Surtido real de los locatarios de tu mercado." },
  { icon: "user", title: "Hecho para el teléfono", text: "Botones grandes y pantallas claras en móvil." },
];

const popular = popularProductIds
  .map((id) => getProductById(id))
  .filter((p): p is Product => p !== undefined);

export default function HomePage() {
  return (
    <AppShell>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <Badge tone="yellow">Pedidos anticipados para mercados</Badge>
            <h1>Pide hoy en tu mercado y recoge sin esperar</h1>
            <p>
              Elige los productos de los puestos de siempre, escoge la hora y pasa por tu pedido ya
              preparado.
            </p>
            <div className="hero__search">
              <Input id="busqueda-inicio" label="Buscar productos o puestos" hideLabel icon="search" type="search" placeholder="Busca mango, tortillas, pescado…" />
              <Button size="lg">Buscar</Button>
            </div>
            <div className="hero__actions">
              <Button href="/mercados" size="lg" icon="store">Explorar mercados</Button>
              <Button href="/panel" size="lg" variant="secondary">Soy locatario</Button>
            </div>
          </div>
          <div className="hero__visual">
            <Illustration kind="Mercado" className="hero__art" />
            <div className="hero__ticket">
              <span className="hero__ticket-icon"><Icon name="check" size={20} /></span>
              <div>
                <p className="strong">Pedido MLO-2407</p>
                <p className="muted">Hortalizas Don Memo</p>
              </div>
              <Badge tone="green">Listo para recoger</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="container section" aria-labelledby="destacados">
        <SectionTitle id="destacados" title="Mercados destacados" description="Los puestos que más pedidos reciben esta semana." href="/mercados" />
        <MarketGrid markets={markets} />
      </section>

      <section className="container section" aria-labelledby="populares">
        <SectionTitle id="populares" title="Productos populares" description="Lo que más se pide para recoger hoy." />
        <ProductGrid products={popular} showStall />
      </section>

      <section className="section section--tint" aria-labelledby="como-funciona">
        <div className="container">
          <SectionTitle id="como-funciona" title="Cómo funciona MercaLocal" />
          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.title} className="steps__item">
                <span className="steps__num">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container section" aria-labelledby="ventajas">
        <SectionTitle id="ventajas" title="Por qué comprar así" />
        <ul className="benefits">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="benefit">
              <span className="benefit__icon"><Icon name={benefit.icon} size={24} /></span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container section">
        <div className="cta-band">
          <div>
            <h2>¿Tienes un puesto en el mercado?</h2>
            <p>Muestra tu catálogo, recibe pedidos con anticipación y organiza tu día desde un solo panel.</p>
          </div>
          <Button href="/registro" variant="light" size="lg">Crear cuenta de locatario</Button>
        </div>
      </section>
    </AppShell>
  );
}
