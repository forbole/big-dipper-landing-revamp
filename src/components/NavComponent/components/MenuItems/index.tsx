import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ListItemButton, {
  ListItemButtonProps,
} from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { ComponentProps, FC, forwardRef } from 'react';
import { useCallback, useState } from 'react';
import useStyles from './useStyles';
import type { MenuItemLinkProps, MenuItemProps } from './types';
import { getMenuItems } from './utils';
import MenuList, { MenuListProps } from '@mui/material/MenuList';
import { motion, Variants } from 'framer-motion';

const MotionListItemButton = motion(ListItemButton);
const variants: Variants = {
  hover: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    transition: { duration: 0.2, delay: 0, ease: 'easeOut' },
  },
};

/**
 * It returns true if the url is the current path or if the current path includes the url
 * @param {string} url - The url of the menu item
 * @param {NextRouter} router - NextRouter - this is the router object that Next.js provides to us.
 * @returns A boolean value.
 */
function isMenuItemActive(url: string, router: NextRouter) {
  url = url.replace(/#.*$/, '').replace(/\?.*$/, '');
  if (url === router?.asPath) return true;
  if (router?.asPath?.includes(url) && url !== '/') return true;
  return false;
}

/**
 * It renders a button that links to a URL, and it's active if the URL matches the current URL
 * @param  - `menuKey` - the key of the menu item in the translation file
 * @returns A styled list item button with a list item text primary.
 */
const MenuItemLink: FC<
  MenuItemLinkProps & ComponentProps<typeof MotionListItemButton>
> = ({ menuKey, url, className, ...props }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <Link href={url} key={menuKey} passHref>
      <MotionListItemButton
        variants={variants}
        whileHover="hover"
        className={classnames(
          className,
          {
            menuitems__active: isMenuItemActive(url, router),
          },
          'menuitems__list-item-btn'
        )}
        {...props}
      >
        <ListItemText primary={t(menuKey)} />
      </MotionListItemButton>
    </Link>
  );
};

type SubmenuProps = Omit<MenuItemProps, 'link'> & {
  submenus: Required<MenuItemProps>['submenus'];
} & ComponentProps<typeof motion.div>;

/* It's a submenu component that renders a button that toggles the submenu. */
const Submenu: FC<SubmenuProps> = forwardRef(function _(
  { menuKey, submenus, className, ...props },
  ref
) {
  const [activeSubmenuKey, setActiveSubmenuKey] = useState('');
  const handleToggleSubmenu = useCallback(() => {
    setActiveSubmenuKey(menuKey === activeSubmenuKey ? '' : menuKey);
  }, [menuKey, activeSubmenuKey]);
  const ArrowIcon =
    activeSubmenuKey === menuKey ? KeyboardArrowUpIcon : KeyboardArrowDownIcon;
  const { t } = useTranslation('common');
  const router = useRouter();
  return (
    <motion.div
      className={classnames(className, 'menuitems__submenu-container')}
      {...props}
      ref={ref}
    >
      <MotionListItemButton
        onClick={handleToggleSubmenu}
        variants={variants}
        whileHover="hover"
        className={classnames(
          {
            menuitems__active: submenus.some((submenu) =>
              isMenuItemActive(submenu.url, router)
            ),
          },
          'menuitems__list-item-btn'
        )}
      >
        <ListItemText primary={t(menuKey)} />
        <ArrowIcon />
      </MotionListItemButton>
      <Paper className="menuitems__submenu-paper">
        {menuKey === activeSubmenuKey &&
          submenus.map((submenu) => (
            <MenuItemLink
              key={submenu.key}
              menuKey={submenu.key}
              url={submenu.url}
            />
          ))}
      </Paper>
    </motion.div>
  );
});

/**
 * It returns a MenuItemLink if the menu item has a url, a Submenu if it has submenus, and null
 * otherwise
 * @param  - `menuKey` - the key of the menu item.
 * @returns A React component.
 */
const MenuItem: FC<
  MenuItemProps & (ListItemButtonProps | SubmenuProps | undefined)
> = ({ menuKey, url, submenus, ...props }) => {
  if (url) {
    return <MenuItemLink {...{ menuKey, url }} />;
  }
  if (
    !!submenus &&
    ((_): _ is Omit<SubmenuProps, 'menuKey' | 'submenus'> => !!submenus)(props)
  ) {
    return <Submenu menuKey={menuKey} submenus={submenus} {...props} />;
  }
  return null;
};

/**
 * It maps over the menu items and returns a MenuItem component for each item
 * @returns A MenuList component with a MenuItem component inside of it.
 */
const MenuItems: FC<MenuListProps> = forwardRef(function _(
  { className, ...props },
  ref
) {
  const items = getMenuItems();
  const styles = useStyles();

  return (
    <MenuList
      className={classnames(className, 'menuitems__container')}
      {...props}
      ref={ref}
      css={styles.root}
    >
      {items.map(({ key, ...props }) => (
        <MenuItem
          key={key}
          menuKey={key}
          className={classnames({ menuitems__active: false })}
          {...props}
        />
      ))}
    </MenuList>
  );
});

export default MenuItems;
