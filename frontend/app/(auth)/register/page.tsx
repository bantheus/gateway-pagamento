"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerAction } from "../actions";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome obrigatório" }),
  email: z.string().email().trim().min(1, { message: "Email obrigatório" }),
});

type FormValues = z.infer<typeof formSchema>;

function RegisterPage() {
  const [state, formAction, isPending] = useActionState(registerAction, {
    error: "",
    apiKey: null,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  return (
    <div className="container mx-auto flex h-svh items-center justify-center px-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Cadastro</CardTitle>
          <CardDescription>
            Preencha os dados abaixo para criar sua conta
          </CardDescription>
        </CardHeader>

        <CardContent>
          {state.apiKey ? (
            <div className="space-y-4 text-center">
              <p className="text-muted-foreground text-sm">
                🚨 Guarde bem sua API Key. Ela será exibida apenas uma vez.
              </p>
              <div className="bg-muted rounded-md p-4 font-mono text-sm break-all">
                {state.apiKey}
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form action={formAction} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex. Fulano da Silva" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: fulano@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {state.error && (
                  <p className="text-destructive text-center text-sm">
                    {state.error}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full transition-colors duration-300 hover:bg-blue-400 hover:text-white"
                  disabled={isPending}
                >
                  {isPending ? "Cadastrando..." : "Cadastrar"}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default RegisterPage;
