import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import HeroSvg from './hero';
import useStyles from './useStyles';

/* A functional component that is using the `useTranslation` hook to get the translation for the
`slider1Header` and `slider1Description` keys. */
const Slide1 = () => {
  const { t } = useTranslation('common');
  const styles = useStyles();
  return (
    <Box css={styles.root}>
      <Box className="image">
        <HeroSvg width="415" height="291" />
      </Box>
      <Box className="caption">
        <Typography variant="h1">{t('slider2Header')}</Typography>
        <Typography variant="h3">{t('slider2Description')}</Typography>
      </Box>
    </Box>
  );
};

export default Slide1;
