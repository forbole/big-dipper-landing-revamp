/* A GraphQL query. */
import networkEndpoints from '~networkEndpoints.json';

const queryIBC = `
query MyQuery {
  genesis {
    chain_id
  }
  block(order_by: {height: desc}, limit: 1) {
    height
  }
  token_price(order_by:{id: asc}, limit:1) {
    price
    unit_name
  }
}`;
/* A map of queries to run for each network. */
const queries: { [key: string]: string } = {
  Solana: `
query MyQuery {
  block(order_by: {height: desc}, limit: 1) {
    height
  }
  token_price(order_by: {id: asc}, where: {symbol: {_eq: "sol"}}) {
    price
    unit_name: symbol
  }
}`,
};
/**
 * `NetworkSummary` is an object with three properties: `genesis`, `block`, and `token_price`.
 * @property genesis - The chain_id of the network.
 * @property block - The current block height of the network.
 * @property token_price - The price of the token in USD.
 */
export interface NetworkSummary {
  genesis: Array<{ chain_id: string }>;
  block: Array<{ height: 6218898 }>;
  token_price: Array<{ price: number; unit_name: string }>;
}

/**
 * It takes a network name,
 * looks up the GraphQL URL for that network in the `networkEndpoints.json` file,
 * environment variable, and then queries the GraphQL endpoint for the network's information
 * @param {string} networkName - The name of the network you want to get the info for.
 * @returns NetworkSummary
 */
export default async function loadNetworkSummary(networkName: string) {
  const config = networkEndpoints as { [networkName: string]: string };
  const url = config?.[networkName];
  if (!url) {
    throw new Error(
      `Could not find network ${networkName} in "networkEndpoints.json" file`
    );
  }
  const query = queries[networkName] ?? queryIBC;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const { data } = await res.json();
  if (typeof data !== 'object') {
    throw new Error(`Could not parse data from ${url}`);
  }
  return data as NetworkSummary;
}
