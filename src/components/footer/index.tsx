import React from 'react';
import classNames from 'classnames';
import { Typography, Divider } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import BDLogo from '@assets/big-dipper-red.svg';
import { useStyles } from './styles';
import { bdLinks } from './utils';

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation('common');
  return (
    <footer className={classes.root}>
      <div>
        <div className="top-left__wrapper">
          <BDLogo className="logo" />
          <div>
            {bdLinks.map((x) => {
              return (
                <Link key={x.key} href={x.url} passHref>
                  <Typography component="a">
                    {t(x.key)}
                  </Typography>
                </Link>
              );
            })}
          </div>
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
