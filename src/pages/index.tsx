import type { NextPage } from 'next';
import { ComponentProps } from 'react';
import loadNetworkList from '~src/utils/loadNetworkList';
import HomePage from '../screens/HomeScreen';

/**
 * It returns an object with a `props` property that contains the `networkList` property
 * @returns An object with a props property that contains the networkList.
 */
export async function getStaticProps() {
  return {
    props: {
      networkList: await loadNetworkList(),
    },
  };
}

const Home: NextPage<ComponentProps<typeof HomePage>> = ({ networkList }) => (
  <HomePage networkList={networkList} />
);

export default Home;
