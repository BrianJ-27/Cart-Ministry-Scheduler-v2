/**
 * @jest-environment jsdom
 */

// By adding this test environment string above in a doc block
// I was able to make this test work properly

import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

describe("App component", () => {
  beforeAll(() => {
    render(<HelloWorld />);
  });

  it("should have the right message in the dom", () => {
    const message = "Hello World. The Test Worked!";

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});