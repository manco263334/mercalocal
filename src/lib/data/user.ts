import { createClient } from "@/utils/supabase/supabase.client";

export async function getCurrentUser() {
    const supabase = createClient();
    const { data: user } = await supabase.auth.getUser();

    return user;
}

export async function isSignedIn() {
    const supabase = createClient();
    const { data: user } = await supabase.auth.getUser();

    return user !== null;
}