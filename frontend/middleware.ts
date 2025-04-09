import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const apiKey = request.cookies.get("apiKey")?.value;
  const pathname = request.nextUrl.pathname;

  const isAuthRoute = pathname.startsWith("/login");
  const isProtectedRoute = pathname.startsWith("/invoices");

  if (!apiKey && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (apiKey && isAuthRoute) {
    return NextResponse.redirect(new URL("/invoices", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/invoices/:path*"],
};
