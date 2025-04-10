"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function registerAction(
  _: { error: string; apiKey: string | null },
  formData: FormData,
): Promise<{ error: string; apiKey: string | null }> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  const response = await fetch("http://localhost:8080/accounts", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return { error: "Erro ao criar conta. Tente novamente.", apiKey: null };
  }

  const data = await response.json();
  return { error: "", apiKey: data.api_key };
}

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

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("apiKey");

  redirect("/register");
}
