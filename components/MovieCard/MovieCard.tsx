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
    <div className="w-[10vw]  relative bg-zinc-50 rounded-md overflow-hidden m-4">
        <Image className="absolute z-10 left-0 top-0" src="/bookmark.svg" alt="bookmark icon" width={40} height={40}/>
        <Image className="h-200 w-full relative object-cover object-top" width={200} height={280} src="/AvatarImage.jpg" alt="avatar movie poster"/>
        
      <p className="text-slate-700 pl-2">Avatar: The Way of Water</p>
      <div className="inline-block space-x-2 bg-slate-800 w-full">
      <p className="text-amber-50 text-md inline-block font-bold">⭐6</p>
        <p className="text-amber-50 text-sm inline-block italic">Recommended by Ben!👍</p>
      </div>
  
    </div>
  )
}
