import React from "react";
import { render } from "@testing-library/react";
import Events from "./Events";

describe("Events tests", () => {
  it("should render", () => {
    expect(render(<Events />)).toBeTruthy();
  });
});
