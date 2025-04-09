"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronRightIcon,
  InfoIcon,
  Loader2Icon,
  TriangleAlertIcon,
} from "lucide-react";
import Form from "next/form";
import { useActionState, useState } from "react";
import { loginAction } from "../actions";

function AuthForm() {
  const [apiKey, setApiKey] = useState("");
  const [state, formAction, isPending] = useActionState(loginAction, {
    error: "",
  });

  const isDisabled = apiKey.trim() === "" || isPending;

  return (
    <Form action={formAction} className="flex flex-col space-y-8">
      <div className="space-y-2">
        <Label htmlFor="apiKey">API Key</Label>
        <div className="flex gap-2">
          <Input
            id="apiKey"
            placeholder="Digite sua API Key"
            name="apiKey"
            value={apiKey}
            disabled={isPending}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <Button
            type="submit"
            disabled={isDisabled}
            className="cursor-pointer transition-colors duration-300 hover:bg-blue-400 hover:text-white"
          >
            {isPending ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <ChevronRightIcon />
            )}
          </Button>
        </div>
      </div>

      {state.error && (
        <Alert variant="destructive">
          <AlertTitle className="flex items-center gap-1">
            <TriangleAlertIcon className="size-4" />
            Erro ao fazer login
          </AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      <Alert>
        <AlertTitle className="flex items-center gap-1">
          <InfoIcon className="size-4 text-blue-400" />
          Como obter uma API Key?
        </AlertTitle>
        <AlertDescription>
          Para obter sua API Key, você precisa criar uma conta de comerciante.
          Entre em contato com o nosso suporte para mais informações.
        </AlertDescription>
      </Alert>
    </Form>
  );
}

export default AuthForm;
