import { apiClient } from "@/services/api-client";
import type { LoginInput } from "@/validators/auth.schema";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface LoginResponse {
  user: AuthUser;
  token: string;
}

export const authService = {
  login: async (payload: LoginInput): Promise<LoginResponse> => {
    const { data } = await apiClient.post<LoginResponse>("/auth/login", payload);
    return data;
  },
  logout: async (): Promise<void> => {
    await apiClient.post("/auth/logout");
  },
  me: async (): Promise<AuthUser> => {
    const { data } = await apiClient.get<AuthUser>("/auth/me");
    return data;
  },
};
