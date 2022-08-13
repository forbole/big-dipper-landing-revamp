import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@mui/material';
import { Layout, SectionBox, ContentBox } from '@components';
import { StyledSectionLimit } from './styles';

const About = () => {
  const { t } = useTranslation('about');
  return (
    <Layout>
      <SectionBox main>
        <StyledSectionLimit>
          <Typography className="title" variant="h2">
            {t('about')}
          </Typography>
          <ContentBox>
            <Typography>{t('description')}</Typography>
          </ContentBox>
        </StyledSectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default About;
