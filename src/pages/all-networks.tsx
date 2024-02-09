import type { NextPage } from "next";
import type { ComponentProps } from "react";

import loadNetworkList from "@/src/utils/loadNetworkList";

import AllNetworksPage from "../screens/AllNetworks";

/**
 * `AllNetworks` is a function that takes a `networkList` as a prop and returns a `AllNetworksPage`
 * component with the `networkList` prop
 * @param  - NextPage<ComponentProps<typeof AllNetworksPage>>
 */
const AllNetworks: NextPage<ComponentProps<typeof AllNetworksPage>> = () => (
  <AllNetworksPage networkList={loadNetworkList()} />
);

export default AllNetworks;
