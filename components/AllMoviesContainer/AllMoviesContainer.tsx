import React, { useEffect, useState } from "react";
import moviedb from "../../utils/moviedbclient";
import {
  MovieResult,
  SearchMovieRequest,
} from "moviedb-promise/dist/request-types";
import useDebounce from "../../hooks/useDebounce";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Database } from "../../types/supabase";
import AllMoviesCard from "../allMoviesCard/AllMoviesCard";
import Image from "next/image";

export default function AllMoviesContainer({ pageNumber }: any) {
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
    async function searchPopularMovies() {
      const response = await moviedb.moviePopular(pageNumber);
      setMovies(response.results);
    }
    if (!searchTerm) {
      searchPopularMovies();
    }
  });

  async function addMovieToUser(movie: MovieResult) {
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
    } catch (error) {
      console.log(error);
    }
  }

  async function searchCharacters(search: SearchMovieRequest) {
    const response = await moviedb.searchMovie(search);
    return response.results;
  }

  return (
    <div className="w-full flex flex-wrap relative gap-y-8 gap-x-4 justify-evenly bg-slate-700 m-4">
      <Image
        src="/search.svg"
        alt="search icon"
        width={25}
        height={25}
        className="left-4 top-4 absolute w-5"
      />
      <input
        placeholder="Search movies..."
        className="bg-slate-800 text-amber-50 indent-9 p-3 rounded-md text-lg w-full"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {movies?.map((movie: MovieResult) => (
        <AllMoviesCard
          key={movie.id}
          addMovieToUser={addMovieToUser}
          movie={movie}
        />
      ))}
    </div>
  );
}
