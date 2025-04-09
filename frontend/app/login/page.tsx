import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthForm from "./components/auth-form";

function LoginPage() {
  return (
    <div className="container mx-auto flex flex-1 items-center justify-center px-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Autenticação</CardTitle>
          <CardDescription>
            Insira sua API Key para acessar o sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
