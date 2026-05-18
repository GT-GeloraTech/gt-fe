import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Browser Supabase client (anon key only).
 *
 * Safe to expose because every reachable table is protected by Row Level
 * Security — see supabase/migrations/0001_contact_messages.sql.
 *
 * Returns `null` (instead of throwing) when env vars are missing so the app
 * still builds/runs locally without a Supabase project configured.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient | null =
  url && anonKey
    ? createClient(url, anonKey, {
        auth: { persistSession: false },
      })
    : null;

export const isSupabaseConfigured = Boolean(url && anonKey);
