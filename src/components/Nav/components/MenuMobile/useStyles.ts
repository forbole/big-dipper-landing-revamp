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
      '& .menuitems__submenu-container': {
        /* Neutral Color/White Transparent 02 */
        backgroundColor: alpha(theme.palette.common.white, 0.2),
        '& .menuitems__list-item-btn': {
          gap: theme.spacing(1),
          '& > .MuiListItemText-root': {
            flex: '0 1 auto',
          },
          '& > .MuiSvgIcon-fontSizeMedium': {
            color: theme.palette.grey[500],
          },
        },
      },
      '& .menuitems__submenu-paper': {
        backgroundColor: 'transparent',
      },
      '& .menumobile__paper': {
        /* Secondary Color/Royal Blue Transparent 03 */
        backgroundColor: alpha(theme.palette.primary.main, 0.7),
        /* Blur 03 */
        ...theme.mixins.blur03,
        padding: theme.spacing(2, 0),
        borderRadius: theme.spacing(2),
        margin: theme.spacing(3),
      },
    }),
  };
};

export default useStyles;
