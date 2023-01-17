import Image from "next/image";
import { useState, useEffect } from "react";
import { Database } from "../../types/supabase";
import {
  Session,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";

type Movies = Database["public"]["Tables"]["movies"]["Row"];

type MovieCardProps = {
  session: Session;
};

export default function MovieCard({ session }: MovieCardProps) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    getMovies();
  }, [session]);

  async function getMovies() {
    try {
      setLoading(true);

      let {
        data: movies,
        error,
        status,
      } = await supabase.from("movies").select().eq("user_id", user?.id);

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

  // TODO : Generate and save the base url for the card link /tv or /movie

  return (
    <div className="w-full flex flex-wrap relative gap-y-8 gap-x-4 justify-evenly bg-slate-700 m-4">
      {movies?.map((movie) => {
        return (
          <a
            key={movie.id}
            target={"_blank"}
            href={`https://www.themoviedb.org/movie/${movie.movie_id}`}
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
              {/* <div className="flex items-center gap-2 bg-slate-800 w-full p-2">
                <p className="text-amber-50 font-bold text-sm">
                  ⭐{movie.vote_average}
                </p>
                <p className="text-amber-50  text-sm italic md:text-lg">
                  Recommended by Ben!👍
                </p>
              </div> */}
            </div>
          </a>
        );
      })}
    </div>
  );
}
