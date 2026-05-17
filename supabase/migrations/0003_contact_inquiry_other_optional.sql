-- ============================================================================
-- Gelora Tech — "Other" no longer requires a custom text field.
-- The free-text input was removed from the contact form, so the
-- "other requires text" constraint must be dropped.
-- 'other' remains a valid inquiry_type; inquiry_other stays nullable/unused.
-- ============================================================================

alter table public.contact_inquiry
  drop constraint if exists contact_inquiry_other_requires_text;
