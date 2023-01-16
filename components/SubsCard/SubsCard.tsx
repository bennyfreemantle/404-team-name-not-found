import React from "react";

type SubsCardProp = {
  title: string;
  price: string;
  detail: string[];
};

export default function SubsCard({ title, price, detail }: SubsCardProp) {
  return (
    <div  className=" bg-slate-900 text-white p-8">

		<div>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <ul className="list-disc">
        {detail.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
	  </div>
    </div>
  );
}
