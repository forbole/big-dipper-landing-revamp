/**
 * It fetches a JSON file from a URL, and returns the data
 * @returns An array of objects.
 */
export default async function loadNetworkList() {
  if (!process.env.NEXT_PUBLIC_NETWORK_LIST_API) {
    throw new Error('NEXT_PUBLIC_NETWORK_LIST_API is not configured');
  }
  const res = await fetch(process.env.NEXT_PUBLIC_NETWORK_LIST_API);
  const data = await res.json();
  return data as Array<Network>;
}
