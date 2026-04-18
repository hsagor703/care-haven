"use client";
import React from "react";
import Logo from "./Logo";
import Button from "./buttons/Button";
import Link from "next/link";
import NavLink from "./buttons/NavLink";
import { signOut, useSession } from "next-auth/react";
import Swal from "sweetalert2";

const Navbar = () => {
  const session = useSession();
  console.log("from navbar", session);
  const handleLogout = () => {
    signOut();
    Swal.fire("Success", "Logout Successful", "success");
  };
  const links = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink href={"/about"}>About</NavLink>
      </li>
      {session.status === "loading" ? (
        <span className="text-center loading loading-spinner text-success"></span>
      ) : (
        session?.data && (
          <>
            {/* <li>
            <NavLink href={"/booking"}>Booking</NavLink>
          </li> */}
            <li>
              <NavLink href={"/dashboard"}>Dashboard</NavLink>
            </li>
          </>
        )
      )}
    </>
  );
  if (session?.status === "loading") return null;
  return (
    <div>
      <div className="navbar bg-black/50 backdrop-blur-md shadow-sm pl-0 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-1.5">
          {session.status === "loading" ? (
            <span className="text-center loading loading-spinner text-success"></span>
          ) : session.status === "authenticated" ? (
            <>
              <Button onclick={handleLogout}>{"LogOut"}</Button>
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <Button>{"Login"}</Button>
              </Link>
              <Link href={"/register"}>
                <Button>{"Register"}</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
