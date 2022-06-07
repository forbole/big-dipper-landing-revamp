import React from 'react';
import { useStyles } from './styles';

const HamburgerIcon = (props) => {
  const classes = useStyles();
  return (
  // <div className={classes.root}>
    <div className={!props ? 'burger-menu open' : 'burger-menu'}>
      <div className="bar1" key="b1" />
      <div className="bar2" key="b2" />
      <div className="bar3" key="b3" />
    </div>
  // </div>
  );
};

export default HamburgerIcon;
