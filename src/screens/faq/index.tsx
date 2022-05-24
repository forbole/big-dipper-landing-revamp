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
import { useFAQ } from './hooks';
import { getMenuItems } from './utils';

const FAQ = () => {
  const { t } = useTranslation('faq');
  const classes = useStyles();
  const { state, handleSelected } = useFAQ();
  const menuItems = getMenuItems(t);

  return (
    <Layout>
      <SectionBox main>
        <SectionLimit className={classes.root}>
          <div className="header__wrapper">
            <Typography className="title" variant="h2">{t('faq')}</Typography>
            <MenuMobile
              className={classes.menuMobile}
              items={menuItems}
              selected={state.selected}
              handleChange={handleSelected}
            />
          </div>
          <div className="content__wrapper">
            <MenuDesktop
              className={classes.menuDesktop}
              items={menuItems}
              selected={state.selected}
              handleChange={handleSelected}
            />
            <Content className={classes.content} />
          </div>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default FAQ;
