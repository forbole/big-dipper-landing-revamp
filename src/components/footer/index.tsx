import React from 'react';
import classNames from 'classnames';
import { Typography, Divider } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import BDLogo from '@assets/big-dipper-red.svg';
import { useStyles } from './styles';
import { bdLinks, forboleLinks, socialLinks } from './utils';

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();
  return (
    <footer className={classes.root}>
      <div className="top">
        <div className="internal__wrapper">
          <BDLogo className="logo" />
          <div>
            {bdLinks.map((x) => {
              return (
                <Link
                  key={x.key}
                  href={x.url}
                  passHref
                >
                  <Typography
                    variant="body2"
                    component="a"
                    className="bdlink__item"
                    target={x.external ? '_blank' : '_self'}
                  >
                    {t(x.key)}
                  </Typography>
                </Link>
              );
            })}
          </div>
          <Divider className={classNames('divider', 'mobile')} />
        </div>
        <div className="forbole__wrapper">
          <Typography variant="subtitle2" className="forbole__title">forbole</Typography>
          <div>
            {forboleLinks.map((x) => {
              return (
                <Link
                  key={x.key}
                  href={x.url}
                  passHref
                >
                  <Typography
                    variant="body2"
                    component="a"
                    className="bdlink__item"
                    target={x.external ? '_blank' : '_self'}
                  >
                    {t(x.key)}
                  </Typography>
                </Link>
              );
            })}
          </div>
          <Divider className={classNames('divider', 'mobile')} />
        </div>
      </div>
      <div className="bottom">
        <div className="icons__wrapper">
          {socialLinks.map((x) => {
            return (
              <a
                key={x.className}
                href={x.url}
                target="_blank"
                rel="noreferrer"
                className={`social ${x.className}`}
              >
                {x.component}
              </a>
            );
          })}
        </div>
        <div>
          <div>t n c</div>
          <Typography variant="caption">{t('copyright', { year })}</Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
