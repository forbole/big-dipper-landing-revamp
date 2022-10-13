declare module '*.svg';
declare module '*.svg?url';
declare module '*.woff2';

interface Override<T1, T2> extends Omit<T1, keyof T2>, T2 {}

interface ComponentDefault {
  className?: string;
}

interface NetworkLink {
  name: string;
  chain_id: string;
  url: string;
}

interface DefaultNetwork {
  name: string;
  endpoint: string;
  links: Array<NetworkLink>;
}

interface SolanaNetwork {
  name: 'Solana';
  chain_id: string;
  endpoint: string;
  links: Array<NetworkLink>;
}

interface ElrondNetwork {
  name: 'Elrond';
  chain_id: string;
  stats: string;
  economics: string;
  links: Array<NetworkLink>;
}

interface CryptoorgNetwork {
  name: 'Crypto.org Chain' ;
  blocks: string;
  price: string;
  links: Array<NetworkLink>;
}

type Network = SolanaNetwork | ElrondNetwork | CryptoorgNetwork | DefaultNetwork;
