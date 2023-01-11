import RecButton from '../RecButton/RecButton';
import React from 'react';
import Image from 'next/image';
//movie card
//image - sort out sizing?!
//rating - star icon, and number
//movie title
//"recommended by" banner

{/* <div className="card">
      <Image src={props.src} />
      <Title title={props.name} />
      <Paragraph description={props.description} />
      <Button text="PLAY" id="playButton" />
      <Button text="MY LIST" id="listButton" />
    </div> */}


export default function MovieCard() {
  return (
    <div className="w-[16vw]  relative bg-zinc-50 rounded-md overflow-hidden m-4 drop-shadow-xl">
        <Image className="absolute z-10 left-0 top-0" src="/bookmark.svg" alt="bookmark icon" width={40} height={40}/>
        <Image className="h-200 w-full relative object-cover object-top" width={200} height={280} src="/AvatarImage.jpg" alt="avatar movie poster"/>
        
      <p className="text-slate-700 pl-2 text-xl text-center py-4">Avatar: The Way of Water</p>
      <div className="inline-block space-x-2 bg-slate-800 w-full py-2">
      <p className="text-amber-50  inline-block font-bold pl-7 text-xl">⭐6</p>
        <p className="text-amber-50  inline-block text-l italic pr-5">Recommended by Ben!👍</p>
      </div>
  
    </div>
  )
}

//change Navbar and footer to darker colour- on a different branch
//add padding around text✔️
//add data map
//make card bigger✔️
