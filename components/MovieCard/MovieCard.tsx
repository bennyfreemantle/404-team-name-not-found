import RecButton from '../RecButton/RecButton';
//movie card
//add to list button
//image - sizing needs to be relative!
//rating - star icon, and number
//movie title
//recommend button

import React from 'react';
import Image from 'next/image';

export default function MovieCard() {
  return (
    <div className="w-[10vw]  relative bg-zinc-50">
        <Image className="abosolute z-10 absolute left-0 top-0" src="/bookmark.svg" alt="bookmark icon" width={20} height={20}/>
        <Image className="relativeobject-cover object-center" width={200} height={280} src="/AvatarImage.jpg" alt="avatar movie poster"/>
        <p>⭐6</p>
      <p>Avatar: The Way of Water</p>
  
    </div>
  )
}
