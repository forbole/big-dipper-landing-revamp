export interface NetworkBoxProps {
  isOpened: boolean;
  network: Network;
  onOpen: (name: string) => void;
}
export interface NetworkMenuLinkProps {
  link: NetworkLink;
}
