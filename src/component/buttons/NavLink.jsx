"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  const isActiove = href === "/" ? path === "/" : path.startsWith(href);
  return (
    <Link href={href} className={`${isActiove && "text-green-400 border-2 rounded-md"} font-bold`}>
      {children}
    </Link>
  );
};

export default NavLink;
