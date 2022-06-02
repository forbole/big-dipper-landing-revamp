import React from 'react';
import BDLogo from '@assets/big-dipper-red.svg';
import HamburgerMenu from '@assets/hamburger-menu.svg';
import { SectionLimit } from '@components';
import { useStyles } from './styles';

const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <SectionLimit className={classes.root}>
        <div className="wrapper">
          <BDLogo className="logo" />
          <HamburgerMenu className="hamburgerMenu" />
        </div>
      </SectionLimit>
    </div>
  );
};

export default Nav;
