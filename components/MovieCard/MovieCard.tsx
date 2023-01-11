import RecButton from '../RecButton/RecButton';
import React from 'react';
import Image from 'next/image';
//movie card
//image - sort out sizing?!
//rating - star icon, and number
//movie title
//"recommended by" banner


export default function MovieCard() {
  return (
    <div className="w-[10vw]  relative bg-zinc-50">
        <Image className="abosolute z-10 absolute left-0 top-0" src="/bookmark.svg" alt="bookmark icon" width={20} height={20}/>
        <Image className="relativeobject-cover object-center" width={200} height={280} src="/AvatarImage.jpg" alt="avatar movie poster"/>
        <p className="text-slate-700">⭐6</p>
      <p className="text-slate-700">Avatar: The Way of Water</p>
  
    </div>
  )
}
