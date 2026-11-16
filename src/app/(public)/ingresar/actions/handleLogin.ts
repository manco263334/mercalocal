import { login } from "@/lib/auth-actions/logIn";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

export async function handleLogin(data: FormData) {
    try {
        await login(data);

        Swal.fire({ 
            text: "Bienvenido de vuelta",
            icon: "success"
        });

        redirect("/");
    } catch (error) {
        console.error(error);

        Swal.fire({ 
            text: "Ocurrió un error al validar sus datos, intente nuevamente",
            icon: "error"
        });
    }
}