/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { render, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import React from "react";
import networks from "@/networks.json";
import { MockTheme } from "@/__mocks__";
import Home from ".";

// ==================================
// mocks
// ==================================
const networkList = [
  {
    name: "Cosmos Hub",
    endpoint: "https://gql.cosmos.forbole.com/v1/graphql",
    links: [
      {
        name: "Mainnet",
        chain_id: "cosmoshub-4",
        url: "https://cosmos.bigdipper.live",
      },
      {
        name: "Testnet",
        chain_id: "stargate-final",
        url: "https://gaia.bigdipper.live/",
      },
      {
        name: "Retired",
        chain_id: "cosmoshub-3",
        url: "https://cosmoshub-3.bigdipper.live",
      },
      {
        name: "Retired",
        chain_id: "cosmoshub-2",
        url: "https://cosmoshub-2.bigdipper.live",
      },
      {
        name: "Retired",
        chain_id: "cosmoshub-1",
        url: "https://cosmoshub-1.bigdipper.live",
      },
    ],
  },
];

beforeEach(() => {
  fetchMock.mockIf(/\/api\/networks/, JSON.stringify(networks));
});

const mockI18n = {
  t: (key: string) => key,
  lang: "en",
};
jest.mock("next-translate/useTranslation", () => () => mockI18n);
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return <svg data-testid="next-image" />;
  },
}));

jest.spyOn(React, "useEffect").mockImplementation(() => {});

// ==================================
// unit tests
// ==================================
describe("Dummy Test", () => {
  it("matches snapshot", async () => {
    const { asFragment } = render(
      <MockTheme>
        <Home networkList={networkList} />
      </MockTheme>,
    );
    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
