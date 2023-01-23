import { MovieResult } from "moviedb-promise";
import Image from "next/image";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export default function AllMoviesCard({
  addMovieToUser,
  movie,
}: {
  addMovieToUser: (movie: MovieResult) => void;
  movie: MovieResult;
}) {
  return (
    <div className="flex flex-col">
      <div className="drop-shadow-xl rounded-md bg-amber-50">
        <Image
          onClick={() => addMovieToUser(movie)}
          className="absolute z-10 left-0 top-0 cursor-pointer"
          src="/bookmark.svg"
          alt="bookmark icon"
          width={40}
          height={40}
          style={{ width: "auto", height: "auto" }}
        />
        <div className="relative w-32 h-40 md:w-40 md:h-52 lg:w-48 lg:h-64">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            fill
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={`${movie.title}`}
          />
        </div>

        <div className="flex flex-1 items-center justify-between text-slate-700 text-md p-1">
          <div className="flex items-center gap-1">
            <AiFillStar className="text-red-500" size={20} />
            <p className="font-semibold">{movie.vote_average}</p>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.themoviedb.org/movie/${movie.id}`}
          >
            <BsInfoCircleFill
              size={20}
              className="hover:opacity-70 hover:cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
