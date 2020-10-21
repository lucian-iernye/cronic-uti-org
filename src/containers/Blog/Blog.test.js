import React from "react";
import { render } from "@testing-library/react";
import Blog from "./Blog";

describe("Blog tests", () => {
  it("should render", () => {
    expect(render(<Blog />)).toBeTruthy();
  });
});
