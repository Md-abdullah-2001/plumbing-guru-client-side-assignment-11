import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Asset/favicon.svg";
const NavBar = () => {
  const menuList = (
    <>
      <li className="mr-5 font-bold text-green-700">
        <Link to="/">Home</Link>
      </li>
      <li className="mr-5 font-bold text-green-700">
        <Link to="/">Services</Link>
      </li>
      <li className="mr-5 font-bold text-green-700">
        <Link to="/">Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-fuchsia-500 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuList}
          </ul>
        </div>
        <img src={logo} alt="" srcset="" />
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Plumbing-Guru
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuList}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
