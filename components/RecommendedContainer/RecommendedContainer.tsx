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
        console.log(movies);
        setMovies(movies);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(movie: Movies) {
    if (confirm("Do you want to delete this film from your list?") === true) {
      if (!user) return;
      try {
        const {
          data: movieData,
          error,
          status,
        } = await supabase.from("movies").delete().eq("id", movie.id);
        if (error && status !== 406) {
          throw error;
        }
        console.log(movieData);
      } catch (error) {
        console.log(error);
      }
      console.log(movie);
      getMovies();
    }
  }

  // TODO : Generate and save the base url for the card link /tv or /movie

  return (
    <>
      <div className="w-full flex flex-wrap relative gap-y-8 gap-x-4 justify-evenly bg-slate-700 m-4">
        <Image
          src="/search.svg"
          alt="search icon"
          width={25}
          height={25}
          className="left-4 top-4 absolute w-5"
        />
        <input
          placeholder="Search on your movie list..."
          className="bg-slate-800 text-amber-50 indent-9 p-3 rounded-md text-lg w-full"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <div className="w-full flex flex-wrap relative gap-y-8 gap-x-4 justify-evenly bg-slate-700 m-4">
          {filteredMovie?.map((movie) => {
            console.log(filteredMovie);
            return (
             <MovieCard key={movie.id} movie={movie}/>
            );
          })}
        </div>
      </div>
    </>
  );
}
