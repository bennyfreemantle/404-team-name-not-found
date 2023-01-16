import React from "react";

type SubsCardProp = {
  title: string;
  price: string;
  detail: string[];
};

export default function SubsCard({ title, price, detail }: SubsCardProp) {
  return (
    <div className="m-2 w-80 h-96 bg-slate-900 text-white p-8 rounded-lg">
      <div>
        {/* need to position radio button closer to top corner */}
        <input type="radio" name="subscription" className="absolute"></input>
        <h1 className="text-3xl text-center">{title}</h1>
        {/* per month text needs to be smaller than price */}
        <h2 className="text-2xl text-center">{price}/month</h2>
        <ul className="list-disc p-6">
          {detail.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
