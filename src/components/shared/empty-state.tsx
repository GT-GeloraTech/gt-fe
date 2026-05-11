import { Inbox } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, icon, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-gray-300 p-10 text-center",
        className,
      )}
    >
      <div className="text-gray-400">{icon ?? <Inbox className="h-8 w-8" aria-hidden />}</div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        {description ? <p className="mt-1 text-sm text-gray-600">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
