import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { routes } from "@/constants/routes";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {siteConfig.name} · Next.js Foundation
        </h1>
        <p className="mt-4 text-base text-gray-600">{siteConfig.description}</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href={routes.login}>
            <Button>Try the login example</Button>
          </Link>
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer noopener">
            <Button variant="outline">Next.js docs</Button>
          </a>
        </div>
      </div>
    </main>
  );
}
