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
    <header className="flex h-20 navbar bg-base-100 ">
      <Logo />
      <span className="flex-1"></span>
      <div className="flex items-center gap-5">
        {disableButton ? "" : <LoginButton />}
        <Navbar />
      </div>
    </header>
  );
}
