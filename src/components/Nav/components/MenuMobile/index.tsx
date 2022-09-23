/* eslint-disable react-hooks/exhaustive-deps */
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import { FC, useCallback } from 'react';
import BigDipperRedSvg from '@/src/assets/bigDipperRed.svg';
import Image from 'next/image';
import LinkAnchor from '@/src/components/LinkAnchor';
import { HOME } from '@/src/utils/links';
import HamburgerIcon from '../HamburgerIcon';
import HorizontalMenubar from '../HorizontalMenubar';
import MenuItems from '../MenuItemsMobile';
import type { MenuMobileProps } from './types';
import useStyles from './useStyles';
import useTranslation from 'next-translate/useTranslation';

const MenuMobile: FC<MenuMobileProps> = ({ isMenu, toggleHamburgerMenu, ...props }) => {
  const styles = useStyles();
  const handleClose = useCallback(() => toggleHamburgerMenu(), []);
  const { t } = useTranslation('common');
  return (
    <Modal open={isMenu} css={styles.root} onClose={handleClose}>
      <>
        <HorizontalMenubar {...props}>
        <LinkAnchor href={HOME}>
          <span css={styles.dbLogoSvg}>
            <Image src={BigDipperRedSvg} width={214} height={44} alt={t('bigDipper')} />
          </span>
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
