export interface NetworkBoxProps {
  network: Network;
  isOpened: boolean;
  onOpen: (name: string) => void;
}
export interface NetworkMenuLinkProps {
  link: NetworkLink;
}
