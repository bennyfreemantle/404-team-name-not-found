import RecButton from "../RecButton/RecButton";
import React from "react";
import Image from "next/image";
import { movies } from "../MovieListData/index";

// movie data stored in MovieListData
// pass the image src / title from this data into the card component
//recommended by user - this data will come from our database eventually

{
  /* <div className="card">
      <Image src={props.src} />
      <Title title={props.name} />
      <Paragraph description={props.description} />
      <Button text="PLAY" id="playButton" />
      <Button text="MY LIST" id="listButton" />
    </div> */
}

export default function MovieCard() {
  return (
    <div className="w-full flex flex-wrap relative gap-y-8 gap-x-4 justify-evenly bg-slate-700 m-4">
      {movies.map((item: any) => {
        return (
          <div className="relative drop-shadow-xl rounded-md overflow-hidden bg-amber-50" key={item.id}>
            <Image
              className="absolute z-10 left-0 top-0"
              src="/bookmark.svg"
              alt="bookmark icon"
              width={40}
              height={40}
            />
            <div className="h-[500px] relative">
            <Image
              className="w-full relative object-cover object-center"
              // width={200}
              // height={280}
              src={item.poster_path}
              fill
              alt="movie poster"
              key={item.id}
            />
            </div>

            <p
              className="text-slate-700 pl-2 text-xl text-center py-4"
              key={item.id}
            >
              {item.title}
            </p>
            <div className="inline-block space-x-2 bg-slate-800 w-full py-2">
              <p
                className="text-amber-50  inline-block font-bold pl-7 text-xl"
                key={item.id}
              >
                ⭐{item.vote_average}
              </p>
              <p className="text-amber-50  inline-block text-l italic pr-5">
                Recommended by Ben!👍
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

//change Navbar and footer to darker colour- on a different branch
//add padding around text✔️
//add data map
//make card bigger✔️
