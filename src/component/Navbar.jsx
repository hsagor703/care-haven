"use client";
import React from "react";
import Logo from "./Logo";
import Button from "./buttons/Button";
import Link from "next/link";
import NavLink from "./buttons/NavLink";
import { signOut, useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { TbLogin, TbLogin2 } from "react-icons/tb";
import { RiMenu2Line } from "react-icons/ri";

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
  // if (session?.status === "loading") return null;
  return (
    <div>
      <div className="navbar bg-black/50 backdrop-blur-md shadow-sm pl-4 md:pl-0 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown mr-2 md:mr-0">
            <div tabIndex={0} role="button" className=" lg:hidden ">
              <RiMenu2Line color="#00A63E" size={25}/>
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
        <div className="navbar-end space-x-1.5 ">
          {session.status === "loading" ? (
            <span className="text-center loading loading-spinner text-success"></span>
          ) : session.status === "authenticated" ? (
            <>
              <Button onclick={handleLogout}>{"LogOut"}</Button>
            </>
          ) : (
            <>

            <div className="hidden md:flex gap-2 ">
              <Link href={"/login"}>
                <Button>{"Login"}</Button>
              </Link>
              <Link href={"/register"}>
                <Button>{"Register"}</Button>
              </Link>
            </div>

            <div className="md:hidden flex justify-center items-center">
              <Link href={"/login"}> <TbLogin2 color="#00A63E" size={40}/> </Link>
              <Link href={"/register"}> <TbLogin color="#ff0000" size={40}/> </Link>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
