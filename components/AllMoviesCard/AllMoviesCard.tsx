import React, { useEffect, useState } from "react";
import Image from "next/image";
import moviedb from "../../utils/moviedbclient";
import {
MovieResult,
PopularMoviesRequest,
} from "moviedb-promise/dist/request-types";
import Link from "next/link";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Database } from "../../types/supabase";

export default function AllMoviesCard() {
  const user = useUser();
  const supabase = useSupabaseClient<Database>();
  const [movies, setMovies] = useState<MovieResult[]>();
  const [pageNumber, setPageNumber] = useState<PopularMoviesRequest>({
    page: 1,
  });

  function nextPage(pageNum: number) {
    setPageNumber({ page: pageNum + 1 });
  }

  async function handleClick(movie: MovieResult) {
    if (!user) return;
    try {
      const { data: movieData, error, status } = await supabase
        .from("movies")
        .insert([
          {
            movie_id: movie.id,
            title: movie.title,
            image_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            user_id: user.id,
          },
        ]);
        if(error && status !== 406){
          throw error
        }
      console.log(movieData);
    } catch (error) {
      console.log(error);
    }
    console.log(movie);

useEffect(() => {
  async function List() {
    const response = await moviedb.moviePopular(pageNumber);
    setMovies(response.results);

  }
  List();
});

  return (
    <div className="w-full flex flex-wrap relative gap-y-8 gap-x-4 justify-evenly bg-slate-700 m-4">
      {movies?.map((movie: MovieResult) => (
        
          <div key={movie.id} className="relative h-[500px] flex flex-col w-44 drop-shadow-xl rounded-md overflow-hidden bg-amber-50 hover:opacity-70 hover:cursor-pointer md:w-56 xl:w-80">
            <Image
              onClick={() => handleClick(movie)}
              className="absolute z-10 left-0 top-0"
              src="/bookmark.svg"
              alt="bookmark icon"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
            />
            <a
          target={"_blank"}
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          rel="noreferrer"
        >
            <div className="relative h-full flex-1">
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
            <div className="flex flex-col items-center justify-center text-slate-700 text-lg text-center p-2">
              <p className="">{movie.title}</p>
              <p className="text-center">⭐{movie.vote_average}</p>
            </div>
            </a>
          </div>
        
      ))}
      <button>Previous</button>
      <button onClick={() => nextPage(pageNumber.page || 1)}>Next</button>
    </div>
  );
}
