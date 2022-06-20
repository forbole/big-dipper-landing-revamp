import React from 'react';
import { useStyles } from './styles';
import { HamburgerProps } from './types';

const HamburgerIcon = (props: HamburgerProps) => {
  const classes = useStyles();
  const {
    isIcon,
    toggleHamburgerMenu,
  } = props;

  return (
    <button
      className={classes.root}
      onClick={toggleHamburgerMenu}
      type="button"
    >
      <div className={isIcon ? 'hamburger' : 'hamburger-X'}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
      </div>
    </button>
  );
};

export default HamburgerIcon;
