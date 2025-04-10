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
    <div className="container mx-auto w-full max-w-3xl p-6">
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
