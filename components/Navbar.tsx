"use client";
import { useState } from "react";
// import Link from "next/link";

const Navbar = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen((prevState) => !prevState);
  // };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white relative z-50 border-b-2 border-black px-10">
      <div className="max-w-screen-xl flex items-center md:justify-between mx-auto py-5">
        {/* Logo Section */}
        <div className="flex flex-row font-poppins font-bold text-[26px] z-10 items-center relative text-black">
          Repeto
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex justify-around gap-8 text-[17.5px] font-inter text-black">
          {/* <Link href="/">Home</Link> */}
          {/* <Link href="/Gallery">Gallery</Link>
          <Link href="/Calender">Calendar</Link> */}

          <div className="relative">
            {/* <button
              onClick={toggleDropdown}
              className="flex items-center focus:outline-none"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button> */}

            {/* {dropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                <Link
                  href="/Newsletter"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Newsletter
                </Link>
                <Link
                  href="/Introduction"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Introduction
                </Link>
                <Link
                  href="/Reviews"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Reviews
                </Link>
              </div>
            )} */}
          </div>
        </div>

        {/* ADD NEW+ Button (Desktop) */}
        <div className="hidden md:flex ml-auto">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeWusUIDiOLsRK4Wjnj0xuHuuHaOyKb7x_ItihLGA12IORzxw/viewform?usp=header/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-black text-white rounded-3xl hover:bg-white hover:text-black border border-black transition font-semibold"
          >
            ADD NEW+
          </a>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-auto flex items-center text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h19M5 6h15M5 18h15" />
          </svg>
        </button>

        {/* Repeto Button */}
        {/* <button>
        <Link href="/">
          <div className="w-[117px] h-[45px] bg-[#000000] rounded-3xl text-white font-davidLibre hidden md:flex justify-center items-center text-[15.5px] hover:bg-white drop-shadow-lg hover:text-black">
            Home
          </div>
        </Link>
        </button> */}
      </div>

      {/* Dropdown Menu for Small Screens */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden absolute left-0 top-20 w-full space-y-2 bg-white text-center shadow-lg z-40 py-4`}
      >
        {/* ADD NEW+ Button inside Mobile Dropdown */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeWusUIDiOLsRK4Wjnj0xuHuuHaOyKb7x_ItihLGA12IORzxw/viewform?usp=header/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 bg-black text-white rounded-3xl hover:bg-white hover:text-black border border-black transition font-semibold mx-4"
        >
          ADD NEW+
        </a>

        <div className="relative text-center">
          {/* <button
            onClick={toggleDropdown}
            className="flex items-center justify-center w-full px-4 py-2 text-black focus:outline-none"
          >
            More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button> */}

          {/* {dropdownOpen && (
            <div className="absolute  w-full bg-white border rounded-md shadow-lg z-50">
              <Link
                href="/option1"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Option 1
              </Link>
              <Link
                href="/option2"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Option 2
              </Link>
              <Link
                href="/option3"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Option 3
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
