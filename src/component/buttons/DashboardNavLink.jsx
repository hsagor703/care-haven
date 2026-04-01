"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardNavLink = ({ href, children }) => {
  const path = usePathname();
  const isActive =  href==="/dashboard" ? path === "/dashboard" : path.startsWith(href);
  return (
    <Link href={href} className={`${isActive && "text-green-400 border-2 rounded-md"} font-bold`}>
      {children}
    </Link>
  );
};

export default DashboardNavLink;
