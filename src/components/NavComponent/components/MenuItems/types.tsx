import { ListItemButtonProps } from '@mui/material/ListItemButton';
import { getMenuItems } from './utils';

export type MenuItemsProps = ReturnType<typeof getMenuItems>;

export type MenuItemProps = MenuItemsProps[number] & {
  menuKey: MenuItemProps['key'];
};

export interface MenuItemLinkProps extends ListItemButtonProps {
  menuKey: MenuItemProps['key'];
  url: Required<MenuItemProps>['url'];
}
