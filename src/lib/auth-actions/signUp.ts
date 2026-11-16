import { createClient } from "@/utils/supabase/supabase.client";

export async function signUp(data: FormData) {
    const supabase = createClient();

    const name = data.get("name") as string;
    const username = data.get("username") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const confirmPassword = data.get("confirmPassword") as string;
    //const role = data.get("role") as string;

    if (password !== confirmPassword) {
        throw new Error("Las contraseñas no coinciden");
    }

    const userData = {
        name,
        username,
        email
    }

    const signUpData = {
        email,
        password,
        options: {
            data: {
                email,
                password
            }
        }
    }

    const [authResponse, postgresResponse] = await Promise.all([supabase.auth.signUp(signUpData), supabase.schema("public").from("users").insert(userData)]);

    if (authResponse.error || postgresResponse.error) {
        throw authResponse.error || postgresResponse.error;
    }
}