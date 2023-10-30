/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="poppins">
      <nav className=" flex justify-between items-center bg-white container max-w-[1816px] mx-auto text-center py-[20px] px-4 relative z-[1]">
        <div className="flex">
          <img src="./Logo.png" alt="" />

          <div className="hidden absolute transform  translate-x-80 translate-y-3  lg:mx-auto gap-5 lg:flex  lg:items-center  lg:w-auto lg:space-x-6">
            <a className="poppins text-lg font-bold text-neutral-400" href="#">
              Features
            </a>

            <a className="poppins text-lg font-bold text-neutral-400" href="#">
              Buy crypto
            </a>
          </div>
        </div>

        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center  text-neutral-400 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <a
          className="hidden lg:inline-block py-3 px-9 rounded-3xl bg-[#456BF1] text-base text-white font-semibold transition duration-200"
          href="#"
        >
          Get started
        </a>
      </nav>
      <div className={`navbar-menu relative z-50 ${menuOpen ? "" : "hidden"}`}>
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={toggleMenu}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
            <img src="./Logo.png" alt="" />
            </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 poppins text-lg font-bold  text-neutral-400  hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 poppins text-lg font-bold text-neutral-400  hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Buy crypto
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="hidden lg:inline-block py-3 px-9 rounded-3xl  bg-primary-100 hover:bg-blue-600 text-base text-white font-semibold transition duration-200"
                href="#"
              >
                Get started
              </a>
            </div>
            <p className="poppins font-semibold my-4 text-sm text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
};
