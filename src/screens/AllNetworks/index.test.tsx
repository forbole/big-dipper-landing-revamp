/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { MockTheme } from '@/__mocks__';
import Component from '.';

const networkList = [
  {
    name: 'Cosmos Hub',
    endpoint: "https://gql.cosmos.forbole.com/v1/graphql",
    links: [
      {
        name: 'Mainnet',
        chain_id: 'cosmoshub-4',
        url: 'https://cosmos.bigdipper.live',
      },
      {
        name: 'Testnet',
        chain_id: 'stargate-final',
        url: 'https://gaia.bigdipper.live/',
      },
      {
        name: 'Retired',
        chain_id: 'cosmoshub-3',
        url: 'https://cosmoshub-3.bigdipper.live',
      },
      {
        name: 'Retired',
        chain_id: 'cosmoshub-2',
        url: 'https://cosmoshub-2.bigdipper.live',
      },
      {
        name: 'Retired',
        chain_id: 'cosmoshub-1',
        url: 'https://cosmoshub-1.bigdipper.live',
      },
    ],
  },
];
beforeEach(() => {
  fetchMock.mockResponse(JSON.stringify(networkList));
});

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@/src/components/Layout', () => (props: object) => <div data-testid="Layout" {...props} />);
jest.mock('@/src/components/SectionBox', () =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ main, ...props }: { [p: string]: unknown }) => <div data-testid="SectionBox" {...props} />
);

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/all-networks',
      pathname: '/all-networks',
      query: '',
      asPath: '/all-networks',
      events: {
        off: jest.fn(),
        on: jest.fn(),
      },
    };
  },
}));

// ==================================
// unit tests
// ==================================
describe('All Networks', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <MockTheme>
        <Component networkList={networkList} />
      </MockTheme>
    );

    expect(screen.getByText('allNetworks')).toBeInTheDocument();
    expect(screen.getByText('all-networks:allNetworksDescription')).toBeInTheDocument();
    expect(screen.getByTestId('Layout')).toBeInTheDocument();
    expect(screen.getByTestId('SectionBox')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
