import React from 'react';
import BDLogo from '@assets/big-dipper-red.svg';
// import HamburgerMenu from '@assets/hamburger-menu.svg';
import { SectionLimit } from '@components';
import { useStyles } from './styles';
import HamburgerIcon from './components/hamburger_icon';
import DropdownMenu from './components/dropdown_menu';
import { useNav } from './hooks';

const Nav = () => {
  const classes = useStyles();
  const {
    isIcon,
    isMenu,
    toggleHamburgerMenu,
  } = useNav();

  return (
    <div>
      <SectionLimit className={classes.root}>
        <div className="wrapper">
          <BDLogo className="logo" />
          {/* <HamburgerMenu className="hamburgerMenu" /> */}
          <HamburgerIcon
            toggleHamburgerMenu={toggleHamburgerMenu}
            isIcon={isIcon}
          />
        </div>
        <DropdownMenu
          isMenu={isMenu}
        />
      </SectionLimit>
    </div>
  );
};

export default Nav;
