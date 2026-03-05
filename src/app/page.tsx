import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Bhumi Demo
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Next.js + Supabase + Tailwind CSS. Get started by signing in or creating an account.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
