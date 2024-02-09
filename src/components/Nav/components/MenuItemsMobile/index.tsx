import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import classnames from "classnames";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import useStyles from "./useStyles";
import type { MenuItemLinkProps, MenuItemProps } from "./types";
import { getMenuItems } from "./utils";
import MenuList, { MenuListProps } from "@mui/material/MenuList";
import Box, { BoxProps } from "@mui/material/Box";

/**
 * It returns true if the url is the current path or if the current path includes the url
 * @param {string} url - The url of the menu item
 * @param {NextRouter} router - NextRouter - this is the router object that Next.js provides to us.
 * @returns A boolean value.
 */
function isMenuItemActive(url: string, router: NextRouter) {
  url = url.replace(/#.*$/, "").replace(/\?.*$/, "");
  const routePath = router?.asPath.replace(/#.*$/, "").replace(/\?.*$/, "");
  if (url === routePath) return true;
  if (routePath?.includes(url) && url !== "/") return true;
  return false;
}

/**
 * It renders a button that links to a URL, and it's active if the URL matches the current URL
 * @param  - `menuKey` - the key of the menu item in the translation file
 * @returns A styled list item button with a list item text primary.
 */
const MenuItemLink: FC<MenuItemLinkProps & ListItemButtonProps> = ({
  menuKey,
  url,
  className,
  ...props
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const styles = useStyles();
  return (
    <Link href={url} key={menuKey} passHref>
      <ListItemButton
        className={classnames(
          className,
          {
            menuitemsmobile__active: isMenuItemActive(url, router),
          },
          "menuitemsmobile__list-item-btn",
        )}
        css={styles.listItemButton}
        {...props}
      >
        <ListItemText primary={t(menuKey)} />
      </ListItemButton>
    </Link>
  );
};

type SubmenuProps = Omit<MenuItemProps, "link"> & {
  submenus: Required<MenuItemProps>["submenus"];
} & BoxProps;

/* It's a submenu component that renders a button that toggles the submenu. */
const Submenu: FC<SubmenuProps> = ({
  menuKey,
  submenus,
  className,
  ...props
}) => {
  const [activeSubmenuKey, setActiveSubmenuKey] = useState("");
  const handleToggleSubmenu = useCallback(() => {
    setActiveSubmenuKey(menuKey === activeSubmenuKey ? "" : menuKey);
  }, [menuKey, activeSubmenuKey]);
  const ArrowIcon =
    activeSubmenuKey === menuKey ? KeyboardArrowUpIcon : KeyboardArrowDownIcon;
  const { t } = useTranslation("common");
  const router = useRouter();
  const styles = useStyles();
  return (
    <Box
      className={classnames(className, "menuitemsmobile__submenu-container")}
      {...props}
    >
      <ListItemButton
        onClick={handleToggleSubmenu}
        className={classnames(
          {
            menuitemsmobile__active: submenus.some((submenu) =>
              isMenuItemActive(submenu.url, router),
            ),
          },
          "menuitemsmobile__list-item-btn",
        )}
        css={styles.listItemButton}
      >
        <ListItemText primary={t(menuKey)} />
        <ArrowIcon />
      </ListItemButton>
      <Paper className="menuitemsmobile__submenu-paper" css={styles.paper}>
        {menuKey === activeSubmenuKey &&
          submenus.map((submenu) => (
            <MenuItemLink
              key={submenu.key}
              menuKey={submenu.key}
              url={submenu.url}
            />
          ))}
      </Paper>
    </Box>
  );
};

/**
 * It returns a MenuItemLink if the menu item has a url, a Submenu if it has submenus, and null
 * otherwise
 * @param  - `menuKey` - the key of the menu item.
 * @returns A React component.
 */
const MenuItem: FC<MenuItemProps> = ({
  menuKey,
  url,
  submenus,
  ref: _, // deepscan-disable-line
  ...props
}) => {
  if (url) {
    return <MenuItemLink {...{ menuKey, url }} />;
  }
  if (
    !!submenus &&
    ((_): _ is Omit<SubmenuProps, "menuKey" | "submenus" | "ref"> =>
      !!submenus)(props)
  ) {
    return <Submenu menuKey={menuKey} submenus={submenus} {...props} />;
  }
  return null;
};

/**
 * It maps over the menu items and returns a MenuItem component for each item
 * @returns A MenuList component with a MenuItem component inside of it.
 */
const MenuItems: FC<MenuListProps> = ({ className, ...props }) => {
  const items = getMenuItems();
  const styles = useStyles();

  return (
    <MenuList
      className={classnames(className, "menuitemsmobile__container")}
      {...props}
      css={styles.root}
    >
      {items.map(({ key, ...props }) => (
        <MenuItem
          key={key}
          menuKey={key}
          className={classnames({ menuitemsmobile__active: false })}
          {...props}
        />
      ))}
    </MenuList>
  );
};

export default MenuItems;
