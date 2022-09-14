/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from '@mui/material/Box';
import { FC } from 'react';
import BigDipperRedSvg from '~src/assets/bigDipperRed.svg';
import LinkAnchor from '~src/components/LinkAnchor';
import { HOME } from '~src/utils/links';
import HamburgerIcon from '../HamburgerIcon';
import HorizontalMenubar from '../HorizontalMenubar';
import MenuItems from '../MenuItemsDesktop';
import { MenuDesktopProps } from './types';
import useStyles from './useStyles';

const MenuDesktop: FC<MenuDesktopProps> = ({ isMenu, toggleHamburgerMenu, ...props }) => {
  const styles = useStyles();
  return (
    <HorizontalMenubar {...props} css={styles.root}>
      <LinkAnchor href={HOME}>
        <BigDipperRedSvg width={214} height={44} css={styles.dbLogoSvg} />
      </LinkAnchor>
      <HamburgerIcon
        toggleHamburgerMenu={toggleHamburgerMenu}
        style={{ display: isMenu ? 'none' : undefined }}
      />
      <Box className="menudesktop__menu-container">
        <MenuItems />
      </Box>
    </HorizontalMenubar>
  );
};

export default MenuDesktop;
