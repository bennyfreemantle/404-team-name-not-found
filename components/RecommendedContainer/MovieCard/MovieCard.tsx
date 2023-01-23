import Image from "next/image";
import React from "react";
import { Movies } from "../RecommendedContainer";

export default function MovieCard({
  movie,
  handleDelete,
}: {
  movie: Movies;
  handleDelete: (movie: Movies) => void;
}) {
  return (
    <div
      className="relative h-[500px] flex flex-col w-44 drop-shadow-xl rounded-md overflow-hidden bg-amber-50 hover:opacity-70 hover:cursor-pointer md:w-56 xl:w-80"
      key={movie.id}
    >
      <Image
        onClick={() => handleDelete(movie)}
        className="absolute z-10 left-0 top-0"
        src="/delete.svg"
        alt="delete icon"
        width={50}
        height={50}
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
  );
}
