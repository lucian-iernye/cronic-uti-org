import React from "react";
import { render } from "@testing-library/react";
import Interiors from "./Interiors";

describe("Interiors tests", () => {
  it("should render", () => {
    expect(render(<Interiors />)).toBeTruthy();
  });
});
