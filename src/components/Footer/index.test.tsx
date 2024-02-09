import { render, screen } from "@testing-library/react";
import React from "react";
import { MockTheme } from "@/__mocks__";
import Component from ".";

// ==================================
// unit tests
// ==================================
describe("Footer", () => {
  it("matches snapshot", async () => {
    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>,
    );
    expect(screen.getByText(/productOf/i)).toBeInTheDocument();
    expect(screen.getByText(/privacyPolicy/i)).toBeInTheDocument();
    expect(container.querySelector("footer")).not.toBeNull();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
