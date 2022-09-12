/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from '@mui/material/Box';
import { FC, forwardRef } from 'react';
import BigDipperRedSvg from '~src/assets/bigDipperRed.svg';
import LinkAnchor from '~src/components/LinkAnchor';
import { HOME } from '~src/utils/links';
import HamburgerIcon from '../HamburgerIcon';
import HorizontalMenubar from '../HorizontalMenubar';
import MenuItems from '../MenuItems';
import { MenuDesktopProps } from './types';
import useStyles from './useStyles';

const MenuDesktop: FC<MenuDesktopProps> = forwardRef(function _(
  { isIcon, isMenu, toggleHamburgerMenu, ...props },
  ref
) {
  const styles = useStyles();
  return (
    <HorizontalMenubar {...props} ref={ref} css={styles.root}>
      <LinkAnchor href={HOME}>
        <BigDipperRedSvg width={175} height={36} css={styles.dbLogoSvg} />
      </LinkAnchor>
      <HamburgerIcon
        toggleHamburgerMenu={toggleHamburgerMenu}
        isIcon={isIcon}
        style={{ display: isMenu ? 'none' : undefined }}
      />
      <Box className="menudesktop__menu-container">
        <MenuItems />
      </Box>
    </HorizontalMenubar>
  );
});

export default MenuDesktop;
