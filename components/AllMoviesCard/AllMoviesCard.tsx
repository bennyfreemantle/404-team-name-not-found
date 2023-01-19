import React, { useEffect, useState } from "react";
import Image from "next/image";
import moviedb from "../../utils/moviedbclient";
import {
  MovieResult,
  PopularMoviesRequest,
  SearchMovieRequest,
} from "moviedb-promise/dist/request-types";
import useDebounce from "../../hooks/useDebounce";
import Link from "next/link";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Database } from "../../types/supabase";

export default function AllMoviesCard({ pageNumber }: any) {
  const user = useUser();
  const supabase = useSupabaseClient<Database>();
  const [movies, setMovies] = useState<MovieResult[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce<any>(searchTerm, 500);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then((results) => {
          setIsSearching(false);
          setMovies(results);
        });
      } else {
        setMovies([]);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  useEffect(() => {
    async function List() {
      const response = await moviedb.moviePopular(pageNumber);
      setMovies(response.results);
    }
    if (!searchTerm) {
      List();
    }
  });

  async function handleClick(movie: MovieResult) {
    if (!user) return;
    try {
      const {
        data: movieData,
        error,
        status,
      } = await supabase.from("movies").insert([
        {
          movie_id: movie.id,
          title: movie.title,
          image_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          user_id: user.id,
        },
      ]);
      if (error && status !== 406) {
        throw error;
      }
      console.log(movieData);
    } catch (error) {
      console.log(error);
    }
    console.log(movie);
  }

  async function searchCharacters(search: SearchMovieRequest) {
    const response = await moviedb.searchMovie(search);
    return response.results;
    // console.log(response)
  }

  // debounce

  //searchbar styling
  //- size on large screen (break point)
  // colour to match wireframes
  //placeholder text & text colour
  //search icon

  return (
    <div className="w-full flex flex-wrap relative gap-y-8 gap-x-4 justify-evenly bg-slate-700 m-4">
      <div className="w-2/3 flex items-center relative">
        <input
          placeholder="Search movies..."
          className="bg-slate-800 text-amber-50 indent-9 p-3 rounded-md text-lg w-full"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Image
          src="/search.svg"
          alt="search icon"
          width={20}
          height={20}
          className=" left-4 absolute w-5"
        />
      </div>
      {/* 
<div class="w-2/3 flex justify-end items-center relative">
    <input
       placeholder="Pesquisar"
       class="border border-gray-400 rounded-lg p-4 w-full"
    />
    <img src="/icons/search.svg" class="absolute mr-2 w-10" alt="Search Icon" />
</div> */}

      {movies?.map((movie: MovieResult) => (
        <a
          key={movie.id}
          target={"_blank"}
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          rel="noreferrer"
        >
          <div className="relative h-[350px] flex flex-col w-44 drop-shadow-xl rounded-md overflow-hidden bg-amber-50 hover:opacity-70 hover:cursor-pointer md:w-55 xl:w-60">
            <Image
              onClick={() => handleClick(movie)}
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
                alt={`${movie.title}
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center text-slate-700 text-md text-center p-1">
            {/*   <p className="text-center text-ellipsis overflow-hidden  px-10">{movie.title} </p> */}
              <p className="text-center">⭐{movie.vote_average}</p>
            </div>
            <div></div>
          </div>
        </a>
      ))}
    </div>
  );
}
