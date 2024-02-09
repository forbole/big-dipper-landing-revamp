import { render, screen } from "@testing-library/react";
import React from "react";
import { MockTheme } from "@/__mocks__";
import Component from ".";

// ==================================
// unit tests
// ==================================
describe("MenuDesktop", () => {
  it("matches snapshot", async () => {
    const { container } = render(
      <MockTheme>
        <Component
          items={["gov", "validator"]}
          handleChange={jest.fn()}
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
