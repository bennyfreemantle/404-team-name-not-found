import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import LoginButton from "../LoginButton/LoginButton";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <nav className="flex items- justify-end">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="btn btn-square btn-ghost text-amber-50"
        >
          <RxHamburgerMenu size={50} />
          {/* {isNavOpen ? "" : <RxHamburgerMenu size={50} />} */}
        </button>
      </nav>

      {isNavOpen && (
        <div className="z-50 fixed right-0 top-0 bottom-0 bg-slate-800 w-full md:w-80 opacity-95">
          <ul className="relative h-full flex flex-col gap-10 my-8 items-center text-amber-50">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="btn btn-square btn-ghost text-amber-50"
            >
              <IoCloseSharp size={50} />
            </button>
            <Link href="/profile" onClick={() => setIsNavOpen(false)}>
              <li className="text-2xl">My Account</li>
            </Link>
            <Link href="/allmovies" onClick={() => setIsNavOpen(false)}>
              <li className="text-2xl">All Movies</li>
            </Link>
            <Link href="/movierecs" onClick={() => setIsNavOpen(false)}>
              <li className="text-2xl">Your Movie List</li>
            </Link>
            <div className="absolute bottom-20">
              <LoginButton />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
