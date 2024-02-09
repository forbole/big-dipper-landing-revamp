/**
 * If the network has a mainnet link, return the url of that link,
 * otherwise if the network has a testnet link, return the url of that link,
 * otherwise if the network has a devnet link, return the url of that link,
 * otherwise return the url of the first link, or undefined if there are no links.
 * @param {Network} network - Network
 * @returns The url of the network.
 */
export default function getUrlFromNetwork(network: Network) {
  const mainnet = network?.links?.find((l) => /^mainnet$/i.test(l.name));

  if (mainnet?.url) {
    return mainnet.url;
  }

  const testnet = network?.links?.find((l) => /^testnet$/i.test(l.name));

  if (testnet?.url) {
    return testnet.url;
  }

  return network?.links?.[0]?.url ?? undefined;
}
