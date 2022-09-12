import { ComponentProps } from 'react';
import { NextPage } from 'next';
import loadNetworkList from '~src/utils/loadNetworkList';
import AllNetworksPage from '../screens/AllNetworks';

/**
 * It returns an object with a `props` property that contains the `networkList` property
 * @returns An object with a props property that contains the networkList.
 */
export async function getServerSideProps() {
  return {
    props: {
      networkList: await loadNetworkList(),
    },
  };
}

/**
 * `AllNetworks` is a function that takes a `networkList` as a prop and returns a `AllNetworksPage`
 * component with the `networkList` prop
 * @param  - NextPage<ComponentProps<typeof AllNetworksPage>>
 */
const AllNetworks: NextPage<ComponentProps<typeof AllNetworksPage>> = ({
  networkList,
}) => <AllNetworksPage networkList={networkList} />;

export default AllNetworks;
