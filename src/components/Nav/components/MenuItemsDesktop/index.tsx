import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";
import type { ListItemButtonProps } from "@mui/material/ListItemButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import type { MenuListProps } from "@mui/material/MenuList";
import MenuList from "@mui/material/MenuList";
import Popover from "@mui/material/Popover";
import classnames from "classnames";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import type { NextRouter } from "next/router";
import { useRouter } from "next/router";
import type { ComponentRef, FC } from "react";
import { useCallback, useRef, useState } from "react";

import type { MenuItemLinkProps, MenuItemProps } from "./types";
import useStyles from "./useStyles";
import { getMenuItems } from "./utils";

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
  className,
  menuKey,
  url,
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
            menuitemsdesktop__active: isMenuItemActive(url, router),
          },
          "menuitemsdesktop__list-item-btn",
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
  className,
  menuKey,
  submenus,
  ...props
}) => {
  const [activeSubmenuKey, setActiveSubmenuKey] = useState("");
  const [open, setOpen] = useState(false);

  const handleToggleSubmenu = useCallback(() => {
    setActiveSubmenuKey(menuKey === activeSubmenuKey ? "" : menuKey);
    setOpen(true);
  }, [menuKey, activeSubmenuKey]);

  const handleCLose = useCallback(() => {
    setActiveSubmenuKey(menuKey === activeSubmenuKey ? "" : menuKey);
    setOpen(false);
  }, [menuKey, activeSubmenuKey]);

  const ArrowIcon =
    activeSubmenuKey === menuKey ? KeyboardArrowUpIcon : KeyboardArrowDownIcon;

  const buttonRef = useRef<ComponentRef<typeof ListItemButton>>(null);
  const { t } = useTranslation("common");
  const router = useRouter();
  const styles = useStyles();

  return (
    <Box
      className={classnames(className, "menuitemsdesktop__submenu-container")}
      {...props}
    >
      <ListItemButton
        className={classnames(
          {
            menuitemsdesktop__active: submenus.some((submenu) =>
              isMenuItemActive(submenu.url, router),
            ),
          },
          "menuitemsdesktop__list-item-btn",
        )}
        css={styles.listItemButton}
        onClick={handleToggleSubmenu}
        ref={buttonRef}
      >
        <ListItemText primary={t(menuKey)} />
        <ArrowIcon />
      </ListItemButton>
      <Popover
        PaperProps={{
          className: "menuitemsdesktop__submenu-paper",
          style: { width: buttonRef.current?.clientWidth },
        }}
        anchorEl={buttonRef.current}
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom",
        }}
        className="menuitemsdesktop__submenu-popover"
        css={styles.popover}
        onClose={handleCLose}
        open={open}
      >
        {menuKey === activeSubmenuKey &&
          submenus.map((submenu) => (
            <MenuItemLink
              key={submenu.key}
              menuKey={submenu.key}
              url={submenu.url}
            />
          ))}
      </Popover>
    </Box>
  );
};

/**
 * It returns a MenuItemLink if the menu item has a url, a Submenu if it has submenus, and null
 * otherwise
 * @param  - `menuKey` - the key of the menu item.
 * @returns A React component.
 */
const MenuItem: FC<
  MenuItemProps & (ListItemButtonProps | SubmenuProps | undefined)
> = ({ menuKey, submenus, url, ...props }) => {
  if (url) {
    return <MenuItemLink {...{ menuKey, url }} />;
  }

  if (
    !!submenus &&
    ((_): _ is Omit<SubmenuProps, "menuKey" | "ref" | "submenus"> =>
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
      className={classnames(className, "menuitemsdesktop__container")}
      {...props}
      css={styles.root}
    >
      {items.map(({ key, ...props2 }) => (
        <MenuItem
          className={classnames({ menuitemsdesktop__active: false })}
          key={key}
          menuKey={key}
          {...props2}
        />
      ))}
    </MenuList>
  );
};

export default MenuItems;
