import React from "react";

type CTAButtonProp = {
  className?: string;
  text: string;
  handleClick: () => void;
};

export default function CTAButton({
  className,
  text,
  handleClick,
}: CTAButtonProp) {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
