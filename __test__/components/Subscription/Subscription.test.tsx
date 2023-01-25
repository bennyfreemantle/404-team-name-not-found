import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Subscription from "@/components/Subscription/Subscription";

jest.mock("next/router", () => require("next-router-mock"));

describe("Subscription component", () => {
  it("Should display cards", () => {
    render(<Subscription/>)

    const container = screen.getByTestId("SubsCard")

    expect(container).toBeInTheDocument();
  });
  
});
