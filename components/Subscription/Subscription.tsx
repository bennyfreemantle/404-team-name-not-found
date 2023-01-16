import React from "react"
import SubsCard from "../SubsCard/SubsCard";

export default function Subscription() {
	const freeDetail = ["Recommend 30 Movies & Shows", "Web, IOS & Android app", "Upgrade at any time"]
	const criticDetail = ["Recommend 100 Movies & Shows", "Web, IOS & Android app", "Private film critic chat / forum", "Upgrade at any time"]
	const directorDetail = ["Recommend ∞ Movies & Shows", "Web, IOS & Android app", "Private film critic chat / forum", "Be recognised as a top supporter ", "Invited to exclusive prize draws within the movie industry"]
	
	return (
	  <>
		<div>
			<p className="text-white text-center">SUBSCRIPTION</p>
			<div className="flex gap-8 flex-col md:flex-row">
			<SubsCard title="Free" price="£0.00" detail={freeDetail} />
			<SubsCard title="Film Critic" price="£1.99" detail={criticDetail}/>
			<SubsCard title="Film Director" price="£4.99" detail={directorDetail}/>
			</div>
		</div>
	  </>
	);
  }