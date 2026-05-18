-- ============================================================================
-- Gelora Tech — contact_inquiry
-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query → Run)
-- or via `supabase db push` if you use the Supabase CLI.
-- ============================================================================

create extension if not exists "pgcrypto";

create table if not exists public.contact_inquiry (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),

  full_name       text        not null check (char_length(full_name) between 2 and 80),
  email           text        not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone           text        check (phone is null or char_length(phone) <= 30),
  company         text        check (company is null or char_length(company) <= 100),
  inquiry_type    text        not null default 'general'
                              check (inquiry_type in (
                                'general','web','mobile','cloud','ai','security','consulting'
                              )),
  message         text        not null check (char_length(message) between 15 and 4000),

  -- internal triage / CRM fields (never exposed to the public client)
  status          text        not null default 'new'
                              check (status in ('new','in_review','contacted','closed','spam')),
  source          text        not null default 'website',

  ip_hint         text,
  user_agent      text
);

comment on table public.contact_inquiry is
  'Public contact form submissions. Anonymous role may INSERT only; reads are blocked by RLS.';

create index if not exists contact_inquiry_created_at_idx
  on public.contact_inquiry (created_at desc);
create index if not exists contact_inquiry_status_idx
  on public.contact_inquiry (status);

-- ----------------------------------------------------------------------------
-- Row Level Security
-- The anon key is public, so RLS is the ONLY thing protecting this table.
--   * anon  -> may INSERT a new message, nothing else
--   * NO public SELECT/UPDATE/DELETE  (admins read via the service_role key,
--     which bypasses RLS, from a trusted server context only)
-- ----------------------------------------------------------------------------
alter table public.contact_inquiry enable row level security;

drop policy if exists "anon can submit contact message" on public.contact_inquiry;
create policy "anon can submit contact message"
  on public.contact_inquiry
  for insert
  to anon
  with check (true);

-- (Intentionally NO select/update/delete policy: the table is write-only
--  for the public; reading requires the service_role key.)
