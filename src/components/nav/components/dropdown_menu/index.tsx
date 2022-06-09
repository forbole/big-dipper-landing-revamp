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
      className={classnames(classes.root, isMenu ? 'open' : 'close')}
    />
  );
};

export default DropdownMenu;
