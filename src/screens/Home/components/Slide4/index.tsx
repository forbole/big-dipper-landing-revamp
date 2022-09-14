import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import slide4Webp from '~src/assets/slides/slide4.webp';
import useStyles from './useStyles';

/* A functional component that is using the `useTranslation` hook to get the translation for the
`slider1Header` and `slider1Description` keys. */
const Slide1 = () => {
  const { t } = useTranslation('common');
  const styles = useStyles();
  return (
    <Box css={styles.root}>
      <Box className="image">
        {!!slide4Webp && (
          <Image objectFit="contain" src={slide4Webp} width="242" height="242" alt="Ease of Use" />
        )}
      </Box>
      <Box className="caption">
        <Typography variant="h1">{t('slider4Header')}</Typography>
        <Typography variant="h3">{t('slider4Description')}</Typography>
      </Box>
    </Box>
  );
};

export default Slide1;
