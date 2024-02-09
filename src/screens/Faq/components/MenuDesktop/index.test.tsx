import { MockTheme } from "@/__mocks__";
import { render, screen } from "@testing-library/react";
import React from "react";

import Component from ".";

// ==================================
// unit tests
// ==================================
describe("MenuDesktop", () => {
  it("matches snapshot", async () => {
    const { container } = render(
      <MockTheme>
        <Component
          handleChange={jest.fn()}
          items={["gov", "validator"]}
          selected={0}
        />
      </MockTheme>,
    );

    expect(screen.getByText(/gov/i)).toBeInTheDocument();
    expect(screen.getByText(/validator/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
