export interface MenuType {
  items: string[];
  selected: number;
  handleChange?: (selected: number) => void;
}
