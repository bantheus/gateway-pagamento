"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CreditCardIcon } from "lucide-react";
import Form from "next/form";

function InvoiceForm() {
  return (
    <Form action="as">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* info da fatura */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Informações da fatura</h2>
          <div className="space-y-2">
            <Label htmlFor="amount">Valor (R$)</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              step={0.01}
              min={0}
              defaultValue={0.01}
              placeholder="0,00"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Descrição da fatura"
              defaultValue={"Descrição da fatura"}
              rows={6}
              className="resize-none"
            />
          </div>
        </div>

        <Separator className="md:hidden" />

        {/* info do cartao */}
        <div>
          <h2 className="mb-6 text-xl font-semibold">Dados do cartão</h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Número do Cartão</Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234123412341234"
                  defaultValue={"1234123412341234"}
                  maxLength={16}
                  className="pl-10"
                />
                <CreditCardIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 transform" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Data de Expiração</Label>
                <Input
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/AA"
                  defaultValue={"12/25"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  defaultValue={"123"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardholderName">Nome no Cartão</Label>
              <Input
                id="cardholderName"
                name="cardholderName"
                placeholder="Nome do Titular"
                defaultValue={"Nome do Titular"}
              />
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex flex-col justify-end gap-4 sm:flex-row">
        <Button variant="outline" type="button" className="cursor-pointer">
          Cancelar
        </Button>
        <Button
          type="submit"
          className="cursor-pointer transition-colors duration-300 hover:bg-blue-400 hover:text-white"
        >
          <CreditCardIcon className="size-4" />
          Processar Pagamento
        </Button>
      </div>
    </Form>
  );
}

export default InvoiceForm;
