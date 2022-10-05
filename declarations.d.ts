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

interface Network {
  name: string;
  links: Array<NetworkLink>;
}
