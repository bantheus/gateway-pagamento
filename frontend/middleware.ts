import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const apiKey = request.cookies.get("apiKey")?.value;
  const url = new URL(request.url);
  const pathname = url.pathname;

  const isAuthPage = pathname === "/login" || pathname === "/register";
  const isProtectedPage = pathname.startsWith("/invoices");

  if (apiKey && isAuthPage) {
    return NextResponse.redirect(new URL("/invoices", request.url));
  }

  if (!apiKey && isProtectedPage) {
    return NextResponse.redirect(new URL("/register", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/invoices/:path*"],
};
