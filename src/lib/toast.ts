import { toast as sonner } from "sonner";

/**
 * Centralized toast helpers. Consume this instead of importing `sonner`
 * directly so we can swap libs or extend behavior in one place.
 */
export const toast = {
  success: (message: string, description?: string) => sonner.success(message, { description }),
  error: (message: string, description?: string) => sonner.error(message, { description }),
  info: (message: string, description?: string) => sonner.info(message, { description }),
  warning: (message: string, description?: string) => sonner.warning(message, { description }),
  loading: (message: string) => sonner.loading(message),
  promise: sonner.promise,
  dismiss: sonner.dismiss,
};
