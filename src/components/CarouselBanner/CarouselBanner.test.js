import React from "react";
import { render } from "@testing-library/react";
import CarouselBanner from "./CarouselBanner";

describe("CarouselBanner tests", () => {
  it("should render", () => {
    expect(render(<CarouselBanner />)).toBeTruthy();
  });
});
