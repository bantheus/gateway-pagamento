import { logoutAction } from "@/app/(auth)/actions";
import { CircleDollarSignIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Form from "next/form";
import NavLink from "./nav-link";
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

function UserMenu({ userName }: { userName: string }) {
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
                <SheetTitle className="text-lg">Olá, {userName} 👋</SheetTitle>
                <SheetDescription className="">
                  Acesse as opções abaixo
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-4 p-4">
                <NavLink
                  href="/invoices"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <CircleDollarSignIcon className="size-4" />
                  Invoices
                </NavLink>
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
        <p className="text-foreground text-sm font-medium">
          Olá, {userName} 👋
        </p>

        <NavLink
          href="/invoices"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <CircleDollarSignIcon className="size-4" />
          Invoices
        </NavLink>

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
