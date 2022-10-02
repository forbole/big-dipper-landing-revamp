/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from '@mui/material/Box';
import { FC } from 'react';
import BigDipperRedSvg from '@/src/assets/bigDipperRed.svg?url';
import LinkAnchor from '@/src/components/LinkAnchor';
import { HOME } from '@/src/utils/links';
import Image from 'next/image';
import HamburgerIcon from '../HamburgerIcon';
import HorizontalMenubar from '../HorizontalMenubar';
import MenuItems from '../MenuItemsDesktop';
import { MenuDesktopProps } from './types';
import useStyles from './useStyles';
import useTranslation from 'next-translate/useTranslation';

const MenuDesktop: FC<MenuDesktopProps> = ({ isMenu, toggleHamburgerMenu, ...props }) => {
  const styles = useStyles();
  const { t } = useTranslation('common');
  return (
    <HorizontalMenubar {...props} css={styles.root}>
      <LinkAnchor href={HOME}>
        <span css={styles.dbLogoSvg}>
          <Image src={BigDipperRedSvg} width={175.81} height={36.11} alt={t('bigDipper')} />
        </span>
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
