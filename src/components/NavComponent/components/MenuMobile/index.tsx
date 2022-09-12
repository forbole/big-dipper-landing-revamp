import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import { FC, forwardRef } from 'react';
import HamburgerIcon from '../HamburgerIcon';
import HorizontalMenubar from '../HorizontalMenubar';
import MenuItems from '../MenuItems';
import type { MenuMobileProps } from './types';
import useStyles from './useStyles';

const MenuMobile: FC<MenuMobileProps> = forwardRef(function _(
  { isMenu, toggleHamburgerMenu, ...props },
  ref
) {
  const styles = useStyles();
  return (
    <Modal open={isMenu} css={styles.root}>
      <>
        <HorizontalMenubar {...props} ref={ref}>
          <HamburgerIcon
            toggleHamburgerMenu={toggleHamburgerMenu}
            isIcon={false}
          />
        </HorizontalMenubar>
        <Paper className="menumobile__paper">
          <MenuItems />
        </Paper>
      </>
    </Modal>
  );
});

export default MenuMobile;
