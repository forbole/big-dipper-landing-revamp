export type FAQType = {
  selected: number;
};

export type MenuType = {
  items: string[];
  selected: number;
  handleChange: (selected: number) => void;
};
