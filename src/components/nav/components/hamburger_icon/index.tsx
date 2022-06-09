import React from 'react';
import { useStyles } from './styles';

const HamburgerIcon = (props: any) => {
  const classes = useStyles();
  const {
    isIcon,
    toggleHamburgerMenu,
  } = props;

  return (
    <div
      className={classes.root}
      role="button"
      onClick={toggleHamburgerMenu}
    >
      <div className={isIcon ? 'hamburger' : 'hamburger-change'}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
      </div>
    </div>
  );
};

export default HamburgerIcon;
