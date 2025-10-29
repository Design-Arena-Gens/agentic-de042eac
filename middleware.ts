import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next({ request });

  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'", // inline for demo only; replace with nonce in production
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://images.unsplash.com https://res.cloudinary.com https://cdn.sanity.io https://images.ctfassets.net",
    "media-src 'self' https://cdn.coverr.co",
    "connect-src 'self'",
    "font-src 'self' https://fonts.gstatic.com",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "geolocation=(), camera=(), microphone=()");

  return response;
}

export const config = {
  matcher: "/((?!_next|_vercel|api|.*\\.).*)",
};
