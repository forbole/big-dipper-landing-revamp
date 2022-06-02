import React from 'react';
import BDLogo from '@assets/big-dipper-red.svg';
import HamburgerMenu from '@assets/hamburger-menu.svg';
import { useStyles } from './styles';

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="wrapper">
        <BDLogo className="logo" />
        <HamburgerMenu className="hamburgerMenu" />
      </div>
    </div>
  );
};

export default Nav;
