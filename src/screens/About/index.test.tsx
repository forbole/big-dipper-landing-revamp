/* eslint-disable react/display-name */
import Box from "@mui/material/Box";
import { render, screen } from "@testing-library/react";
import { MockTheme } from "@/__mocks__";
import Component from ".";

const mockI18n = {
  t: (key: string) => key,
  lang: "en",
};
jest.mock("next-translate/useTranslation", () => () => mockI18n);
jest.mock("@/src/components/Layout", () => (props: object) => (
  <Box data-testid="Layout" {...props} />
));
jest.mock("@/src/components/SectionBox", () =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ main, ...props }: { [p: string]: unknown }) => (
    <Box data-testid="SectionBox" {...props} />
  ),
);
jest.mock("@/src/components/SectionLimit", () => (props: object) => (
  <Box data-testid="SectionLimit" {...props} />
));
jest.mock("@/src/components/ContentBox", () => (props: object) => (
  <Box data-testid="ContentBox" {...props} />
));
// ==================================
// unit tests
// ==================================
describe("About", () => {
  it("matches snapshot", async () => {
    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>,
    );

    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByTestId("Layout")).toBeInTheDocument();
    expect(screen.getByTestId("SectionBox")).toBeInTheDocument();
    expect(screen.getByTestId("SectionLimit")).toBeInTheDocument();
    expect(screen.getByTestId("ContentBox")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
