/* eslint-disable react-hooks/exhaustive-deps */
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import { FC, useCallback } from 'react';
import BigDipperRedSvg from '~src/assets/bigDipperRed.svg';
import LinkAnchor from '~src/components/LinkAnchor';
import { HOME } from '~src/utils/links';
import HamburgerIcon from '../HamburgerIcon';
import HorizontalMenubar from '../HorizontalMenubar';
import MenuItems from '../MenuItemsMobile';
import type { MenuMobileProps } from './types';
import useStyles from './useStyles';

const MenuMobile: FC<MenuMobileProps> = ({ isMenu, toggleHamburgerMenu, ...props }) => {
  const styles = useStyles();
  const handleClose = useCallback(() => toggleHamburgerMenu(), []);
  return (
    <Modal open={isMenu} css={styles.root} onClose={handleClose}>
      <>
        <HorizontalMenubar {...props}>
        <LinkAnchor href={HOME}>
          <BigDipperRedSvg width={214} height={44} css={styles.dbLogoSvg} />
        </LinkAnchor>
          <HamburgerIcon toggleHamburgerMenu={toggleHamburgerMenu} />
        </HorizontalMenubar>
        <Paper className="menumobile__paper">
          <MenuItems />
        </Paper>
      </>
    </Modal>
  );
};

export default MenuMobile;
