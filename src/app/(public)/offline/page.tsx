import type { Metadata } from "next";
import { OfflineBanner } from "@/components/layout/OfflineBanner";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Sin conexión" };

export default function OfflinePage() {
  return (
    <div className="container page">
      <OfflineBanner />
      <div className="offline">
        <span className="offline__icon"><Icon name="wifiOff" size={48} /></span>
        <h1>Sin conexión</h1>
        <p>No pudimos conectarnos a internet. Revisa tu señal o tus datos móviles e inténtalo de nuevo en unos minutos.</p>
        <Button href="/" size="lg" icon="home">Volver al inicio</Button>
      </div>
    </div>
  );
}
