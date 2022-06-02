import React from 'react';
import BDLogo from '@assets/big-dipper-red.svg';
import { useStyles } from './styles';

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BDLogo className="logo" />
    </div>
  );
};

export default Nav;
