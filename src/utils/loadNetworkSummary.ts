/* A GraphQL query. */
import networkEndpoints from '@/networkEndpoints.json';

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

export interface Config {
  type: string;
}

/* Creating a map of handlers for different types of network endpoints. */
const handlers = new Map<Config['type'], (networkName: string, config: Config) => Promise<NetworkSummary>>();


export interface GqlEndpoint extends Config {
  type: 'gql';
  endpoint: string;
}

handlers.set('gql', async (networkName: string, config: Config) => {
  if (!((c): c is GqlEndpoint => 'endpoint' in c)(config)) {
    throw new Error(`Invalid config for ${networkName}`);
  }

  const res = await fetch(config.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
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
}`
    }),
  });
  const { data } = await res.json();

  if (!('genesis' in data && 'block' in data && 'token_price' in data)) {
    throw new Error(`Could not parse data from ${networkName}`);
  }

  return data;
});


export interface SolanaEndpoint extends Config {
  type: 'solana';
  chain_id: string;
  endpoint: string;
}

handlers.set('solana', async (networkName: string, config: Config) => {
  if (!((c): c is SolanaEndpoint => 'chain_id' in c && 'endpoint' in c)(config)) {
    throw new Error(`Invalid config for ${networkName}`);
  }

  const res = await fetch(config.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
query MyQuery {
block(order_by: {height: desc}, limit: 1) {
height
}
token_price(order_by: {id: asc}, where: {symbol: {_eq: "sol"}}) {
price
unit_name: symbol
}
}`
    }),
  });
  const { data } = await res.json();

  if (!('block' in data && 'token_price' in data)) {
    throw new Error(`Could not parse data from ${networkName}`);
  }

  return {
    genesis: [
      { chain_id: config.chain_id }
    ],
    ...data,
  };
});


export interface ElrondEndpoint extends Config {
  type: 'elrond';
  chain_id: string;
  stats: string;
  economics: string;
}

handlers.set('elrond', async (networkName: string, config: Config) => {
  if (!((c): c is ElrondEndpoint => 'chain_id' in c && 'stats' in c && 'economics' in c)(config)) {
    throw new Error(`Invalid config for ${networkName}`);
  }

  const promises = [fetch(config.stats).then(r => r.json()), fetch(config.economics).then(r => r.json())];
  const [stats, economics] = await Promise.all(promises);
  const { blocks } = stats;
  const { price } = economics;
  return {
    genesis: [
      { chain_id: config.chain_id }
    ],
    block: [
      { height: blocks }
    ],
    token_price: [
      { price: price, unit_name: "EGLD" }
    ]
  };
});


export interface CryptoorgEndpoint extends Config {
  type: 'cryptoorg';
  blocks: string;
  price: string;
}

handlers.set('cryptoorg', async (networkName: string, config: Config) => {
  if (!((c): c is CryptoorgEndpoint => 'blocks' in c && 'price' in c)(config)) {
    throw new Error(`Invalid config for ${networkName}`);
  }

  const promises = [fetch(config.blocks).then(r => r.json()), fetch(config.price).then(r => r.json())];
  const [blocks, price] = await Promise.all(promises);
  const { block: { header: { chain_id, height } } } = blocks;
  const {"crypto-com-chain": {usd}} = price;
  return {
    genesis: [
      { chain_id: chain_id }
    ],
    block: [
      { height }
    ],
    token_price: [
      { price: usd, unit_name: "CRO" }
    ]
  };
});

/**
 * It takes a network name,
 * looks up the GraphQL URL for that network in the `networkEndpoints.json` file,
 * environment variable, and then queries the GraphQL endpoint for the network's information
 * @param {string} networkName - The name of the network you want to get the info for.
 * @returns NetworkSummary
 */
export default function loadNetworkSummary(networkName: keyof typeof networkEndpoints) {
  const config = networkEndpoints?.[networkName] as Config;
  const handler = handlers.get(config?.type);

  if (!handler) {
    throw new Error(`Invalid config for  ${networkName}`);
  }

  return handler(networkName, config);
}
