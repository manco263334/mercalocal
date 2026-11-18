"use client";

import { Logo } from "@/components/layout/Logo";
import { Input, Select, Checkbox } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { handleSignUp } from "./actions/handleSingUp";
import Link from "next/link";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="container page auth">
      <div className="card auth__card auth__card--wide">
        <Logo />
        <h1>Crea tu cuenta</h1>
        <p className="muted">Regístrate para hacer pedidos o para administrar tu puesto.</p>
        <form className="form" aria-label="Formulario de registro">
          <Input 
            id="nombre" 
            label="Nombre completo" 
            placeholder="Nombre y apellidos" 
            onChange={(e) => setName(e.target.value)}
          />

          <div className="form__row">
            <Input 
              id="correo" 
              type="email" 
              label="Correo electrónico" 
              placeholder="nombre@correo.com" 
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input 
              id="usuario" 
              label="Nombre de usuario" 
              placeholder="mi_usuario"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <Select 
            id="tipo" 
            label="Tipo de cuenta" 
            options={["Comprador", "Locatario"]} 
            hint="Los locatarios podrán administrar su puesto." 
          />

          <div className="form__row">
            <Input 
              id="clave" 
              type="password" 
              label="Contraseña" 
              placeholder="Mínimo 8 caracteres"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input 
              id="clave2" 
              type="password" 
              label="Confirmar contraseña" 
              placeholder="Repite tu contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <Checkbox id="terminos">Acepto los términos y el aviso de privacidad</Checkbox>

          <Button 
            size="lg" 
            fullWidth
            onClick={async () => {
              const data = new FormData();
              data.append("name", name);
              data.append("username", username);
              data.append("email", email);
              data.append("password", password);
              data.append("confirmPassword", confirmPassword);
              data.append("role", role);

              const result = await handleSignUp(data);
              if (result?.error) {
                Swal.fire({
                  text: "Ocurrió un error al crear su cuenta, intente nuevamente",
                  icon: "error"
                });
              }
            }}
          >
            Crear cuenta
          </Button>
        </form>
        <p className="auth__alt">
          ¿Ya tienes cuenta? <Link href="/ingresar">Ingresar</Link>
        </p>
      </div>
    </div>
  );
}
