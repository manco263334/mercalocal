import Link from "next/link";
import type { Market, Stall } from "@/types/market";
import { Illustration } from "@/components/ui/Illustration";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";

interface MarketCardProps {
  market: Market;
  stalls: Stall[];
}

export function MarketCard({ market, stalls }: MarketCardProps) {
  const firstStall = stalls[0];
  return (
    <article className="card market-card">
      <Illustration kind="Mercado" className="market-card__media" />
      <div className="market-card__body">
        <h3>{market.name}</h3>
        <p className="muted market-card__line">
          <Icon name="pin" size={16} />
          {market.zone}
        </p>
        <p className="muted market-card__line">
          <Icon name="store" size={16} />
          {market.stallCount} puestos registrados
        </p>
        <p className="muted market-card__line">
          <Icon name="clock" size={16} />
          {market.hours}
        </p>
        <div className="tags">
          {market.categories.map((category) => (
            <Badge key={category} tone="green">
              {category}
            </Badge>
          ))}
        </div>
        {stalls.length > 0 && (
          <ul className="market-card__stalls" aria-label={`Puestos de ${market.name}`}>
            {stalls.map((stall) => (
              <li key={stall.id}>
                <Link href={`/puestos/${stall.slug}`}>{stall.name}</Link>
              </li>
            ))}
          </ul>
        )}
        {firstStall && (
          <Link href={`/puestos/${firstStall.slug}`} className="market-card__cta">
            Explorar mercado
            <Icon name="chevronRight" size={16} />
          </Link>
        )}
      </div>
    </article>
  );
}
