
import React from "react";
import DashboardNavbar from "@/component/(dashboardComponent)/DashboardNavbar/Navbar";
import DashboardSidebar from "@/component/(dashboardComponent)/dashboardSidebar/SideBar";

const DashboardLayout = ({children}) => {
  return (
    <section className=" ">
      <div className="">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <DashboardNavbar/>
            {/* Page content here */}
            <div className="p-4">{children}</div>
          </div>

          {/* sidebar  */}
          <DashboardSidebar/>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
