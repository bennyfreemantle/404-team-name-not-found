import React from "react";
import SubsCard from "../SubsCard/SubsCard";
import { useState } from "react";
import CTAButton from "../CTAButton/CTAButton";
import Link from "next/link";

const freeDetail = [
  "Recommend 30 Movies & Shows",
  "Web, IOS & Android app",
  "Upgrade at any time",
];
const criticDetail = [
  "Recommend 100 Movies & Shows",
  "Web, IOS & Android app",
  "Private film critic chat / forum",
  "Upgrade at any time",
];
const directorDetail = [
  "Recommend ∞ Movies & Shows",
  "Web, IOS & Android app",
  "Private film critic chat / forum",
  "Be recognised as a top supporter ",
  "Invited to exclusive prize draws within the movie industry",
];

export default function Subscription() {
  const [checked, setChecked] = useState("PREMIUM");
  return (

    <section id="subscription-section" className="container p-3 mx-auto">
      <p className="text-amber-50 text-center text-4xl my-8">SUBSCRIPTION</p>
      <div className="flex flex-col items-center md:flex-row md:justify-center" data-testid="SubsCard">
        <SubsCard
          title="Film Enthusiast"
          price="£0.00"
          detail={freeDetail}
          isSelected={checked === "FREE"}
          onClick={() => setChecked("FREE")}
        />
        <SubsCard
          title="Film Critic"
          price="£1.99"
          detail={criticDetail}
          isSelected={checked === "PREMIUM"}
          onClick={() => setChecked("PREMIUM")}
        />
        <SubsCard
          title="Film Director"
          price="£4.99"
          detail={directorDetail}
          isSelected={checked === "PRO"}
          onClick={() => setChecked("PRO")}
        />
      </div>
      <div className="flex justify-center p-10">
        <Link href={"/login"}>

          <CTAButton
            className="py-4 px-8 rounded-lg bg-red-400 text-amber-50 text-lg uppercase font-bold hover:bg-red-500 hover:scale-105 hover:transition-all m-2 w-80"
            text="Next Step"
          />
        </Link>
      </div>
    </section>
  );
}
