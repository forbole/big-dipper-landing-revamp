import React from 'react';
import classNames from 'classnames';
import BDLogo from '@assets/big-dipper-red.svg';
import { Divider } from '@material-ui/core';
import { useStyles } from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div>
        <div className="top-left__wrapper">
          <BDLogo className="logo" />
          <div>links</div>
          <Divider className={classNames('divider')} />
        </div>
        <div>
          <div>forbole</div>
          <div>links</div>
        </div>
      </div>
      <hr />
      <div>
        <div>left bottom</div>
        <div>right bottom</div>
      </div>
    </footer>
  );
};

export default Footer;
