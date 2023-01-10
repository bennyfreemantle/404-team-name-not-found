import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative">
      <div className="-z-10">
        <Image
          className="object-cover object-center"
          fill
          priority
          src="/HeroBackground.jpg"
          alt="a group of friends watching a movie"
        />
      </div>
      <h1 className="z-0 absolute top-2/4 left-2/4 text-amber-50 text-4xl">
        Hello world
      </h1>
    </div>
  );
}
