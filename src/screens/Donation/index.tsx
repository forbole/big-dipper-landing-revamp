import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';
import { FC, useCallback, useState } from 'react';
import CopySvg from '~src/assets/copy.svg';
import { SectionLimit } from '~src/components';
import ContentBox from '~src/components/ContentBox';
import Layout from '~src/components/Layout';
import SectionBox from '~src/components/SectionBox';
import { useDonation } from './hooks';
import useStyles from './useStyles';
import { addresses } from './utils';

const Content: FC<{ x: typeof addresses[number] }> = ({ x }) => {
  const { t } = useTranslation('donation');
  const { handleCopyToClipboard } = useDonation();
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    handleCopyToClipboard(x.address);
    setCopied(true);
  }, [handleCopyToClipboard, x.address])
  return (
    <ContentBox key={x.address}>
      {!!x.imgSrc && (
        <Image
          className="donation__address-logo"
          src={x.imgSrc}
          alt={x.key}
          width={60}
          height={60}
        />
      )}
      <Typography className="donation__address-key" variant="h4">
        {t(x.key)}
      </Typography>
      <Typography className="donation__address-address">{x.address}</Typography>
      <Button
        variant="contained"
        className="donation__address-button"
        onClick={handleCopy}
      >
        <CopySvg className="donation__address-button-copy" />
        {copied ? t('copied') : t('copy')}
      </Button>
    </ContentBox>
  );
};

/* A React component that renders the Donation page. */
const Donation = () => {
  const { t } = useTranslation('donation');
  const styles = useStyles();

  return (
    <Layout>
      <Head>
        <title>{t('donation')}</title>
      </Head>
      <SectionBox main css={styles.root}>
        <SectionLimit>
          <Typography className="donation__title" variant="h2">
            {t('donation')}
          </Typography>
          <Typography className="donation__description">
            {t('description1')}
          </Typography>
          <Typography className="donation__description">
            {t('description2')}
          </Typography>
          <div className="donation__address-container">
            {addresses.map((x) => (
              <Content x={x} key={x.address} />
            ))}
          </div>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default Donation;
