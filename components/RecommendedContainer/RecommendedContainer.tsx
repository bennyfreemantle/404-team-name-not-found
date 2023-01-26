import Image from "next/image";
import { useState, useEffect } from "react";
import { Database } from "../../types/supabase";
import {
  Session,
  User,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { MdDelete } from "react-icons/md";
import MovieCard from "./MovieCard/MovieCard";
import Swal from "sweetalert2";

const swal = Swal.mixin({
  buttonsStyling: true,
});

export type Movies = Database["public"]["Tables"]["movies"]["Row"];

type RecommendedMovieCardProps = {
  user: User;
};

export default function RecommendedContainer({
  user,
}: RecommendedMovieCardProps) {
  const supabase = useSupabaseClient<Database>();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movies[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredMovie = movies.filter((movie) =>
    movie.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getMovies();
  }, [user]);

  async function getMovies() {
    try {
      setLoading(true);

      let {
        data: movies,
        error,
        status,
      } = await supabase.from("movies").select("*").eq("user_id", user?.id);

      if (error && status !== 406) {
        throw error;
      }

      if (movies) {
        setMovies(movies);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleMovieClick(movie: Movies) {
    swal
      .fire({
        title: "Delete?",
        text: "This movie will be deleted from your list.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete movie",
        cancelButtonText: "No, cancel",
        reverseButtons: true,
        background: "#fffbeb",
        cancelButtonColor: "#F87171",
        confirmButtonColor: "#1E293B",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire({
            title: "Deleted",
            text: "Your movie has been deleted",
            background: "#fffbeb",
            confirmButtonColor: "#1E293B",
          });
          handleDelete(movie);
        }
      });
  }

  async function handleDelete(movie: Movies) {
    try {
      const {
        data: movieData,
        error,
        status,
      } = await supabase.from("movies").delete().eq("id", movie.id);
      if (error && status !== 406) {
        throw error;
      } else {
        getMovies();
      }
    } catch (error) {
      console.log(error);
    }
    console.log(movie);
  }

  // TODO : Generate and save the base url for the card link /tv or /movie

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
      <div>
        <div className="w-full flex flex-wrap gap-12 justify-evenly">
          {filteredMovie?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                handleMovieClick={handleMovieClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
