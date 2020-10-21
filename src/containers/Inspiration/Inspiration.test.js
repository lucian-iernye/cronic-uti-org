import React from "react";
import { render } from "@testing-library/react";
import Inspiration from "./Inspiration";

describe("Inspiration tests", () => {
  it("should render", () => {
    expect(render(<Inspiration />)).toBeTruthy();
  });
});
