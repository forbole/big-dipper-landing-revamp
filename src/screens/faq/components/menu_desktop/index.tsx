import React from 'react';
import classnames from 'classnames';
import {
  Typography,
  Button,
} from '@material-ui/core';
import { MenuType } from '../../types';
import { useStyles } from './styles';

const MenuDesktop: React.FC<MenuType & ComponentDefault> = (props) => {
  const classes = useStyles();
  return (
    <div className={classnames(props.className, classes.root)}>
      {props.items.map((x, i) => {
        return (
          <Button
            key={x}
            variant="contained"
            className={classnames('button', {
              'button--active': i === props.selected,
            })}
            onClick={() => props.handleChange(i)}
          >
            {x}
          </Button>
        );
      })}
    </div>
  );
};

export default MenuDesktop;
