// lib/jobs.ts

import { supabase } from "./supabase";
import type { Job } from "@/types/job";

export async function getJobs(): Promise<Job[]> {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase Error:", error);
    return [];
  }

  return data as Job[];
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  if (!supabase) return null;

  const { data, error } = await supabase.from("jobs").select("*").eq("slug", slug).single();

  if (error) {
    console.error(error);
    return null;
  }

  return data as Job;
}
