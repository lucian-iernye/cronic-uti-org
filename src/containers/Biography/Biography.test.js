import React from "react";
import { render } from "@testing-library/react";
import Biography from "./Biography";

describe("Biography tests", () => {
  it("should render", () => {
    expect(render(<Biography />)).toBeTruthy();
  });
});
