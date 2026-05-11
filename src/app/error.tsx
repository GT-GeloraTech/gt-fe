"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 px-4 text-center">
      <h2 className="text-lg font-semibold">Something went wrong.</h2>
      <p className="text-sm text-gray-600">{error.message || "An unexpected error occurred."}</p>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
