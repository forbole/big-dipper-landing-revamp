import React from 'react';
import classNames from 'classnames';
import { Typography, Divider } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import BDLogo from '@assets/big-dipper-red.svg';
import { useStyles } from './styles';
import {
  bdLinks, forboleLinks, socialLinks, termsLinks,
} from './utils';

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
                    className="link__item"
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
                    className="link__item"
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
        <div className="terms__wrapper">
          <div className="terms__links">
            {termsLinks.map((x) => {
              return (
                <React.Fragment key={x.key}>
                  <Link
                    href={x.url}
                    passHref
                  >
                    <Typography
                      variant="caption"
                      component="a"
                      className="link__item link__item--caption"
                      target={x.external ? '_blank' : '_self'}
                    >
                      {t(x.key)}
                    </Typography>
                  </Link>
                  <Typography variant="caption" className="terms--dash">
                    {' '}
                    |
                    {' '}
                  </Typography>
                </React.Fragment>
              );
            })}
          </div>
          <Typography variant="caption">{t('copyright', { year })}</Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
