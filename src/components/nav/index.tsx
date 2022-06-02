import React from 'react';
import classNames from 'classnames';
import { useStyles } from './styles';

const Nav: React.FC<ComponentDefault> = (props) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, props.className)}>
      Nav
    </div>
  );
};

export default Nav;
