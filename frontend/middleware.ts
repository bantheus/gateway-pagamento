import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const apiKey = request.cookies.get("apiKey")?.value;
  const userName = request.cookies.get("userName")?.value;

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

  if (apiKey && !userName) {
    try {
      const res = await fetch("http://localhost:8080/accounts", {
        headers: {
          "X-API-Key": apiKey,
        },
      });

      if (res.ok) {
        const data = await res.json();
        const response = NextResponse.next();
        response.cookies.set("userName", data.name, {
          path: "/",
          maxAge: 60 * 60 * 24,
        });

        return response;
      }
    } catch (error) {
      console.error("Erro ao buscar nome no middleware:", error);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/invoices/:path*"],
};
