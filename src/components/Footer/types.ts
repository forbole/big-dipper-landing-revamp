export interface LinkType {
  key: string;
  url: string;
  external?: boolean;
}

export interface IconType {
  component: React.ReactNode;
  className: string;
  url: string;
}
