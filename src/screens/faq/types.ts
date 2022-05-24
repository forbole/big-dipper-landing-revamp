export type FAQType = {
  selected: number;
};

export type MenuType = {
  items: string[];
  selected: number;
  handleChange: (selected: number) => void;
};

export type ContentType = {
  content: {
    question: string;
    answer: React.ReactNode | string;
  }[];
};
