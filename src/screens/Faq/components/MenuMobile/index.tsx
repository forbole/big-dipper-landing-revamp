import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import { FC } from 'react';
import { useMenuMobile } from './hooks';
import type { MenuType } from './types';
import useStyles from './useStyles';

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

const MenuMobile: FC<MenuType & JSX.IntrinsicElements['nav']> = ({
  className,
  handleChange,
  items,
  selected,
}) => {
  const { anchorEl, handleClick, handleClose } = useMenuMobile();
  const styles = useStyles();
  return (
    <nav className={className} css={styles.root}>
      <Button className="menumobile__selected" onClick={handleClick}>
        {items[selected]}
        {anchorEl ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
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
    </nav>
  );
};

export default MenuMobile;
