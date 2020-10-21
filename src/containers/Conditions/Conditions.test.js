import React from "react";
import { render } from "@testing-library/react";
import Conditions from "./Conditions";

describe("Conditions tests", () => {
  it("should render", () => {
    expect(render(<Conditions />)).toBeTruthy();
  });
});
