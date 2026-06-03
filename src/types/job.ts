// types/job.ts

export interface Job {
  id: string;

  slug: string;

  title: string;
  department?: string;

  location: string;

  workplace_type: "onsite" | "remote" | "hybrid";

  employment_type: "full-time" | "part-time" | "contract" | "internship";

  min_experience: number;
  max_experience: number;

  positions: number;

  salary_min?: number;
  salary_max?: number;

  currency?: string;

  short_description?: string;
  description: string;

  responsibilities: string[];
  requirements: string[];
  good_to_have: string[];
  benefits: string[];

  is_active: boolean;
  is_featured: boolean;

  application_url?: string;
  application_email?: string;

  created_at: string;
  updated_at: string;
}
