/* eslint-disable no-console */
import TTLCache from "@isaacs/ttlcache";
import networks from "@/networks.json";
import loadNetworkSummary from "@/src/utils/loadNetworkSummary";

const cache = new TTLCache({ max: 1, ttl: 1000 * 30 });
const failback = new TTLCache({ max: 1, ttl: Number.POSITIVE_INFINITY });

export default async function loadNetworkSummaries() {
  const cached = cache.get("networks");

  /* Checking if the value is in the cache. If it is, it returns the value. */
  if (cached) return cached;

  /* Loading the network summary for each network. */
  const config = networks;
  const allNetworks = await Promise.all(
    config.map((network) =>
      loadNetworkSummary(network as Network)
        .then((data) => ({ networkName: network.name, data }))
        .catch((error) => {
          const errorMessage = ((err): err is Error =>
            !!(err as Error).message)(error)
            ? error.message
            : String(error);
          console.error("errorMessage", errorMessage);
          return { networkName: network.name, data: null };
        }),
    ),
  );
  const result = allNetworks.reduce((map, { networkName, data }) => {
    return { [networkName]: data, ...map };
  }, {});

  /* Saving the value of the key 'networks' to the memory cache. */
  cache.set("networks", result);
  failback.set("networks", result);
  return result;
}
