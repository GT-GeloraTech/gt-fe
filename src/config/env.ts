import { z } from "zod";

/**
 * Server-only env. Never imported in client components.
 */
const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  API_SECRET: z.string().min(1).optional(),
});

/**
 * Public env. Must be prefixed with NEXT_PUBLIC_ to be exposed to the browser.
 */
const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_API_URL: z.string().url().default("http://localhost:3000/api"),
  NEXT_PUBLIC_APP_NAME: z.string().default("Gelora Tech"),
});

const processEnv = {
  NODE_ENV: process.env.NODE_ENV,
  API_SECRET: process.env.API_SECRET,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
};

const merged = serverSchema.merge(clientSchema);

const parsed =
  typeof window === "undefined" ? merged.safeParse(processEnv) : clientSchema.safeParse(processEnv);

if (!parsed.success) {
  console.error(
    "Invalid environment variables:",
    JSON.stringify(parsed.error.flatten().fieldErrors, null, 2),
  );
  throw new Error("Invalid environment variables. See logs above.");
}

export const env = parsed.data as z.infer<typeof serverSchema> & z.infer<typeof clientSchema>;
