import React from "react";
import { render } from "@testing-library/react";
import OurTeam from "./OurTeam";

describe("OurTeam tests", () => {
  it("should render", () => {
    expect(render(<OurTeam />)).toBeTruthy();
  });
});
