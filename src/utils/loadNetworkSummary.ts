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

const handlers: {[key: string]: (network: Network) => Promise<NetworkSummary | undefined>} = {
  Solana: handleSolana,
  MultiversX: handleMultiversX,
  "Crypto.org Chain": handleCryptoorg,
}

/**
 * It takes a network name,
 * looks up the GraphQL URL for that network in the `networks.json` file,
 * environment variable, and then queries the GraphQL endpoint for the network's information
 * @param {Network} network - The network you want to get the info for.
 * @returns NetworkSummary
 */
 export default async function loadNetworkSummary(network: Network) {
  const handler = handlers[network.name] || handleDefault;
  return await handler(network);
}

 async function handleDefault(network: Network) {
  if (!isNetwork(network)) {
    return undefined;
  }

  try {
    const res = await fetch(network.endpoint, {
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

    if (!data || !('genesis' in data && 'block' in data && 'token_price' in data)) {
      throw new Error(`Could not parse data from ${network.name}`);
    }

    return data;
  } catch (error) {
    const res = await fetch(network.endpoint, {
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
  }`
      }),
    });
    const { data } = await res.json();

    if (!data || !('genesis' in data && 'block' in data)) {
      throw new Error(`Could not parse data from ${network.name}`);
    }

    return data;
  }

  function isNetwork(u: unknown): u is DefaultNetwork {
    const n = u as DefaultNetwork;
    return 'endpoint' in n;
  }
}

async function handleSolana(network: Network) {
  if (!isSolana(network)) {
    return undefined;
  }

  const res = await fetch(network.endpoint, {
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

  if (!data || !('block' in data && 'token_price' in data)) {
    throw new Error(`Could not parse data from ${network.name}`);
  }

  return {
    genesis: [
      { chain_id: network.chain_id }
    ],
    ...data,
  };
  function isSolana(u: unknown): u is SolanaNetwork {
    const n = u as SolanaNetwork;
    return n?.name === 'Solana' && 'chain_id' in n && 'endpoint' in n;
  }
}

async function handleMultiversX(network: Network) {
  if (!isMultiversX(network)) {
    return undefined;
  }

  const promises = [
    fetch(network.stats).then(r => r.json()),
    fetch(network.economics).then(r => r.json())];
  const [stats, economics] = await Promise.all(promises);
  const { blocks } = stats;
  const { price } = economics;
  return {
    genesis: [
      { chain_id: network.chain_id }
    ],
    block: [
      { height: blocks }
    ],
    token_price: [
      { price: price, unit_name: "EGLD" }
    ]
  };
  function isMultiversX(u: unknown): u is MultiversXNetwork {
    const n = u as MultiversXNetwork
    return n?.name === 'MultiversX' && 'chain_id' in n && 'stats' in n && 'economics' in  n;
  }
}

async function handleCryptoorg(network: Network) {
  if (!isCryptoorg(network)) {
    return undefined;
  }

  const promises = [
    fetch(network.blocks).then(r => r.json()),
    fetch(network.price).then(r => r.json())];
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
  function isCryptoorg(u: unknown): u is CryptoorgNetwork {
    const n = u as CryptoorgNetwork;
    return n?.name === 'Crypto.org Chain' && 'blocks' in n && 'price' in n;
  }
}
