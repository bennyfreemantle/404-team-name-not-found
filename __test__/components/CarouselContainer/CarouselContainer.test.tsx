import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarouselContainer from "@/components/CarouselContainer/CarouselContainer";

jest.mock("next/router", () => require("next-router-mock"));

describe("Carousel container component", ()=>{
    it("Carousel should be displayed on the page", ()=>{

        render(<CarouselContainer/>)

        const carouselImage = screen.
        expect(carouselImage).toBeInTheDocument()

    })
})