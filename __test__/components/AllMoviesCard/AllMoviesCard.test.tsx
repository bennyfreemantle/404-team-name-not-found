import AllMoviesCard from "@/components/AllMoviesCard/AllMoviesCard";
import { screen, render } from "@testing-library/react";
import { MovieResult } from "moviedb-promise";

describe('all movies card', () => {
    it('should exist', ()=> {
        render(<AllMoviesCard addMovieToUser={function (movie: MovieResult): void {
            throw new Error("Function not implemented.");
        } } movie={undefined}/>)

    })
})