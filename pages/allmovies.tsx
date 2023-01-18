import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AllMoviesCard from "../components/AllMoviesCard/AllMoviesCard";
import { movies } from "../components/MovieListData/index";
import React, { useEffect, useState } from "react";
import { PopularMoviesRequest } from "moviedb-promise/dist/request-types";
import moviedb from "../utils/moviedbclient";

export default function MovieRecs() {
  const [pageNumber, setPageNumber] = useState<PopularMoviesRequest>({
    page: 1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  function nextPage(pageNum: number) {
    setPageNumber({ page: pageNum + 1 });
  }

  function previousPage(pageNum: number) {
    if (pageNumber.page === 1) return;
    setPageNumber({ page: pageNum - 1 });
    console.log(pageNumber);
  }

  return (
    <div className="bg-slate-900">
      <div className="flex flex-col container mx-auto my-0 p-3">
        <Head>
          <title>CineMate</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>

      <div className="bg-slate-700">
        <div className="flex flex-col min-h-screen container mx-auto my-0 p-3">
          <h2 className="text-amber-50 text-2xl py-5">All Movies</h2>
          <div className="flex flex-wrap">
            <AllMoviesCard pageNumber={pageNumber} />
          </div>

          <button onClick={() => previousPage(pageNumber.page || 1)}>
            Previous
          </button>

          <button onClick={() => nextPage(pageNumber.page || 1)}>Next</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
