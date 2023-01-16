  import { MovieResult } from "moviedb-promise";
  import Image from "next/image";
  import { useState, useRef, useEffect } from "react";
  import moviedb from "../../utils/moviedbclient";

  // Data
  const data = {
    resources: [
      {
        title: "Find me on Mastodon",
        link: "https://indieweb.social/@kendalmintcode",
        imageUrl: "https://placeimg.com/300/300/any",
      },
      {
        title: "Welcome to Ark Labs",
        link: "https://ark-labs.co.uk",
        imageUrl: "https://placeimg.com/300/300/animals",
      },
      {
        title: "Some sort of third title",
        link: "https://indieweb.social/@kendalmintcode",
        imageUrl: "https://placeimg.com/300/300/architecture",
      },
      {
        title: "Find me on Mastodon",
        link: "https://indieweb.social/@kendalmintcode",
        imageUrl: "https://placeimg.com/300/300/any",
      },
      {
        title: "Welcome to Ark Labs",
        link: "https://ark-labs.co.uk",
        imageUrl: "https://placeimg.com/300/300/animals",
      },
      {
        title: "Some sort of third title",
        link: "https://indieweb.social/@kendalmintcode",
        imageUrl: "https://placeimg.com/300/300/architecture",
      },
      {
        title: "Find me on Mastodon",
        link: "https://indieweb.social/@kendalmintcode",
        imageUrl: "https://placeimg.com/300/300/any",
      },
      {
        title: "Welcome to Ark Labs",
        link: "https://ark-labs.co.uk",
        imageUrl: "https://placeimg.com/300/300/animals",
      },
      {
        title: "Some sort of third title",
        link: "https://indieweb.social/@kendalmintcode",
        imageUrl: "https://placeimg.com/300/300/architecture",
      },
      {
        title: "Find me on Mastodon",
        link: "https://indieweb.social/@kendalmintcode",
        imageUrl: "https://placeimg.com/300/300/any",
      },
      {
        title: "Welcome to Ark Labs",
        link: "https://ark-labs.co.uk",
        imageUrl: "https://placeimg.com/300/300/animals",
      },
      {
        title: "Some sort of third title",
        link: "https://indieweb.social/@kendalmintcode",
        imageUrl: "https://placeimg.com/300/300/architecture",
      },
    ],
  };
  export function Carousel() {

    const [movies, setMovies] = useState<MovieResult[]>()
    useEffect(
      () => {
        async function List() {
          const response = await moviedb.movieTopRated()
          setMovies(response.results)
        console.log(response)}
      List()}
      
    ,[])

    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef<any>(null);

    console.log(carousel.current + 'I am carousel current');
    console.log(currentIndex + 'I am current index');
    console.log(maxScrollWidth + 'I am mac scroll width');

    const movePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
      }
    };

    const moveNext = () => {
      if (
        carousel.current !== null &&
        carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
      ) {
        setCurrentIndex((prevState) => prevState + 1);
      }
    };

    const isDisabled = (direction: string) => {
      if (direction === "prev") {
        return currentIndex <= 0;
      }

      if (direction === "next" && carousel.current !== null) {
        return (
          carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
        );
      }

      return false;
    };

    useEffect(() => {
      if (carousel !== null && carousel.current !== null) {
        carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
      }
    }, [currentIndex]);

    useEffect(() => {
      maxScrollWidth.current = carousel.current
        ? carousel.current.scrollWidth - carousel.current.offsetWidth
        : 0;
    }, []);

    return (
      <div className="pt-20 pb-28 px-6 bg-slate-900">
        <h2 className="text-4xl font-semibold mb-6 text-amber-50">
          Top rated movies
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex justify-between absolute top left w-full h-full">
            <button
              onClick={movePrev}
              className="hover:bg-slate-800/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("prev")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:bg-slate-800/75 text-amber-50 w-10 h-full text-center hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("next")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div
            ref={carousel}
            className="relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            {movies?.map((movie, index) => {
              return (
                <div
                  key={index}
                  className="text-center relative w-full h-96 snap-start"
                >
                  {/* <a
                    href={resource.link}
                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                    style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
                  > */}
                    {/* <Image
                      fill
                      src={resource.imageUrl || ""}
                      alt={resource.title}
                      className="w-full aspect-square hidden"
                    /> */}
                    <div className="relative h-full rounded-md overflow-hidden w-56">
                    <div className="relative h-full">
                  <Image
                    className="w-full relative object-cover object-center aspect-square"
                    // width={200}
                    // height={280}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    fill
                    priority
                    sizes="50vw"
                    alt="movie poster"
                  />
                </div>
                    </div>
                
                  {/* </a> */}
                  {/* <a
                    href={resource.link}
                    className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-red-400/70 z-10"
                  >
                    <h3 className="text-white py-6 px-3 mx-auto text-xl">
                      {resource.title}
                    </h3>
                  </a> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  export default Carousel;
