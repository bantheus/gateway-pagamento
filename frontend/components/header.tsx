import { CircleDollarSignIcon } from "lucide-react";
import { cookies } from "next/headers";

import Link from "next/link";
import UserMenu from "./user-menu";

async function Header() {
  const cookieStore = cookies();

  const apiKey = (await cookieStore).get("apiKey")?.value;
  const userName = (await cookieStore).get("userName")?.value;

  const isAuthPage = Boolean(apiKey);

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

        {isAuthPage && <UserMenu userName={userName || "usuário"} />}
      </div>
    </header>
  );
}

export default Header;
