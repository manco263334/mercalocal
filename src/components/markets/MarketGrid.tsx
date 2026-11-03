import type { Market } from "@/types/market";
import { getStallsByMarket } from "@/data/markets";
import { MarketCard } from "./MarketCard";

export function MarketGrid({ markets }: { markets: Market[] }) {
  return (
    <div className="grid grid--markets">
      {markets.map((market) => (
        <MarketCard key={market.id} market={market} stalls={getStallsByMarket(market.id)} />
      ))}
    </div>
  );
}
