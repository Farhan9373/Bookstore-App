import React, { useEffect, useState } from "react";
import Login from "./Login";

function Navbar() {
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    const handlecroll = () => {
      if (window.scrollY > 0) {
        setsticky(true);
      } else {
        setsticky(false);
      }
    };
    window.addEventListener("scroll", handlecroll);
    return () => {
      window.addEventListener("scroll", handlecroll);
    };
  });
  const navitem = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a href="/Contact">Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={` max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 ${
          sticky ? " sticky-navbar shadow-md  transition-all ease-in-out" : ""
        }`}
      >
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navitem}
              </ul>
            </div>
            <a className=" text-2xl font-bold cursor-pointer">BOOKSTORE</a>
          </div>
          <div className="navbar-end space-x-2">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navitem}</ul>
            </div>
            <div className=" hidden md:block ">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className=" grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div>
              <a
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
