import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhumi Demo",
  description: "Next.js demo with Supabase auth and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
