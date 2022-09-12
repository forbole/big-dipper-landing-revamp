import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import slider3Webp from '~src/assets/slides/slide3.webp';
import useStyles from './useStyles';

/* A functional component that is using the `useTranslation` hook to get the translation for the
`slider1Header` and `slider1Description` keys. */
const Slide1 = () => {
  const { t } = useTranslation('common');
  const styles = useStyles();
  return (
    <Box css={styles.root}>
      <Box className="image">
        {!!slider3Webp && (
          <Image src={slider3Webp} width="530" height="300" alt="User First" />
        )}
      </Box>
      <Box className="caption">
        <Typography variant="h1">{t('slider3Header')}</Typography>
        <Typography variant="h3">{t('slider3Description')}</Typography>
      </Box>
    </Box>
  );
};

export default Slide1;
