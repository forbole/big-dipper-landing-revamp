import React from 'react';
import BDLogo from '@assets/big-dipper-red.svg';
import HamburgerMenu from '@assets/hamburger-menu.svg';
import { SectionLimit } from '@components';
import { useStyles } from './styles';
import HamburgerIcon from './components/hamburgerIcon';

const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <SectionLimit className={classes.root}>
        <div className="wrapper">
          <BDLogo className="logo" />
          <HamburgerMenu className="hamburgerMenu" />
          <HamburgerIcon open />
        </div>
      </SectionLimit>
    </div>
  );
};

export default Nav;
