import { FC, useState, useCallback } from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, MenuList, ListItemText } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledListItemButton } from './styles';
import { MenuItemProps, MenuItemLinkProps } from './types';
import { getMenuItems } from './utils';

const MenuItemLink: FC<MenuItemLinkProps> = ({ menuKey, url, isSubmenu }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  let isActive = false;
  if (url === router?.asPath) {
    isActive = true;
  }
  if (router?.asPath?.includes(url) && url !== '/') {
    isActive = true;
  }

  return (
    <Link href={url} key={menuKey} passHref>
      <StyledListItemButton
        className={classnames({
          active: isActive,
          submenu: isSubmenu,
        })}
      >
        <ListItemText primary={t(menuKey)} />
      </StyledListItemButton>
    </Link>
  );
};

const MenuItem: FC<MenuItemProps> = ({ menuKey, url, submenus }) => {
  const [activeSubmenuKey, setActiveSubmenuKey] = useState('');
  const { t } = useTranslation('common');
  const handleToggleSubmenu = useCallback(() => {
    setActiveSubmenuKey(menuKey === activeSubmenuKey ? '' : menuKey);
  }, [menuKey, activeSubmenuKey]);
  if (url) {
    return <MenuItemLink {...{ menuKey, url }} />;
  }
  if (submenus) {
    const Arrow = activeSubmenuKey === menuKey ? KeyboardArrowUpIcon : KeyboardArrowDownIcon;
    return (
      <Box className="submenu-box">
        <StyledListItemButton
          onClick={handleToggleSubmenu}
          className={classnames('submenu', {
            active: activeSubmenuKey === menuKey,
          })}
        >
          <ListItemText primary={t(menuKey)} />
          <Arrow />
        </StyledListItemButton>
        <Box className="submenu-container">
          {menuKey === activeSubmenuKey && submenus.map((submenu) => (
            <MenuItemLink key={submenu.key} menuKey={submenu.key} url={submenu.url} isSubmenu />
          ))}
        </Box>
      </Box>
    );
  }
  return null;
};

const MenuItems: FC = () => {
  const items = getMenuItems();

  return (
    <MenuList>
      {items.map(({ key, ...props }) => (
        <MenuItem key={key} menuKey={key} {...props} />
      ))}
    </MenuList>
  );
};

export default MenuItems;
