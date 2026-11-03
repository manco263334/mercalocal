import type { Metric } from "@/data/dashboard";
import { Icon } from "./Icon";

export function StatCard({ metric }: { metric: Metric }) {
  return (
    <article className="stat">
      <span className={`stat__icon stat__icon--${metric.tone}`}>
        <Icon name={metric.icon} size={22} />
      </span>
      <div>
        <p className="stat__value">{metric.value}</p>
        <p className="stat__label">{metric.label}</p>
        <p className="stat__hint">{metric.hint}</p>
      </div>
    </article>
  );
}
