import React from 'react';
import BDLogo from '@assets/big-dipper-red.svg';
import { SectionLimit } from '@components';
import { useStyles } from './styles';
import HamburgerIcon from './components/hamburger-icon';
import DropdownMenu from './components/dropdown-menu';
import { useNav } from './hooks';

const Nav: React.FC<ComponentDefault> = () => {
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
