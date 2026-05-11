import axios, { type AxiosError, type AxiosInstance } from "axios";

import { env } from "@/config/env";

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly data?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

const TIMEOUT_MS = 15_000;

function createApiClient(): AxiosInstance {
  const instance = axios.create({
    baseURL: env.NEXT_PUBLIC_API_URL,
    timeout: TIMEOUT_MS,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });

  instance.interceptors.request.use((config) => {
    // Auth token attachment goes here once auth provider is wired.
    // Reads from cookie/session/store — keep client-only access guarded.
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ message?: string }>) => {
      const status = error.response?.status ?? 0;
      const message = error.response?.data?.message ?? error.message ?? "Unexpected request error";

      return Promise.reject(new ApiError(status, message, error.response?.data));
    },
  );

  return instance;
}

export const apiClient = createApiClient();
