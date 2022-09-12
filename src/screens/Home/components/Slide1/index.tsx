import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import bigDipperWebp from '~src/assets/bigDipperTransparent.webp';
import useStyles from './useStyles';

/* A functional component that is using the `useTranslation` hook to get the translation for the
`slider1Header` and `slider1Description` keys. */
const Slide1 = () => {
  const { t } = useTranslation('common');
  const styles = useStyles();
  return (
    <Box css={styles.root}>
      <Box className="image">
        {!!bigDipperWebp && (
          <Image
            src={bigDipperWebp}
            alt="Big Dipper"
            width="482"
            height="452"
          />
        )}
      </Box>
      <Typography variant="h1">{t('slider1Header')}</Typography>
    </Box>
  );
};

export default Slide1;