-- ============================================================================
-- Gelora Tech — contact_inquiry: add "Other" inquiry type + custom text
-- ============================================================================

-- 1. Column to hold the user's custom topic when they pick "Other"
alter table public.contact_inquiry
  add column if not exists inquiry_other text
  check (inquiry_other is null or char_length(inquiry_other) <= 120);

-- 2. Allow 'other' as an inquiry_type value
alter table public.contact_inquiry
  drop constraint if exists contact_inquiry_inquiry_type_check;

alter table public.contact_inquiry
  add constraint contact_inquiry_inquiry_type_check
  check (inquiry_type in (
    'general','web','mobile','cloud','ai','security','consulting','other'
  ));

-- 3. If type is 'other', a custom description must be provided
alter table public.contact_inquiry
  drop constraint if exists contact_inquiry_other_requires_text;

alter table public.contact_inquiry
  add constraint contact_inquiry_other_requires_text
  check (
    inquiry_type <> 'other'
    or (inquiry_other is not null and char_length(btrim(inquiry_other)) >= 3)
  );
