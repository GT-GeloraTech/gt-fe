"use client";

import type { ReactNode } from "react";

import { ErrorBoundary } from "@/components/shared/error-boundary";
import { QueryProvider } from "@/providers/query-provider";
import { ToastProvider } from "@/providers/toast-provider";

/**
 * Single composition root for client-side providers. Wrap with new providers
 * here so app/layout.tsx stays stable.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <QueryProvider>
        {children}
        <ToastProvider />
      </QueryProvider>
    </ErrorBoundary>
  );
}
