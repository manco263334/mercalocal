import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Ingresar" };

export default function LoginPage() {
  return (
    <div className="container page auth">
      <div className="card auth__card">
        <Logo />
        <h1>Ingresa a tu cuenta</h1>
        <p className="muted">Consulta tus pedidos y pide de nuevo en tus puestos favoritos.</p>
        <form className="form" aria-label="Formulario de ingreso">
          <Input id="correo" type="email" label="Correo electrónico" placeholder="nombre@correo.com" />
          <Input id="clave" type="password" label="Contraseña" placeholder="Tu contraseña" />
          <Button variant="ghost" size="sm">Recuperar contraseña</Button>
          <Button size="lg" fullWidth>Ingresar</Button>
        </form>
        <p className="auth__alt">
          ¿Aún no tienes cuenta? <Link href="/registro">Crear una cuenta</Link>
        </p>
      </div>
    </div>
  );
}
