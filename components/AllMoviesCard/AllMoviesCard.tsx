import { MovieResult } from "moviedb-promise";
import Image from "next/image";
import React from "react";

export default function AllMoviesCard({
  addMovieToUser,
  movie,
}: {
  addMovieToUser: (movie: MovieResult) => void;
  movie: MovieResult;
}) {
  return (
    <div>
      <div className="relative h-[350px] flex flex-col w-44 drop-shadow-xl rounded-md overflow-hidden bg-amber-50 hover:opacity-70 hover:cursor-pointer md:w-55 xl:w-60">
        <Image
          onClick={() => addMovieToUser(movie)}
          className="absolute z-10 left-0 top-0"
          src="/bookmark.svg"
          alt="bookmark icon"
          width={40}
          height={40}
          style={{ width: "auto", height: "auto" }}
        />
        <div className="relative h-80">
          <Image
            className="w-80 relative object-cover object-center aspect-square"
            // width={200}
            // height={280}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            fill
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={`${movie.title}`}
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-slate-700 text-md text-center p-1">
          <p className="text-center">⭐{movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
}
