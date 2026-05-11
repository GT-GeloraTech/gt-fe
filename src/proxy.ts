import { NextResponse, type NextRequest } from "next/server";

/**
 * Edge proxy (formerly "middleware" in Next ≤15). Wire auth/session/locale
 * checks here. Runs on every matched request — keep it lean.
 */
export function proxy(_request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("X-App", "gt-fe");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp)).*)"],
};
