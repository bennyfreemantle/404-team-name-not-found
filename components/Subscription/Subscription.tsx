import React from "react";
import SubsCard from "../SubsCard/SubsCard";
import { useState } from "react";
import CTAButton from "../CTAButton/CTAButton"

//if one button is checked (checked = true) then the other two are not checked (false)
// when user clicks onto a new card, the state of previous checked button should return to being false
//if one is set to true, the other two should be set to false
// so far, the issue we're having is that the state doesn't change when the next item is clicked (ie it's being changed to true on click, and staying true)


export default function Subscription() {
  const [checkedFree, setCheckedFree] = useState(false);
  const [checkedCritic, setCheckedCritic] = useState(false);
  const [checkedDirector, setCheckedDirector] = useState(false);

  const checkedStyleFree = checkedFree ? "border border-red-400" : "";
  const checkedStyleCritic = checkedCritic ? "border border-red-400" : "";
  const checkedStyleDirector = checkedDirector ? "border border-red-400" : "";

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

  return (
    <>
      <div>
        <p className="text-white text-center text-4xl my-8">SUBSCRIPTION</p>
        <div className="flex gap-8 flex-col md:flex-row">
          <SubsCard
            onClick={() => setCheckedFree(!checkedFree)}
            className={checkedStyleFree}
            title="Free"
            price="£0.00"
            detail={freeDetail}
          />
          <SubsCard
            onClick={() => setCheckedCritic(!checkedCritic)}
            className={checkedStyleCritic}
            title="Film Critic"
            price="£1.99"
            detail={criticDetail}
          />
          <SubsCard
            onClick={() => setCheckedDirector(!checkedDirector)}
            className={checkedStyleDirector}
            title="Film Director"
            price="£4.99"
            detail={directorDetail}
          />
        </div>
		<div className="flex justify-center p-10" >
		<CTAButton className="py-4 px-8 rounded-lg bg-red-400 text-amber-50 text-lg uppercase font-bold hover:bg-red-500 hover:scale-105 hover:transition-all m-2 w-80" text="Next Step" handleClick={()=>console.log("clicked")} />
		</div>
      </div>
    </>
  );
}
