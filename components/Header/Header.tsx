import { useUser } from "@supabase/auth-helpers-react";
import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Header() {
  const [loginUIVisible, setLoginUIVisible] = useState(true);

  const user = useUser();

  console.log(user);

  return (
    <header>
      <div className="container flex justify-between mx-auto p-3">
        <Logo />
        <div className="flex items-center gap-8">
          <Navbar />
        </div>
      </div>
      {user ? (
        <div className="container flex flex-col items-center text-center mx-auto p-3 md:items-end">
          <div className="flex gap-2 items-center text-amber-50 font-bold">
            Account
            <div>
              {loginUIVisible ? (
                <AiFillEye
                  size={30}
                  className="text-amber-50 cursor-pointer"
                  onClick={() => setLoginUIVisible((prev) => !prev)}
                />
              ) : (
                <AiFillEyeInvisible
                  size={30}
                  className="text-amber-50 cursor-pointer"
                  onClick={() => setLoginUIVisible((prev) => !prev)}
                />
              )}
            </div>
          </div>
          {user && loginUIVisible ? (
            <div>
              <p className="text-amber-50 text-xs font-semibold">
                {user.email}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
