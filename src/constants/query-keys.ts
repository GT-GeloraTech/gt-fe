/**
 * Central registry of TanStack Query keys. Keep all keys here so cache
 * invalidation stays type-safe and refactor-friendly.
 */
export const queryKeys = {
  auth: {
    me: ["auth", "me"] as const,
  },
  users: {
    all: ["users"] as const,
    detail: (id: string) => ["users", id] as const,
  },
} as const;
