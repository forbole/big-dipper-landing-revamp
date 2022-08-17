import { getMenuItems } from './utils';

export type MenuItemsProps = ReturnType<typeof getMenuItems>;

export type MenuItemProps = MenuItemsProps[number] & { menuKey: MenuItemProps['key'] };

export type MenuItemLinkProps = {
  menuKey: MenuItemProps['key'];
  url: Required<MenuItemProps>['url'];
  isSubmenu?: boolean;
}
