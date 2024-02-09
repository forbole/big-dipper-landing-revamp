import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import Box, { BoxProps } from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import MenuList, { MenuListProps } from "@mui/material/MenuList";
import Popover from "@mui/material/Popover";
import classnames from "classnames";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { ComponentRef, FC, useCallback, useState } from "react";
import type { MenuItemLinkProps, MenuItemProps } from "./types";
import useStyles from "./useStyles";
import { getMenuItems } from "./utils";
import { useRef } from "react";

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
  menuKey,
  submenus,
  className,
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
        onClick={handleToggleSubmenu}
        className={classnames(
          {
            menuitemsdesktop__active: submenus.some((submenu) =>
              isMenuItemActive(submenu.url, router),
            ),
          },
          "menuitemsdesktop__list-item-btn",
        )}
        css={styles.listItemButton}
        ref={buttonRef}
      >
        <ListItemText primary={t(menuKey)} />
        <ArrowIcon />
      </ListItemButton>
      <Popover
        className="menuitemsdesktop__submenu-popover"
        open={open}
        anchorEl={buttonRef.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          className: "menuitemsdesktop__submenu-paper",
          style: { width: buttonRef.current?.clientWidth },
        }}
        onClose={handleCLose}
        css={styles.popover}
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
> = ({
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
      className={classnames(className, "menuitemsdesktop__container")}
      {...props}
      css={styles.root}
    >
      {items.map(({ key, ...props }) => (
        <MenuItem
          key={key}
          menuKey={key}
          className={classnames({ menuitemsdesktop__active: false })}
          {...props}
        />
      ))}
    </MenuList>
  );
};

export default MenuItems;
