declare module '*.svg';
declare module '*.svg?url';
declare module '*.woff2';

interface Override<T1, T2> extends Omit<T1, keyof T2>, T2 {}

interface ComponentDefault {
  className?: string;
}

interface NetworkLink {
  chain_id: string;
  name: string;
  url: string;
}

interface DefaultNetwork {
  endpoint: string;
  links: Array<NetworkLink>;
  name: string;
}

interface SolanaNetwork {
  chain_id: string;
  endpoint: string;
  links: Array<NetworkLink>;
  name: 'Solana';
}

interface MultiversXNetwork {
  chain_id: string;
  economics: string;
  links: Array<NetworkLink>;
  name: 'MultiversX';
  stats: string;
}

interface CryptoorgNetwork {
  blocks: string;
  links: Array<NetworkLink>;
  name: 'Crypto.org Chain' ;
  price: string;
}

type Network = CryptoorgNetwork | DefaultNetwork | MultiversXNetwork | SolanaNetwork;
