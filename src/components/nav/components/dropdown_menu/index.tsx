import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';

const DropdownMenu = (props:any) => {
  const classes = useStyles();
  const {
    isMenu,
  } = props;

  return (
    <div
      // className={classes.root}
      className={classnames(classes.root, isMenu ? 'modal-open' : 'modal-close')}
    />
  );
};

export default DropdownMenu;
