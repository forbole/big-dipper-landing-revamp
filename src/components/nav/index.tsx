import React from 'react';
import BDLogo from '@assets/big-dipper-red.svg';
import HamburgerMenu from '@assets/hamburger-menu.svg';
import { SectionLimit } from '@components';
import { useStyles } from './styles';
import HamburgerIcon from './components/hamburger_icon';
import DropdownMenu from './components/dropdown_menu';

const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <SectionLimit className={classes.root}>
        <div className="wrapper">
          <BDLogo className="logo" />
          <HamburgerMenu className="hamburgerMenu" />
          <HamburgerIcon open />
          <DropdownMenu />
        </div>
      </SectionLimit>
    </div>
  );
};

export default Nav;
