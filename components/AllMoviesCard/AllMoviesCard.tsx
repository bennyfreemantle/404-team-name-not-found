import React, { useEffect, useState } from "react";
import Image from "next/image";
import moviedb from "../../utils/moviedbclient";
import {
MovieResult,
PopularMoviesRequest,
} from "moviedb-promise/dist/request-types";
import Link from "next/link";
import { title } from "process";

export default function AllMoviesCard({pageNumber} : any) {
const [movies, setMovies] = useState<MovieResult[]>();

useEffect(() => {
  async function List() {
    const response = await moviedb.moviePopular(pageNumber);
    setMovies(response.results);
  }
  List();
});
  
  let val = ''
  function handleInput(e) {
   
    val = e.target.value;
    console.log(val)
}

  function handleSearch(e) {
     e.preventDefault();
    async function searchList(title) {
    const response = await moviedb.searchMovie(title);
    return setMovies(response.results);
    }
    searchList(val)
  }


return (
  <div className="w-full flex flex-wrap relative gap-y-8 gap-x-4 justify-evenly bg-slate-700 m-4">
    {movies?.map((movie: MovieResult) => (
      <a
        key={movie.id}
        target={"_blank"}
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        rel="noreferrer"
      >
        <div className="relative h-[500px] flex flex-col w-44 drop-shadow-xl rounded-md overflow-hidden bg-amber-50 hover:opacity-70 hover:cursor-pointer md:w-56 xl:w-80">
          <Image
            className="absolute z-10 left-0 top-0"
            src="/bookmark.svg"
            alt="bookmark icon"
            width={40}
            height={40}
            style={{ width: "auto", height: "auto" }}
          />
          <div className="relative h-full">
            <Image
              className="w-full relative object-cover object-center aspect-square"
              // width={200}
              // height={280}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              fill
              priority
              sizes="50vw"
              alt="movie poster"
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center text-slate-700 text-lg text-center p-2">
            <p className="">{movie.title}</p>
            <p className="text-center">⭐{movie.vote_average}</p>
          </div>
          <div>
          </div>
        </div>
      </a>
    ))}
    
  </div>
  
);
}
