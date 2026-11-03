import { Icon } from "@/components/ui/Icon";

export function OfflineBanner() {
  return (
    <div className="notice notice--offline" role="status">
      <Icon name="wifiOff" size={18} />
      <p>Sin conexión a internet. Algunas secciones no estarán disponibles.</p>
    </div>
  );
}
