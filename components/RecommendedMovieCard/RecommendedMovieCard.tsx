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

type Movies = Database["public"]["Tables"]["movies"]["Row"];

type RecommendedMovieCardProps = {
  user: User;
};

export default function RecommendedMovieCard({
  user,
}: RecommendedMovieCardProps) {
  const supabase = useSupabaseClient<Database>();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    getMovies();
  }, [user, handleDelete]);

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
  }

  // TODO : Generate and save the base url for the card link /tv or /movie

  return (
    <div className="w-full flex flex-wrap relative gap-y-8 gap-x-4 justify-evenly bg-slate-700 m-4">
      {movies?.map((movie) => {
        return (
          // <a
          //   key={movie.id}
          //   target={"_blank"}
          //   href={`https://www.themoviedb.org/movie/${movie.movie_id}`}
          //   rel="noreferrer"
          // >
          <div
            className="relative h-[500px] flex flex-col w-44 drop-shadow-xl rounded-md overflow-hidden bg-amber-50 hover:opacity-70 hover:cursor-pointer md:w-56 xl:w-80"
            key={movie.id}
          >
            {/* <MdDelete
              className="absolute z-10 left-0 top-0 text-slate-900"
              size={50}
              onClick={() => handleDelete(movie)}
            /> */}
            <Image
              onClick={() => handleDelete(movie)}
              className="absolute z-10 left-0 top-0"
              src="/delete.svg"
              alt="delete icon"
              width={50}
              height={50}
              // style={{ width: "auto", height: "auto" }}
            />

            <div className="relative h-full">
              <Image
                className="w-full relative object-cover object-center aspect-square"
                src={`https://image.tmdb.org/t/p/w500${movie.image_url}`}
                fill
                priority
                sizes="50vw"
                alt="movie poster"
              />
            </div>
            
            <p className="flex-1 flex items-center justify-center text-slate-700 text-lg text-center p-2">
              {movie.title}
            </p>
          </div>
          // </a>
        );
      })}
    </div>
  );
}
