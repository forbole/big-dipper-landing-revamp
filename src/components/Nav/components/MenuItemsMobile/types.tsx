import type { ListItemButtonProps } from "@mui/material/ListItemButton";

import type { getMenuItems } from "./utils";

type MenuItemsProps = ReturnType<typeof getMenuItems>;

export type MenuItemProps = MenuItemsProps[number] & {
  menuKey: MenuItemProps["key"];
} & JSX.IntrinsicElements["ul"];

export interface MenuItemLinkProps extends ListItemButtonProps {
  menuKey: MenuItemProps["key"];
  url: Required<MenuItemProps>["url"];
}
