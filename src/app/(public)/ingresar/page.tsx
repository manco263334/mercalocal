"use client";

import { Logo } from "@/components/layout/Logo";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { handleLogin } from "./actions/handleLogin";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container page auth">
      <div className="card auth__card">
        <Logo />
        <h1>Ingresa a tu cuenta</h1>
        <p className="muted">Consulta tus pedidos y pide de nuevo en tus puestos favoritos.</p>
        <form className="form" aria-label="Formulario de ingreso">
          <Input 
            id="correo" 
            type="email" 
            label="Correo electrónico" 
            placeholder="nombre@correo.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input 
            id="clave" 
            type="password" 
            label="Contraseña" 
            placeholder="Tu contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="ghost" size="sm">Recuperar contraseña</Button>

          <Button 
            size="lg" 
            fullWidth
            onClick={() => {
              const data = new FormData();
              data.append("email", email);
              data.append("password", password);

              handleLogin(data);
            }}
          >
            Ingresar
          </Button>
        </form>
        <p className="auth__alt">
          ¿Aún no tienes cuenta? <Link href="/registro">Crear una cuenta</Link>
        </p>
      </div>
    </div>
  );
}
