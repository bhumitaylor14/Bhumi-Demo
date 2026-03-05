# Bhumi Demo

A Next.js demo with **Supabase** authentication and **Tailwind CSS**. Includes register, login, and a protected dashboard.

## Stack

- **Next.js 15** (App Router)
- **Supabase** (Auth via `@supabase/ssr` + `@supabase/supabase-js`)
- **Tailwind CSS**
- **TypeScript**

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure Supabase**

   - Create a project at [supabase.com](https://supabase.com).
   - In the dashboard: **Settings → API** copy the **Project URL** and **anon public** key.

3. **Environment variables**

   Copy the example env and fill in your Supabase values:

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local`:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Enable Email auth (optional)**

   In Supabase: **Authentication → Providers → Email** enable “Email” and, if you want confirmation, configure “Confirm email”.

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route        | Description                    |
| ------------ | ------------------------------ |
| `/`          | Home with links to login/register |
| `/register`  | Create account (email + password)  |
| `/login`     | Sign in                          |
| `/dashboard` | Protected page (requires sign-in) |
| `/auth/callback` | OAuth/email confirmation callback (used by Supabase) |

## Features

- **Register**: Email + password sign-up; optional “confirm email” flow with redirect to `/auth/callback`.
- **Login**: Email + password sign-in; redirect to `/dashboard` on success.
- **Dashboard**: Server-rendered, protected; shows current user email and a sign-out button.
- **Session**: Supabase session is refreshed via middleware and cookies (SSR-friendly).

## Scripts

- `npm run dev` – Development server
- `npm run build` – Production build
- `npm run start` – Run production server
- `npm run lint` – Run ESLint
