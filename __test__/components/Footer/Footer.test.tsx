import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer/Footer";

jest.mock("next/router", () => require("next-router-mock"));

describe("Footer component", () => {
  it("Should display cards", () => {
    render(<Footer />);

    const footerDiv = screen.getByTestId("footer");

    expect(footerDiv).toBeInTheDocument();
  });

  it("Should display buttons", () => {
    render(<Footer />);

    const chromeBTN = screen.getByTestId("chrome");

    expect(chromeBTN).toBeInTheDocument();

    const appleBTN = screen.getByTestId("apple");

    expect(appleBTN).toBeInTheDocument();

    const googleBTN = screen.getByTestId("google");

    expect(googleBTN).toBeInTheDocument();
  });
});
