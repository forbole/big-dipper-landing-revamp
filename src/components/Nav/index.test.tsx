/* eslint-disable react/display-name */
import { render } from "@testing-library/react";
import Box from "@mui/material/Box";
import { MockTheme } from "@/__mocks__";
import Component from ".";

jest.mock("./components/MenuDesktop", () => () => (
  <Box data-testid="MenuDesktop" />
));
jest.mock("./components/MenuMobile", () => () => (
  <Box data-testid="MenuMobile" />
));

// ==================================
// unit tests
// ==================================
describe("Nav", () => {
  it("matches snapshot", async () => {
    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>,
    );
    // expect(screen.getByText(
    //   /Home/i,
    // )).toBeInTheDocument();
    // expect(screen.getByText(
    //   /About/i,
    // )).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
