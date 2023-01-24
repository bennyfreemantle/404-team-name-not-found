import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header/Header";

describe ("Header component", ()=> {
    it("Should render properly", ()=> {
        render(<Header/>)

        const logoText = screen.getByTestId("logo-text");
        const projectName = "CineMate";

        expect(logoText).toHaveTextContent(projectName)

    })
})
