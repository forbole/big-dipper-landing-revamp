export interface MenuType {
  handleChange?: (selected: number) => void;
  items: string[];
  selected: number;
}
