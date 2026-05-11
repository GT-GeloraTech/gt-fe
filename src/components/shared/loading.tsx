import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export function Loading({ className, label = "Loading" }: { className?: string; label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn("flex items-center justify-center gap-2 p-6 text-gray-600", className)}
    >
      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      <span className="text-sm">{label}…</span>
    </div>
  );
}
