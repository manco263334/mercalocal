import { createBrowserClient } from "@supabase/ssr";
//import { supabaseUrl, supabaseKey } from "@/config/supabase";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const createClient = () =>
    createBrowserClient (
        supabaseUrl!,
        supabaseKey!,
    );