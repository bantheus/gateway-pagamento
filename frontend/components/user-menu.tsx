import { logoutAction } from "@/app/(auth)/actions";
import { CircleDollarSignIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Form from "next/form";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

function UserMenu() {
  return (
    <>
      {/* mobile menu*/}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between py-8">
            <div className="space-y-8">
              <SheetHeader>
                <SheetTitle className="text-lg">Olá, usuário 👋</SheetTitle>
                <SheetDescription className="">
                  Acesse as opções abaixo
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-4 p-4">
                <Link
                  href="/invoices"
                  className="flex w-fit items-center gap-2 font-medium transition-colors duration-300 hover:text-blue-400"
                >
                  <CircleDollarSignIcon className="size-4" />
                  Invoices
                </Link>
              </div>
            </div>

            <SheetFooter>
              <Form action={logoutAction}>
                <Button
                  type="submit"
                  variant="outline"
                  className="flex w-full cursor-pointer items-center justify-center gap-2"
                >
                  <LogOutIcon className="size-4" />
                  Sair
                </Button>
              </Form>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="hidden items-center gap-4 md:flex">
        <Link
          href="/invoices"
          className="text-foreground flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-blue-400"
        >
          <CircleDollarSignIcon className="size-4" />
          Invoices
        </Link>

        <Form action={logoutAction}>
          <Button
            type="submit"
            variant="outline"
            className="flex cursor-pointer items-center gap-2"
          >
            <LogOutIcon className="size-4" />
            Sair
          </Button>
        </Form>
      </div>
    </>
  );
}

export default UserMenu;
