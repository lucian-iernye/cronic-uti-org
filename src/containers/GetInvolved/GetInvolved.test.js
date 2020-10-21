import React from "react";
import { render } from "@testing-library/react";
import GetInvolved from "./GetInvolved";

describe("GetInvolved tests", () => {
  it("should render", () => {
    expect(render(<GetInvolved />)).toBeTruthy();
  });
});
