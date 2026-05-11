import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import type { AuthUser } from "@/services/auth.service";

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  setSession: (user: AuthUser, token: string) => void;
  clear: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setSession: (user, token) => set({ user, token, isAuthenticated: true }),
      clear: () => set({ user: null, token: null, isAuthenticated: false }),
    }),
    {
      name: "gt:auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user, token: state.token }),
    },
  ),
);
