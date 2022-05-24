import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  Layout,
  SectionBox,
  SectionLimit,
} from '@components';
import {
  MenuDesktop,
  MenuMobile,
  Content,
} from './components';
import { useStyles } from './styles';

const FAQ = () => {
  const { t } = useTranslation('faq');
  const classes = useStyles();
  return (
    <Layout>
      <SectionBox main>
        <SectionLimit className={classes.root}>
          <div className="header__wrapper">
            <Typography className="title" variant="h2">{t('faq')}</Typography>
            <MenuMobile className={classes.menuMobile} />
          </div>
          <div className="content__wrapper">
            <MenuDesktop className={classes.menuDesktop} />
            <Content className={classes.content} />
          </div>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default FAQ;
