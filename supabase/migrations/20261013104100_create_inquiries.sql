-- Run this once in the Supabase SQL editor for project ktvhbpqnbqjhbkvebrld.
-- Visitors can insert a row. They cannot read, update, or delete inquiries.

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null,
  full_name text not null,
  email text not null,
  phone text,
  details jsonb not null default '{}'::jsonb,
  constraint inquiries_source_check check (
    source in (
      'home',
      'contact-us',
      'sell-a-franchise',
      'profitable-business',
      'buyer-resources'
    )
  ),
  constraint inquiries_name_len check (char_length(full_name) between 2 and 200),
  constraint inquiries_email_len check (char_length(email) between 3 and 320)
);

create index if not exists inquiries_created_at_idx
  on public.inquiries (created_at desc);

alter table public.inquiries enable row level security;

drop policy if exists "Public can submit inquiries" on public.inquiries;
create policy "Public can submit inquiries"
  on public.inquiries
  for insert
  to anon, authenticated
  with check (true);

revoke all on table public.inquiries from anon, authenticated;
grant insert on table public.inquiries to anon, authenticated;
