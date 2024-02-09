/* eslint-disable react/display-name */
import Box from "@mui/material/Box";
import { render, screen } from "@testing-library/react";
import { MockTheme } from "@/__mocks__";
import Component from ".";

jest.mock("@/src/components/ContentBox", () => (props: object) => (
  <Box data-testid="ContentBox" {...props} />
));
// ==================================
// unit tests
// ==================================
describe("Content", () => {
  it("matches snapshot", async () => {
    const { container } = render(
      <MockTheme>
        <Component
          content={[
            {
              question: "How are you?",
              answer: "Fine.",
            },
          ]}
        />
      </MockTheme>,
    );
    expect(screen.getByText(/Fine./i)).toBeInTheDocument();
    expect(screen.getByTestId("ContentBox")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
