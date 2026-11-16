import { signUp } from "@/lib/auth-actions/signUp";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

export async function handleSignUp(data: FormData) {
    try {
        await signUp(data);

        Swal.fire({ 
            text: "Cuenta creada con éxito, favor de verificar su correo a través del correo mandado a su cuenta",
            icon: "success"
        });

        redirect("/");
    } catch (error) {
        console.error(error);

        Swal.fire({
            text: "Ocurrió un error al crear su cuenta, intente nuevamente",
            icon: "error"
        });
    }
}