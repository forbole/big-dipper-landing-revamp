import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import {
  Layout,
  SectionBox,
  SectionLimit,
  ContentBox,
} from '@components';
import { useStyles } from './styles';
import { definitions } from './utils';

const TermsAndConditions = () => {
  const classes = useStyles();
  const { t } = useTranslation('terms');
  return (
    <Layout>
      <SectionBox main>
        <SectionLimit className={classes.root}>
          <Typography className="title" variant="h2">
            {t('termsAndConditions')}
          </Typography>
          <Typography className="intro">{t('intro')}</Typography>
          <ContentBox>
            <Typography variant="h3">
              Interpretation and Definitions
            </Typography>
            <Typography variant="h4">
              Interpretation
            </Typography>
            <Typography className="description">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </Typography>
            <Typography variant="h4">
              Definitions
            </Typography>
            <Typography className="description">
              For the purposes of these Terms and Conditions:
            </Typography>
            <ul>
              {definitions.map((x) => {
                return (
                  <Typography component="li" key={x.key}>
                    <span className="key">{x.key}</span>
                    {' '}
                    {x.details}
                  </Typography>
                );
              })}
            </ul>
          </ContentBox>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default TermsAndConditions;
