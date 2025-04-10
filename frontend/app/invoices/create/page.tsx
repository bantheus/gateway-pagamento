import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InvoiceForm from "./components/invoice-form";

function CreateInvoicePage() {
  return (
    <div className="container mx-auto flex w-full max-w-4xl items-center justify-center p-6 md:h-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Nova Fatura</CardTitle>
          <CardDescription className="text-pretty">
            Preencha os detalhes da fatura abaixo para gerar uma nova fatura.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InvoiceForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateInvoicePage;
