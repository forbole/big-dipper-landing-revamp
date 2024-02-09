/* eslint-disable react/display-name */
import { MockTheme } from "@/__mocks__";
import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

import Component from ".";

const networkList = [
  {
    endpoint: "https://gql.cosmos.forbole.com/v1/graphql",
    links: [
      {
        chain_id: "cosmoshub-4",
        name: "Mainnet",
        url: "https://cosmos.bigdipper.live",
      },
      {
        chain_id: "stargate-final",
        name: "Testnet",
        url: "https://gaia.bigdipper.live/",
      },
      {
        chain_id: "cosmoshub-3",
        name: "Retired",
        url: "https://cosmoshub-3.bigdipper.live",
      },
      {
        chain_id: "cosmoshub-2",
        name: "Retired",
        url: "https://cosmoshub-2.bigdipper.live",
      },
      {
        chain_id: "cosmoshub-1",
        name: "Retired",
        url: "https://cosmoshub-1.bigdipper.live",
      },
    ],
    name: "Cosmos Hub",
  },
];

beforeEach(() => {
  fetchMock.mockResponse(JSON.stringify(networkList));
});

const mockI18n = {
  lang: "en",
  t: (key: string) => key,
};

jest.mock("next-translate/useTranslation", () => () => mockI18n);

jest.mock("@/src/components/Layout", () => (props: object) => (
  <div data-testid="Layout" {...props} />
));

jest.mock("@/src/components/SectionBox", () =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ main, ...props }: { [p: string]: unknown }) => (
    <div data-testid="SectionBox" {...props} />
  ),
);

// ==================================
// unit tests
// ==================================
describe("All Networks", () => {
  it("matches snapshot", async () => {
    const { container } = render(
      <MockTheme>
        <Component networkList={networkList} />
      </MockTheme>,
    );

    expect(screen.getByText("allNetworks")).toBeInTheDocument();

    expect(
      screen.getByText("all-networks:allNetworksDescription"),
    ).toBeInTheDocument();

    expect(screen.getByTestId("Layout")).toBeInTheDocument();
    expect(screen.getByTestId("SectionBox")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
