"use server";

import { login } from "@/lib/auth-actions/logIn";
import { redirect } from "next/navigation";

export async function handleLogin(data: FormData) {
    try {
        await login(data);
    } catch (error) {
        console.error(error);
        return { error: "Ocurrió un error al validar sus datos, intente nuevamente" };
    }

    redirect("/");
}