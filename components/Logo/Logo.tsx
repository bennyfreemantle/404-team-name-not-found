import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center btn btn-ghost normal-case text-xl">
      <Link className="flex items-center" href={"/"}>
        <Image src="/logo.svg" width={50} height={50} alt="cinemate logo" />
        <p className="text-amber-50 font-[Righteous] text-4xl">CineMate</p>
      </Link>
    </div>
  );
}

//hello i am testing our branch protection!
