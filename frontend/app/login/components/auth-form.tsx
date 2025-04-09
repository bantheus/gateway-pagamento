import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRightIcon, InfoIcon } from "lucide-react";
import Form from "next/form";

function AuthForm() {
  return (
    <Form action="" className="flex flex-col space-y-8">
      <div className="space-y-2">
        <Label htmlFor="apiKey">API Key</Label>
        <div className="flex gap-2">
          <Input id="apiKey" placeholder="Digite sua API Key" name="apiKey" />
          <Button
            type="submit"
            className="transition-colors duration-300 hover:bg-blue-400 hover:text-white"
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>

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
