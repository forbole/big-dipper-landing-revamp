import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@mui/material';
import { Layout, SectionBox } from '@components';
import {
  StyledContent, StyledMenuDesktop, StyledMenuMobile, StyledSectionLimit,
} from './styles';
import { useFAQ } from './hooks';
import { getMenuItems, getContent } from './utils';

const FAQ = () => {
  const { t } = useTranslation('faq');
  const { state, handleSelected } = useFAQ();
  const menuItems = getMenuItems(t);
  const content = getContent(state.selected, t);

  return (
    <Layout>
      <SectionBox main>
        <StyledSectionLimit>
          <div className="header__wrapper">
            <Typography className="title" variant="h2">
              {t('faq')}
            </Typography>
            <StyledMenuMobile
              items={menuItems}
              selected={state.selected}
              handleChange={handleSelected}
            />
          </div>
          <div className="content__wrapper">
            <StyledMenuDesktop
              items={menuItems}
              selected={state.selected}
              handleChange={handleSelected}
            />
            <StyledContent content={content} />
          </div>
        </StyledSectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default FAQ;
