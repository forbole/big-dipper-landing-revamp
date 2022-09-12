import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { SectionLimit } from '~src/components';
import ContentBox from '~src/components/ContentBox';
import Layout from '~src/components/Layout';
import SectionBox from '~src/components/SectionBox';
import useStyles from './useStyles';

/* A React component that renders the About page. */
const About = () => {
  const { t } = useTranslation('about');
  const styles = useStyles();
  return (
    <Layout>
      <Head>
        <title>{t('about')}</title>
      </Head>
      <SectionBox main css={styles.root}>
        <SectionLimit>
          <Typography className="about__title" variant="h2">
            {t('about')}
          </Typography>
          <ContentBox className="about__content">
            <Typography>{t('description')}</Typography>
          </ContentBox>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default About;
