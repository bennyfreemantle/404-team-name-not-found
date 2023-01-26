import { MovieResult } from "moviedb-promise";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import moviedb from "../../utils/moviedbclient";
import Image from "next/image";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

import Swal from "sweetalert2";
import { Database } from "../../types/supabase";
import { useRouter } from "next/router";

const swal = Swal.mixin({
  buttonsStyling: true,
});



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export function CarouselContainer() {

  const router = useRouter();

  const user = useUser();
  const supabase = useSupabaseClient<Database>();

  const [movies, setMovies] = useState<MovieResult[]>();
  useEffect(() => {
    async function List() {
      const response = await moviedb.movieTopRated();
      setMovies(response.results);
      console.log(response);
    }
    List();
  }, []);

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
                }
              });
          } else {
            swal.fire({
              title: "Added",
              text: "Your movie has been added",
              background: "#fffbeb",
              confirmButtonColor: "#1E293B",
            });

            addMovieToUser(movie);
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
    <div className="m-4">
      <h1 className="mb-4 text-amber-50 text-3xl p-4">Top Rated Movies</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2000}
        autoPlay={true}
      >
        {movies ? (
          movies.map((movie) => {
            return (
              <Image
                onClick={() => handleMovieClick(movie)}
                key={movie.id}
                draggable="false"
                alt="movie"
                width={300}
                height={300}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            );
          })
        ) : (
          <div />
        )}
      </Carousel>
    </div>
  );
}

export default CarouselContainer;
