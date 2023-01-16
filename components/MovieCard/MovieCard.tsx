import React, { useEffect, useState } from "react";
import Image from "next/image";
import moviedb from "../../utils/moviedbclient";
import { MovieResult } from "moviedb-promise/dist/request-types";

export default function MovieCard() {
  const [movies, setMovies] = useState<MovieResult[]>();
  useEffect(() => {
    async function List() {
      const response = await moviedb.moviePopular();
      setMovies(response.results);
      console.log(response);
    }
    List();
  }, []);

  return (
    <div className="w-full flex flex-wrap relative gap-y-8 gap-x-4 justify-evenly bg-slate-700 m-4">
      {movies?.map((movie: MovieResult) => {
        return (
          <div
            className="relative flex flex-col w-80 drop-shadow-xl rounded-md overflow-hidden bg-amber-50"
            key={movie.id}
          >
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
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                fill
                alt="movie poster"
                key={movie.id}
              />
            </div>

            <p
              className="flex-1 flex items-center justify-center text-slate-700 pl-2 text-xl text-center py-4"
              key={movie.id}
            >
              {movie.title}
            </p>
            <div className="flex items-center gap-2 bg-slate-800 w-full py-2">
              <p
                className="text-amber-50 font-bold pl-7 text-xl"
                key={movie.id}
              >
                ⭐{movie.vote_average}
              </p>
              <p className="text-amber-50  text-l italic pr-5">
                Recommended by Ben!👍
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
