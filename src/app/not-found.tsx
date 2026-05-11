import Link from "next/link";

import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 px-4 text-center">
      <p className="text-sm font-medium text-gray-500">404</p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-sm text-gray-600">The page you’re looking for doesn’t exist.</p>
      <Link href={routes.home}>
        <Button variant="outline">Go home</Button>
      </Link>
    </main>
  );
}
