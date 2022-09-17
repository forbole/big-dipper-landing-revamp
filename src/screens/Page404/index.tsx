/* eslint-disable jsx-a11y/anchor-is-valid */
import UniconrSvg from '@/src/assets/unicorn404.svg';
import { Layout } from '@/src/components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';
import useStyles from './useStyles';

const Page404 = () => {
  const { t } = useTranslation('common');
  const styles = useStyles();

  return (
    <Layout>
      <Head>
        <title>{t('404')}</title>
      </Head>
      <Box className="container" css={styles.root}>
        <div className="image">
          <Image src={UniconrSvg} alt="404" />
        </div>
        <Typography variant="h3">{t('404')}</Typography>
        <p> </p>
        <Typography variant="h4">{t('404Description')}</Typography>
      </Box>
    </Layout>
  );
};

export default Page404;
