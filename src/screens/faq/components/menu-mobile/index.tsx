import React from 'react';
import {
  Button,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import classnames from 'classnames';
import classNames from 'classnames';
import { MenuType } from '../../types';
import { useMenuMobile } from './hooks';
import { useStyles } from './styles';

const MenuMobile: React.FC<MenuType & ComponentDefault> = (props) => {
  const {
    anchorEl,
    handleClick,
    handleClose,
  } = useMenuMobile();
  const classes = useStyles();
  return (
    <div className={classnames(props.className, classes.root)}>
      <Button
        className="selected"
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
      >
        {props.items[props.selected]}
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
        getContentAnchorEl={null}
        className={classes.menu}
      >
        {props.items.map((x, i) => {
          return (
            <MenuItem
              onClick={() => {
                props.handleChange(i);
                handleClose();
              }}
              disableRipple
              key={x}
              className={classNames({
                active: i === props.selected,
              })}
            >
              <Typography variant="h5">
                {x}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default MenuMobile;
