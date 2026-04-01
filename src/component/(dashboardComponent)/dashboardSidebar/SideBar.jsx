import DashboardNavLink from "@/component/buttons/DashboardNavLink";
import NavLink from "@/component/buttons/NavLink";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

const DashboardSidebar = () => {
  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        {/* Sidebar content here */}
        <ul className="menu w-full grow">
          {/* logo  */}
          {/* List item */}
          <li>
            <button
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Care Haven"
            >
              {/* Home icon */}
              <Link href={"/"} className="flex gap-2 items-center">
                <Image
                  className="h-6 w-6"
                  alt="care haven"
                  src={"/assets/logo.png"}
                  width={400}
                  height={400}
                />
                <span className="is-drawer-close:hidden linear-text font-bold">
                  Care Haven
                </span>
              </Link>
            </button>
          </li>
          {/* List item */}
          <li>
            <DashboardNavLink
              href={"/dashboard"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Homepage"
            >
              {/* Home icon */}
              <IoHomeOutline />
              <span className="is-drawer-close:hidden">Dashboard Home</span>
            </DashboardNavLink>
          </li>
          {/* List item */}
          <li>
            <DashboardNavLink
              href={"/dashboard/my-booking"}
              // <button
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="My Booking Items"
            >
              {/* Home icon */}
              <FaRegBookmark />
              <span className="is-drawer-close:hidden">My Booking Items</span>
              {/* </button> */}
            </DashboardNavLink>
          </li>

          {/* List item */}
         
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
