import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="flex navbar bg-base-100">
      <div>
        <Logo />
      </div>
      <span className="flex-1"></span>
      <div className="flex items-center gap-5">
        <LoginButton />
        <Navbar />
      </div>
    </header>
  );
}
