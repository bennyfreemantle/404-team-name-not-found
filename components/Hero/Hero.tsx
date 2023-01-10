import Image from "next/image";
import React from "react";
import CTAButton from "../CTAButton/CTAButton";

export default function Hero() {
  return (
    <div className="w-full h-[75vh] relative">
      <div className="-z-10">
        <Image
          className="object-cover object-center brightness-50"
          fill
          priority
          src="/HeroBackground.jpg"
          alt="a group of friends watching a movie"
        />
      </div>
      <div className="flex flex-col gap-12 items-center text-center z-0 absolute top-1/3 w-full">
        <h1 className="text-amber-50 text-2xl md:w-2/3 md:text-4xl lg:w-3/5">
          Losing track of all the movies & TV shows that friends recommend to
          you ?
        </h1>
        <div className="py-4 px-8 rounded-lg bg-red-400 text-amber-50 text-xl">
          <CTAButton
            text="Get Started - It's Free"
            handleClick={() => console.log("clicked")}
          />
        </div>
      </div>
    </div>
  );
}
