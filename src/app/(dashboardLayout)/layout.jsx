"use client";
import React, { useEffect } from "react";
import DashboardNavbar from "@/component/(dashboardComponent)/DashboardNavbar/Navbar";
import DashboardSidebar from "@/component/(dashboardComponent)/dashboardSidebar/SideBar";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const DashboardLayout = ({ children }) => {
  const session = useSession();
  const path = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (session?.status === "unauthenticated") {
      router.push(`/login?callbackUrl=${path}`);
    }
    // if (session?.status === "authenticated") {
    //   router.push("/dashboard");
    // }
  }, [path, router, session.status]);

  if (session?.status === "loading") {
    return (
      <span className="text-center flex items-center justify-center mx-auto h-screen loading loading-spinner text-success"></span>
    );
  }

  return (
    <section className=" ">
      <div className="">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <DashboardNavbar />
            {/* Page content here */}
            <div className="p-4">{children}</div>
          </div>

          {/* sidebar  */}
          <DashboardSidebar />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
