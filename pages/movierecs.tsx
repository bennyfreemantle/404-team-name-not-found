import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MovieCard from "../components/MovieCard/MovieCard";

//search bar
//heading
//movie cards - component

export default function Home() {
  return (
    <div className="bg-slate-800">
      <div className="flex flex-col container mx-auto my-0 p-3">
        <Head>
          <title>CineMate</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>
      
      <div className="flex flex-col min-h-screen container mx-auto my-0 p-3">
        <main className="flex-1 text-amber-50">
          <h2>Your Recommended Movies</h2>
          <MovieCard/>
        </main>
        <Footer />
      </div>
    </div>
  );
}