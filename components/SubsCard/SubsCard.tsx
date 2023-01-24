import React from "react";

type SubsCardProp = {
  title: string;
  price: string;
  detail: string[];
  isSelected: boolean;
  onClick: () => void;
};

export default function SubsCard({
  title,
  price,
  detail,
  isSelected,
  onClick,
}: SubsCardProp) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer m-2 w-full bg-slate-900 text-white p-4 rounded-lg md:h-96 lg:h-72 lg:w-96 ${
        isSelected ? "border-2 border-red-400" : "border-2 border-transparent"
      }`}
    >
      <div>
        <div className="flex flex-col items-center">
          <h1 className="text-amber-50 text-2xl text-center">{title}</h1>
          <h2 className="text-amber-50 text-sm text-center">{price}/month</h2>
        </div>

        <ul className="hidden list-disc p-6 md:block">
          {detail.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
