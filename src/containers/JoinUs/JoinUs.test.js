import React from "react";
import { render } from "@testing-library/react";
import JoinUs from "./JoinUs";

describe("JoinUs tests", () => {
  it("should render", () => {
    expect(render(<JoinUs />)).toBeTruthy();
  });
});
