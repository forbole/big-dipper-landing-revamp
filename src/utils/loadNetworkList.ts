const SAMPLE_NETWORK_LIST_API = 'https://raw.githubusercontent.com/forbole/big-dipper-networks/main/networks.json'
/**
 * It fetches a JSON file from a URL, and returns the data
 * @returns An array of objects.
 */
export default async function loadNetworkList() {
  const networkListApi =
    process.env.NEXT_PUBLIC_NETWORK_LIST_API ?? SAMPLE_NETWORK_LIST_API;
  const res = await fetch(networkListApi);
  const data = await res.json();
  return data as Array<Network>;
}
