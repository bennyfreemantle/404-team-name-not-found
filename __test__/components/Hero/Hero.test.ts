import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "@/components/Hero/Hero";

jest.mock("next/router", () => require("next-router-mock"));

describe("Hero component", () => {
  it("Should ...", () => {});
});
