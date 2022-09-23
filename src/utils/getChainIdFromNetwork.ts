export default function getChainIdFromNetwork(network: Network) {
  const mainnet = network?.links?.find((l) => /^mainnet$/i.test(l.name));
  if (mainnet?.url) {
    return mainnet.chain_id;
  }
  const testnet = network?.links?.find((l) => /^testnet$/i.test(l.name));
  if (testnet?.url) {
    return testnet.chain_id;
  }
  return network?.links?.[0]?.chain_id ?? undefined;
}
