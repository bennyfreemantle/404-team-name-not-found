import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MovieCard from "../components/MovieCard/MovieCard";
import { movies } from "../components/MovieListData/index";

//search bar
//heading
//movie cards - component

export default function MovieRecs() {
  return (
    <div className="bg-slate-700">
      <div className="flex flex-col container mx-auto my-0 p-3">
        <Head>
          <title>CineMate</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>

      <div className="flex flex-col min-h-screen container mx-auto my-0 p-3 ">
        <h2 className="text-amber-50 text-2xl py-5">Your Recommended Movies</h2>
        <div className=" flex flex-wrap">
          <MovieCard />
        </div>
        <Footer />
      </div>
    </div>
  );
}
