import React from 'react';
import Trans from 'next-translate/Trans';
import classNames from 'classnames';
import { Typography, Divider } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useStyles } from './styles';
import { socialLinks, termsLinks } from './utils';

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();
  return (
    <footer className={classes.root}>
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
        <Typography variant="caption">{t('copyright', { year })}</Typography>
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
                  |
                </Typography>
              </React.Fragment>
            );
          })}
        </div>
        <Typography variant="caption">
          <Trans
            i18nKey="common:productOf"
            components={[
              <a
                href="https://www.forbole.com"
                target="_blank"
                rel="noreferrer"
              />,
            ]}
          />
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
