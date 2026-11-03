import type { Availability } from "@/types/product";
import { Badge, type BadgeTone } from "@/components/ui/Badge";

const config: Record<Availability, { label: string; tone: BadgeTone }> = {
  disponible: { label: "Disponible", tone: "green" },
  pocas: { label: "Quedan pocas", tone: "yellow" },
  agotado: { label: "Agotado hoy", tone: "red" },
};

export function AvailabilityBadge({ availability }: { availability: Availability }) {
  const { label, tone } = config[availability];
  return <Badge tone={tone}>{label}</Badge>;
}
