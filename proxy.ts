import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Pages that do NOT require authentication
const PUBLIC_PATHS = [
  "/",
  "/login",
  "/privacy",
  "/roles",
  "/market",
  "/truths",
];

// auth() wraps the handler and injects session data into req.auth
export const proxy = auth((req) => {
  const { pathname } = req.nextUrl;

  const isPublic =
    PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/")) ||
    pathname.startsWith("/api/auth");

  if (!req.auth && !isPublic) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
