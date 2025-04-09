import { CircleDollarSignIcon } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-card border-b">
      <div className="container mx-auto w-full p-6">
        <Link
          href="/"
          className="flex w-fit items-center gap-2 text-xl leading-none font-semibold"
        >
          <CircleDollarSignIcon className="size-5 text-blue-400" />
          Gateway de Pagamentos
        </Link>
      </div>
    </header>
  );
}

export default Header;
