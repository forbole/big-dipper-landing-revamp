import type { NextPage } from 'next';
import { ComponentProps } from 'react';
import loadNetworkList from '@/src/utils/loadNetworkList';
import HomePage from '../screens/Home';

const Home: NextPage<ComponentProps<typeof HomePage>> = () => (
  <HomePage networkList={loadNetworkList()} />
);

export default Home;
