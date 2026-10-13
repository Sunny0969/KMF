-- Blogs written in /admin/blogs. Visitors can read published posts only.

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  slug text not null unique,
  title text not null,
  meta_title text not null default '',
  meta_description text not null default '',
  category text not null,
  content_html text not null default '',
  faqs jsonb not null default '[]'::jsonb,
  cover_image_url text,
  published boolean not null default false,
  constraint blogs_category_check check (category in ('seller', 'buyer')),
  constraint blogs_title_len check (char_length(title) between 2 and 200),
  constraint blogs_slug_len check (char_length(slug) between 1 and 80)
);

create index if not exists blogs_published_category_idx
  on public.blogs (published, category, created_at desc);

alter table public.blogs enable row level security;

drop policy if exists "Public can read published blogs" on public.blogs;
create policy "Public can read published blogs"
  on public.blogs
  for select
  to anon, authenticated
  using (published = true);

revoke all on table public.blogs from anon, authenticated;
grant select on table public.blogs to anon, authenticated;
