import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-5 grid grid-cols-2">
      {/* left */}
      <div className="flex">
        <h1>logo here</h1>
      </div>

      {/* right */}
      <div className="flex space-x-4 justify-end items-center md:flex">
        <h1>Home</h1>
        <h1>Pickup Info</h1>
        <h1>About</h1>
        <h1>Contact</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
