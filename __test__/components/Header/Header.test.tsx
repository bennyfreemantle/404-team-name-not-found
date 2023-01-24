import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header/Header";

jest.mock("next/router", () => require("next-router-mock"));

describe("Header component", () => {
  it("Should render our logo text in the header", () => {
    render(<Header />);

    const logoText = screen.getByTestId("logo-text");
    const projectName = "CineMate";

    expect(logoText).toHaveTextContent(projectName);
  });
});
