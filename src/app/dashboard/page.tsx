import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen flex flex-col p-6 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <header className="flex items-center justify-between max-w-4xl mx-auto w-full mb-12">
        <Link
          href="/"
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm"
        >
          ← Home
        </Link>
        <LogoutButton />
      </header>

      <div className="max-w-4xl mx-auto w-full flex-1">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          You&apos;re signed in as{" "}
          <span className="font-medium text-slate-900 dark:text-white">
            {user.email}
          </span>
        </p>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            Welcome
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            This is a protected page. Only authenticated users can see it. You
            can extend this demo with more Supabase features (database, storage,
            realtime) and add more routes.
          </p>
        </div>
      </div>
    </main>
  );
}
