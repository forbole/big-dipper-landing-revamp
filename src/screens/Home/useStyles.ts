/* eslint-disable max-len */
import { alpha, css, useTheme } from '@mui/material';
import basePath from '@/src/utils/basePath';

const useStyles = () => {
  const theme = useTheme();
  return {
    layout: css({
      backgroundImage: `linear-gradient(180.28deg, rgba(17, 34, 181, 1) -158.81%, rgba(17, 34, 181, 0) 99.76%), url(${basePath('/images/background/backHome.webp')})`,
      backgroundSize: '100% 195px, 1920px auto',
      backgroundPosition: `50% 0, 50% 0px`,
      backgroundRepeat: 'no-repeat, repeat',
      [theme.breakpoints.down('md')]: {
        backgroundImage: `linear-gradient(179.23deg, rgba(17, 34, 181, 1) -40.29%, rgba(23, 22, 22, 0) 74.03%), url(${basePath('/images/background/mobileHomeTop.webp')}), url(${basePath('/images/background/mobileHome.webp')})`,
        backgroundSize: '100% 260px, 100% auto, 768px 5568px',
        backgroundPosition: `50% 0, 50% -10vh, 50% 0`,
        backgroundRepeat: 'no-repeat, no-repeat, repeat',
      },
    }),
    slider: css({
      width: '100%',
      textAlign: 'center',
      position: 'relative',
      backgroundImage: `url(${basePath('/images/background/stars.webp')})`,
      backgroundRepeat: 'no-repeat',
      margin: 0,
      backgroundPosition: '50% 0',
      backgroundSize: `cover`,
      height: theme.spacing(59.5),  
      [theme.breakpoints.down('md')]: {
        height: '68vh',
        maxHeight: theme.spacing(80),
      },
      '& .slick-slide': {
        height: theme.spacing(59.5),
        [theme.breakpoints.down('md')]: {
          height: '68vh',
          maxHeight: theme.spacing(80),
        },
      },
      '& .slick-slide > div': {
        height: '100%',
        padding: theme.spacing(0, 0, 10, 0),
      },
      '& .slick-slider': {
        height: '100%'
      },
      '& .slick-slider .slick-list': {
        transform: 'none !important',
        height: '100%',
      },
      '& .slick-dots': {
        lineHeight: theme.spacing(8.5),
        bottom: 0,
      },
      '& .home__slider': {
        position: 'relative',
        margin: 0,
        width: '100%',
        height: '100%',
      },
      '& .home__slider-left': {
        position: 'absolute',
        top: theme.spacing(21.5),
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
        [theme.breakpoints.down('md')]: {
          top: '40%',
          left: 0,
        },
      },
      '& .home__slider-right': {
        position: 'absolute',
        top: theme.spacing(21.5),
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
        [theme.breakpoints.down('md')]: {
          top: '40%',
          right: 0,
        },
      },
      '& .slick-dots li button:before': {
        background: theme.palette.common.white,
        color: theme.palette.common.white,
        width: theme.spacing(1.125),
        height: theme.spacing(1.125),
        borderRadius: theme.spacing(0.5625),
        fontSize: theme.spacing(0),
        opacity: 0.8,
      },
      '& .slick-dots li.slick-active button:before': {
        background: theme.palette.secondary.main,
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
