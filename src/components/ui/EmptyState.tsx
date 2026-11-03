import type { IconName } from "@/types/navigation";
import { Button } from "./Button";
import { Icon } from "./Icon";

interface EmptyStateProps {
  icon: IconName;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({ icon, title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="empty">
      <span className="empty__icon">
        <Icon name={icon} size={28} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      {actionLabel && actionHref && (
        <Button href={actionHref} variant="secondary">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
