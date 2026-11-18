"use server";

import { signUp } from "@/lib/auth-actions/signUp";
import { redirect } from "next/navigation";

export async function handleSignUp(data: FormData) {
    try {
        await signUp(data);
    } catch (error) {
        console.error(error);
        return { error: "Ocurrió un error al crear su cuenta, intente nuevamente" }
    }

    redirect("/");
}