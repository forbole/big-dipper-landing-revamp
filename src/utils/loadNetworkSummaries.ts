/* eslint-disable no-console */
import networks from "@/networks.json";
import TTLCache from "@isaacs/ttlcache";

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
        .then((data) => ({ data, networkName: network.name }))
        .catch((error) => {
          const errorMessage = ((err): err is Error =>
            !!(err as Error).message)(error)
            ? error.message
            : String(error);

          console.error("errorMessage", network.name, errorMessage);

          return { data: null, networkName: network.name };
        }),
    ),
  );

  const result = allNetworks.reduce(
    (map, { data, networkName }) => ({ [networkName]: data, ...map }),
    {},
  );

  /* Saving the value of the key 'networks' to the memory cache. */
  cache.set("networks", result);
  failback.set("networks", result);

  return result;
}
