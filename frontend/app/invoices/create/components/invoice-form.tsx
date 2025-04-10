"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCardIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  amount: z.number().positive(),
  description: z.string().min(1),
  cardNumber: z.string().length(16),
  expiryDate: z.string().length(5),
  cvv: z.string().length(3),
  cardholderName: z.string().min(1),
});

type FormValues = z.infer<typeof formSchema>;

function InvoiceForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0.0,
      description: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardholderName: "",
    },
  });

  const isFormValid = form.formState.isValid;

  return (
    <Form {...form}>
      <form action="">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* info da fatura */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Informações da fatura</h2>

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Valor (R$)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step={0.01}
                      min={0}
                      placeholder="0,00"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descrição da fatura"
                      rows={6}
                      className="min-h-32 resize-none"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Separator className="md:hidden" />

          {/* info do cartao */}
          <div>
            <h2 className="mb-6 text-xl font-semibold">Dados do cartão</h2>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Número do Cartão</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="1234123412341234"
                          maxLength={16}
                          className="pl-10"
                          {...field}
                        />
                        <CreditCardIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 transform" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Data de Expiração</FormLabel>
                      <FormControl>
                        <Input placeholder="MM/AA" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>CVV</FormLabel>
                      <FormControl>
                        <Input placeholder="123" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="cardholderName"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Nome no Cartão</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do Titular" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
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
            disabled={!isFormValid}
            className="cursor-pointer transition-colors duration-300 hover:bg-blue-400 hover:text-white"
          >
            <CreditCardIcon className="mr-2 size-4" />
            Processar Pagamento
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default InvoiceForm;
