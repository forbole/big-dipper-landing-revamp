import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  Layout,
  SectionBox,
  SectionLimit,
  ContentBox,
} from '@components';
import { useStyles } from './styles';

const About = () => {
  const classes = useStyles();
  const { t } = useTranslation('about');
  return (
    <Layout>
      <SectionBox main>
        <SectionLimit className={classes.root}>
          <Typography className="title" variant="h2">{t('about')}</Typography>
          <ContentBox>
            <Typography>
              {t('description')}
            </Typography>
          </ContentBox>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default About;
