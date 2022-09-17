import { alpha, css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      /* Blur 02 */
      ...theme.mixins.blur02,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      '& .menumobile__paper': {
        /* Secondary Color/Royal Blue Transparent 03 */
        backgroundColor: alpha(theme.palette.primary.main, 0.7),
        /* Blur 03 */
        ...theme.mixins.blur03,
        padding: theme.spacing(2, 0),
        borderRadius: theme.spacing(2),
        margin: theme.spacing(0, 3),
      },
      '& .horizontalmenubar__container button': {
        backgroundColor: alpha(theme.palette.common.white, 0.3),
        borderRadius: '50%',
        minWidth: theme.spacing(5),
        minHeight: theme.spacing(5),
        width: theme.spacing(5),
        height: theme.spacing(5),
      },
    }),
    dbLogoSvg: css({
      '& img': {
        [theme.breakpoints.down('md')]: {
          width: `${theme.spacing(21.875)} !important`,
          height: 'auto !important',
        },
      }
    }),
  };
};

export default useStyles;
