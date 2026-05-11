import { env } from "@/config/env";

export const siteConfig = {
  name: env.NEXT_PUBLIC_APP_NAME,
  url: env.NEXT_PUBLIC_APP_URL,
  description: "Enterprise-grade Next.js application.",
  ogImage: "/og.png",
  links: {
    github: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
