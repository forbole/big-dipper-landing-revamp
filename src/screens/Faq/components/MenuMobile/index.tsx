import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import classnames from "classnames";
import type { FC } from "react";

import { useMenuMobile } from "./hooks";
import type { MenuType } from "./types";
import useStyles from "./useStyles";

interface MenuItemMobileProps {
  handleChange: MenuType["handleChange"];
  handleClose: () => void;
  index: number;
  label: string;
  selected: number;
}

const MenuItemMobile: FC<MenuItemMobileProps> = ({
  handleChange,
  handleClose,
  index,
  label,
  selected,
}) => (
  <MenuItem
    className={classnames({
      menumobile__active: index === selected,
    })}
    disableRipple
    onClick={() => {
      handleChange?.(index);
      handleClose();
    }}
  >
    <Typography variant="h5">{label}</Typography>
  </MenuItem>
);

const MenuMobile: FC<MenuType & JSX.IntrinsicElements["nav"]> = ({
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
        {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom",
        }}
        css={styles.menu}
        elevation={0}
        onClose={handleClose}
        open={!!anchorEl}
        transformOrigin={{
          horizontal: "left",
          vertical: "top",
        }}
      >
        {items.map((label, index) => (
          <MenuItemMobile
            handleChange={handleChange}
            handleClose={handleClose}
            index={index}
            key={label}
            label={label}
            selected={selected}
          />
        ))}
      </Menu>
    </nav>
  );
};

export default MenuMobile;
