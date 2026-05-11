import type { Metadata } from "next";

import { LoginForm } from "@/components/forms/login-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Sign in · ${siteConfig.name}`,
  description: "Sign in to your account.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-gray-600">Sign in to continue to {siteConfig.name}.</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
