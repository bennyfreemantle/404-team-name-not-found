import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

export default function Header({
  disableButton = false,
}: {
  disableButton?: boolean;
}) {
  return (
    <header className="container flex justify-between mx-auto p-3">
      <Logo />
      <div className="flex items-center gap-8">
        <div className="hidden md:flex">
          {disableButton ? "" : <LoginButton />}
        </div>
        <Navbar />
      </div>
    </header>
  );
}
