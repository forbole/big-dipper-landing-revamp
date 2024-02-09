import { render, screen } from "@testing-library/react";
import { MockTheme } from "@/__mocks__";
import Component from ".";

// ==================================
// unit tests
// ==================================
describe("ContentBox", () => {
  it("matches snapshot", async () => {
    const { container } = render(
      <MockTheme>
        <Component>
          <div>HELLO WORLD</div>
        </Component>
      </MockTheme>,
    );
    expect(screen.getByText(/HELLO WORLD/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
