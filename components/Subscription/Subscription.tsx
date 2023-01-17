import React from "react"
import SubsCard from "../SubsCard/SubsCard";
import { useState } from "react";

export default function Subscription() {
	const [checked, setChecked] = useState(false)
	const [checked2, setChecked2] = useState(false)
	const [checked3, setChecked3] = useState(false)



	const checkedStyle = checked ? "border border-red-400": "";
	const checkedStyle2 = checked2 ? "border border-red-400": "";
	const checkedStyle3 = checked3 ? "border border-red-400": "";


	
	const freeDetail = ["Recommend 30 Movies & Shows", "Web, IOS & Android app", "Upgrade at any time"]
	const criticDetail = ["Recommend 100 Movies & Shows", "Web, IOS & Android app", "Private film critic chat / forum", "Upgrade at any time"]
	const directorDetail = ["Recommend ∞ Movies & Shows", "Web, IOS & Android app", "Private film critic chat / forum", "Be recognised as a top supporter ", "Invited to exclusive prize draws within the movie industry"]
	
	return (
	  <>
		<div>
			<p className="text-white text-center">SUBSCRIPTION</p>
			<div className="flex gap-8 flex-col md:flex-row">
			<SubsCard onClick={()=> setChecked(!checked)} className={checkedStyle}  title="Free" price="£0.00" detail={freeDetail} />
			<SubsCard onClick={()=> setChecked2(!checked2)} className={checkedStyle2} title="Film Critic" price="£1.99" detail={criticDetail}/>
			<SubsCard onClick={()=> setChecked3(!checked3)} className={checkedStyle3} title="Film Director" price="£4.99" detail={directorDetail}/>
			</div>
		</div>
	  </>
	);
  }