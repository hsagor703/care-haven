import React from "react";
import Logo from "./Logo";
import Button from "./buttons/Button";
import Link from "next/link";
import NavLink from "./buttons/NavLink";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink href={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink href={'/baby-care'}>Baby Care </NavLink>
      </li>
      <li>
        <NavLink href={'/elderly-service'}>Elderly Service</NavLink>
      </li>
      <li>
        <NavLink href={'/sick-people-service'}>Sick People Service</NavLink>
      </li>
      <li>
        <NavLink href={'/about'}>About</NavLink>
      </li>
    </>
  );
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
          <Button>{"Login"}</Button>
          <Button>{"Register"}</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
