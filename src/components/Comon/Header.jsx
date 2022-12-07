import React from "react";
import LOGO from "../../assets/chapclick-logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="p-3 border-gray-500 shadow-xl bg-black ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a
          href="chapclick.ir"
          className="flex items-center bg-white rounded px-2"
        >
          <img
            src={LOGO}
            className="h-6 mr-3 sm:h-10"
            alt="Chap Click Logo"
          />
          <span className="self-center text-black text-sm font-semibold whitespace-nowrap ">
            Chap Click
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent ">
            <li>
              <Link
                to="/skills"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 "
                aria-current="page"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="/team-members"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 "
                aria-current="page"
              >
                Team Members
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 "
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 "
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 "
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
