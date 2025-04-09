"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(_: { error: string }, formData: FormData) {
  const apiKey = formData.get("apiKey");

  const response = await fetch("http://localhost:8080/accounts", {
    headers: {
      "X-API-Key": apiKey as string,
    },
  });

  if (!response.ok) {
    return { error: "API Key inválida. Verifique e tente novamente." };
  }

  const cookieStore = await cookies();
  cookieStore.set("apiKey", apiKey as string, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  redirect("/invoices");
}
