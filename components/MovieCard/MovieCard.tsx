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
    <div className="w-[10vw] h-[50vh] relative">
        <Image className="relativeobject-cover object-center" width={200} height={280} src="/AvatarImage.jpg" alt="avatar movie poster"/>
        <p>Rating goes here</p>
        <p>Movie title goes</p>
    </div>
  )
}
