import React from 'react'

type CTAButtonProp = {
    text: string,
    handleClick: ()=>void
}

export default function CTAButton({text, handleClick}: CTAButtonProp) {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
