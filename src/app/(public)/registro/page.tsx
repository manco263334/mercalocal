import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Input, Select, Checkbox } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Crear cuenta" };

export default function RegisterPage() {
  return (
    <div className="container page auth">
      <div className="card auth__card auth__card--wide">
        <Logo />
        <h1>Crea tu cuenta</h1>
        <p className="muted">Regístrate para hacer pedidos o para administrar tu puesto.</p>
        <form className="form" aria-label="Formulario de registro">
          <Input id="nombre" label="Nombre completo" placeholder="Nombre y apellidos" />
          <div className="form__row">
            <Input id="correo" type="email" label="Correo electrónico" placeholder="nombre@correo.com" />
            <Input id="usuario" label="Nombre de usuario" placeholder="mi_usuario" />
          </div>
          <Select id="tipo" label="Tipo de cuenta" options={["Comprador", "Locatario"]} hint="Los locatarios podrán administrar su puesto." />
          <div className="form__row">
            <Input id="clave" type="password" label="Contraseña" placeholder="Mínimo 8 caracteres" />
            <Input id="clave2" type="password" label="Confirmar contraseña" placeholder="Repite tu contraseña" />
          </div>
          <Checkbox id="terminos">Acepto los términos y el aviso de privacidad</Checkbox>
          <Button size="lg" fullWidth>Crear cuenta</Button>
        </form>
        <p className="auth__alt">
          ¿Ya tienes cuenta? <Link href="/ingresar">Ingresar</Link>
        </p>
      </div>
    </div>
  );
}
