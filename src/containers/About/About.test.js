import React from "react";
import { render } from "@testing-library/react";
import About from "./About";

describe("About tests", () => {
  it("should render", () => {
    expect(render(<About />)).toBeTruthy();
  });
});
