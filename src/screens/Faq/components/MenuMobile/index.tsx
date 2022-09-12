import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { useMenuMobile } from './hooks';
import type { MenuType } from './types';
import useStyles from './useStyles';
import { motion } from 'framer-motion';

interface MenuItemMobileProps {
  label: string;
  index: number;
  selected: number;
  handleChange: MenuType['handleChange'];
  handleClose: () => void;
}

const MenuItemMobile: FC<MenuItemMobileProps> = ({
  label,
  index,
  selected,
  handleChange,
  handleClose,
}) => {
  return (
    <MenuItem
      onClick={() => {
        handleChange?.(index);
        handleClose();
      }}
      disableRipple
      className={classnames({
        menumobile__active: index === selected,
      })}
    >
      <Typography variant="h5">{label}</Typography>
    </MenuItem>
  );
};

const MenuMobile: FC<MenuType & ComponentProps<typeof motion.nav>> = ({
  className,
  handleChange,
  items,
  selected,
}) => {
  const { anchorEl, handleClick, handleClose } = useMenuMobile();
  const styles = useStyles();
  return (
    <motion.nav className={className} css={styles.root}>
      <Button className="menumobile__selected" onClick={handleClick}>
        {items[selected]}
      </Button>
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        css={styles.menu}
      >
        {items.map((label, index) => (
          <MenuItemMobile
            key={label}
            label={label}
            index={index}
            selected={selected}
            handleChange={handleChange}
            handleClose={handleClose}
          />
        ))}
      </Menu>
    </motion.nav>
  );
};

export default MenuMobile;
