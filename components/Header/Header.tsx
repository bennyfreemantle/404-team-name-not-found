import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import Logo from "../Logo/Logo";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="flex navbar bg-base-100">
      <div>
        <Logo />
      </div>
      <span className="flex-1"></span>
      <div className="flex items-center gap-5">
        <LoginButton />
        <button className="btn btn-square btn-ghost text-amber-50">
          <RxHamburgerMenu size={35} />
        </button>
      </div>
    </header>
  );
}
