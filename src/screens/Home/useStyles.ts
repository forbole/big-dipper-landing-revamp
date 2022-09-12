/* eslint-disable max-len */
import { alpha, css, useTheme } from '@mui/material';
import basePath from '~src/utils/basePath';

const useStyles = () => {
  const theme = useTheme();
  return {
    layout: css({
      backgroundImage: `url(${basePath(
        '/images/background/back.webp'
      )}) !important`,
    }),
    slider: css({
      width: '100vw',
      textAlign: 'center',
      position: 'relative',
      backgroundImage: `url(${basePath('/images/background/stars.webp')})`,
      backgroundRepeat: 'repeat-x',
      backgroundPosition: '0vw 0',
      margin: theme.spacing(0, -3),
      marginBottom: theme.spacing(8),
      backgroundSize: `auto 100%`,
      '& .slick-slider .slick-track, & .slick-slider .slick-list': {
        transform: 'none !important',
      },
      '& .home__slider-left': {
        position: 'absolute',
        bottom: '45%',
        left: theme.spacing(3),
        zIndex: 1,
        padding: 0,
        maxWidth: theme.spacing(4.5),
        maxHeight: theme.spacing(4.5),
        border: `1px solid ${theme.palette.text.primary}`,
        color: theme.palette.text.primary,
        /* Neutral Color/White Transparent 05 */
        backgroundColor: alpha(theme.palette.common.white, 0.6),
        boxShadow: theme.shadows[1],
        borderRadius: '50%',
        '& .MuiSvgIcon-root': {
          fontSize: theme.spacing(3.5),
        },
      },
      '& .home__slider-right': {
        position: 'absolute',
        bottom: '45%',
        right: theme.spacing(3),
        zIndex: 1,
        padding: 0,
        maxWidth: theme.spacing(4.5),
        maxHeight: theme.spacing(4.5),
        border: `1px solid ${theme.palette.text.primary}`,
        color: theme.palette.text.primary,
        /* Neutral Color/White Transparent 05 */
        backgroundColor: alpha(theme.palette.common.white, 0.6),
        boxShadow: theme.shadows[1],
        borderRadius: '50%',
        '& .MuiSvgIcon-root': {
          fontSize: theme.spacing(3.5),
        },
      },
      '& .home__slider': {
        position: 'relative',
        marginBottom: theme.spacing(8),
        [theme.breakpoints.up('md')]: {
          marginBottom: theme.spacing(1),
        },
      },
      '& .slick-dots li button:before': {
        color: theme.palette.grey[100],
        textShadow: theme.shadows[0],
        fontSize: theme.spacing(1.2),
      },
      '& .slick-dots li.slick-active button:before': {
        color: theme.palette.secondary.main,
      },
    }),
    root: css({
      '& .home__section-box': {
        padding: 0,
      },
    }),
  };
};

export default useStyles;
