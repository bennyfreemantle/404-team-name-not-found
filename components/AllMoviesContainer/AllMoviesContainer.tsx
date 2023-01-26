import React, { useEffect, useState } from "react";
import moviedb from "../../utils/moviedbclient";
import {
  MovieResult,
  SearchMovieRequest,
} from "moviedb-promise/dist/request-types";
import useDebounce from "../../hooks/useDebounce";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Database } from "../../types/supabase";
import Image from "next/image";
import AllMoviesCard from "../AllMoviesCard/AllMoviesCard";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const swal = Swal.mixin({
  buttonsStyling: true,
});

export default function AllMoviesContainer({ pageNumber }: any) {
  const user = useUser();
  const router = useRouter();
  const supabase = useSupabaseClient<Database>();
  const [movies, setMovies] = useState<MovieResult[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce<any>(searchTerm, 500);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        filterMovies(debouncedSearchTerm).then((results) => {
          setIsSearching(false);
          setMovies(results);
        });
      } else {
        searchPopularMovies();
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  useEffect(() => {
    searchPopularMovies();
  }, [pageNumber]);

  async function searchPopularMovies() {
    const response = await moviedb.moviePopular(pageNumber);
    setMovies(response.results);
  }

  async function filterMovies(search: SearchMovieRequest) {
    const response = await moviedb.searchMovie(search);
    return response.results;
  }

  async function handleMovieClick(movie: MovieResult) {
    // add an alert for the user to add the move
    // add movie to our db
    swal
      .fire({
        title: "Add this movie ?",
        text: "You can view added movies on your recommended movie page",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, add movie",
        cancelButtonText: "No, cancel",
        reverseButtons: true,
        background: "#fffbeb",
        cancelButtonColor: "#F87171",
        confirmButtonColor: "#1E293B",
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (!user) {
            swal
              .fire({
                title: "Sorry, you are not logged in",
                text: "Please, log in",
                icon: "error",
                showCancelButton: true,
                confirmButtonText: "Login",
                cancelButtonText: "No, cancel",
                reverseButtons: true,
                background: "#fffbeb",
                cancelButtonColor: "#F87171",
                confirmButtonColor: "#1E293B",
              })
              .then((result) => {
                if (result.isConfirmed) {
                  router.push("/login");
                } else {
                  swal.fire({
                    title: "Added",
                    text: "Your movie has been added",
                    background: "#fffbeb",
                    confirmButtonColor: "#1E293B",
                  });

                  addMovieToUser(movie);
                }
              });
          }
        }
      });
  }

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
          rating: movie.vote_average,
        },
      ]);
      if (error && status !== 406) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full flex flex-col gap-8 justify-center-center bg-slate-700">
      <div className="relative">
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
      </div>
      <div className="w-full flex flex-wrap gap-12 justify-evenly">
        {movies?.map((movie: MovieResult) => (
          <AllMoviesCard
            key={movie.id}
            handleMovieClick={handleMovieClick}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}
