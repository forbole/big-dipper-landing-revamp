import { alpha, css, useTheme } from '@mui/material';
import basePath from '~src/utils/basePath';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      minWidth: '320px',
      backgroundColor: theme.palette.common.black,
      backgroundImage: `url(${basePath('/images/background/back2.webp')})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 0%',
      backgroundSize: '1920px auto',
      backgroundBlendMode: 'screen',
      '&.layout__scrolled .nav__container': {
        /* Neutral Color/White Transparent 01 */
        backgroundColor: alpha(theme.palette.common.white, 0.1),
        /* Blur 4 */
        ...theme.mixins.blur04,
        [theme.breakpoints.up('sm')]: {
          /* Secondary Color/Royal Blue Transparent 02 */
          backgroundColor: alpha(theme.palette.primary.main, 0.4),
        },
      },
      '&.layout__scrolled .layout__scroll-fab': {
        display: 'block',
      },
      '&.layout__scrolled.layout__footerinview .layout__scroll-fab': {
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      '& .layout__wrapper-content': {
        flex: '1 0 100%',
        maxWidth: '100vw',
        minWidth: '320px',
        padding: theme.spacing(0, 3),
      },
      '& .layout__scroll-fab': {
        position: 'fixed',
        bottom: theme.spacing(2.75),
        right: theme.spacing(2.75),
        zIndex: 2,
        padding: 0,
        maxWidth: theme.spacing(6),
        maxHeight: theme.spacing(6),
        border: `1px solid ${theme.palette.text.primary}`,
        color: theme.palette.text.primary,
        /* Neutral Color/White Transparent 01 */
        backgroundColor: alpha(theme.palette.common.white, 0.1),
        boxShadow: theme.shadows[1],
        borderRadius: '50%',
        display: 'none',
        opacity: 0.8,
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
        },
        '& .MuiSvgIcon-root': {
          fontSize: theme.spacing(5),
        },
      },
    }),
  };
};

export default useStyles;
