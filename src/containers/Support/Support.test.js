import React from "react";
import { render } from "@testing-library/react";
import Support from "./Support";

describe("Support tests", () => {
  it("should render", () => {
    expect(render(<Support />)).toBeTruthy();
  });
});
