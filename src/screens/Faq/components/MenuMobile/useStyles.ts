import { alpha, css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      position: 'relative',
      '& .menumobile__selected': {
        ...theme.mixins.button,
        padding: theme.spacing(1, 3),
      },
    }),
    menu: css({
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },

      '& .MuiList-padding': {
        padding: 0,
      },
      '& .MuiMenu-paper': {
        /* Secondary Color/Royal Blue Transparent 03 */
        backgroundColor: alpha(theme.palette.primary.main, 0.7),
        /* Blur 03 */
        ...theme.mixins.blur03,
        margin: theme.spacing(2, 0),
        borderRadius: theme.spacing(1.5),
        padding: theme.spacing(3, 0),
        left: `${theme.spacing(3)} !important`,
        right: `${theme.spacing(3)} !important`,
      },
      '& .MuiList-root': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 0,
        gap: theme.spacing(2),
      },
      '& .MuiMenuItem-root': {
        padding: theme.spacing(2),
        justifyContent: 'center',
        color: theme.palette.common.white,
        '&.menumobile__active': {
          ...theme.mixins.button,
          borderRadius: 0,
        },
      },
    }),
  };
};

export default useStyles;
