import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <nav className="flex items-center">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="btn btn-square btn-ghost text-amber-50"
        >
          {isNavOpen ? "" : <RxHamburgerMenu size={35} />}
        </button>
      </nav>

      {isNavOpen && (
        <div className="fixed top-0 right-0 bottom-0 bg-slate-800 z-20 w-full md:w-80 opacity-95">
          <ul className="flex flex-col gap-10 my-8 items-center text-amber-50">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="btn btn-square btn-ghost text-amber-50"
            >
              <IoCloseSharp size={50} />
            </button>
            <Link href="/" onClick={() => setIsNavOpen(false)}>
              <li className="text-2xl">My Account</li>
            </Link>
            <Link href="/" onClick={() => setIsNavOpen(false)}>
              <li className="text-2xl">All Movies</li>
            </Link>
            <Link href="/" onClick={() => setIsNavOpen(false)}>
              <li className="text-2xl">Top 100 List</li>
            </Link>
            <Link href="/" onClick={() => setIsNavOpen(false)}>
              <li className="text-2xl">Your Movie List</li>
            </Link>
            <Link href="/" onClick={() => setIsNavOpen(false)}>
              <li className="text-2xl">Friends List</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
