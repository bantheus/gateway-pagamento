import { CircleDollarSignIcon } from "lucide-react";
import { cookies } from "next/headers";

import Link from "next/link";
import UserMenu from "./user-menu";

async function Header() {
  const cookieStore = await cookies();

  const isAuthPage = cookieStore.get("apiKey")?.value !== undefined;

  return (
    <header className="bg-card border-b">
      <div className="container mx-auto flex w-full items-center justify-between p-6">
        <Link
          href="/"
          className="flex w-fit items-center gap-2 leading-none font-semibold md:text-xl"
        >
          <CircleDollarSignIcon className="size-5 text-blue-400" />
          Gateway de Pagamentos
        </Link>

        {isAuthPage && <UserMenu />}
      </div>
    </header>
  );
}

export default Header;
