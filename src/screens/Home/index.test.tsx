/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable react/display-name */
import { MockTheme } from "@/__mocks__";
import networks from "@/networks.json";
import { render, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import React from "react";

import Home from ".";

// ==================================
// mocks
// ==================================
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
  fetchMock.mockIf(/\/api\/networks/, JSON.stringify(networks));
});

const mockI18n = {
  lang: "en",
  t: (key: string) => key,
};

jest.mock("next-translate/useTranslation", () => () => mockI18n);

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => <svg data-testid="next-image" />,
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
