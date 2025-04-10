"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

function NavLink({
  href,
  children,
  className,
  activeClassName = "text-blue-500",
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "w-fit transition-colors duration-300",
        className,
        isActive ? activeClassName : "hover:text-blue-400",
      )}
    >
      {children}
    </Link>
  );
}

export default NavLink;
