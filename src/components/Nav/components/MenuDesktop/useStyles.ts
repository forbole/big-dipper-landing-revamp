import { alpha, css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      '& .menuitems__submenu-paper': {
        position: 'absolute',
        top: '100%',
        width: '100%',
        marginTop: theme.spacing(2),
        /* Secondary Color/Royal Blue Transparent 04 */
        backgroundColor: alpha(theme.palette.primary.main, 0.9),
        /* Blur 02 */
        ...theme.mixins.blur02,
        borderRadius: theme.spacing(1.5),
        zIndex: 10,
        '& > .MuiListItemButton-root': {
          borderRadius: 0,
          padding: theme.spacing(2, 3),
        },
        '& > .MuiListItemButton-root:first-of-type': {
          borderTopLeftRadius: theme.spacing(1.5),
          borderTopRightRadius: theme.spacing(1.5),
        },
        '& > .MuiListItemButton-root:last-of-type': {
          borderBottomLeftRadius: theme.spacing(1.5),
          borderBottomRightRadius: theme.spacing(1.5),
        },
      },
      '& .menudesktop__menu-container': {
        display: 'none',
        width: 'auto',
        justifyContent: 'right',
        [theme.breakpoints.up('md')]: {
          display: 'inline-flex',
        },
        '& > .menuitems__container': {
          display: 'flex',
          gap: theme.spacing(1),
          '& > .MuiListItemButton-root': {
            borderRadius: theme.spacing(25),
          },
          '& > .MuiListItemButton-root:first-of-type': {
            display: 'none !important',
          },
          '& > .menuitems__submenu-container': {
            display: 'inline-flex',
            position: 'relative',
          },
          '& > .MuiListItemButton-root, & > .menuitems__submenu-container > .MuiListItemButton-root':
            {
              padding: theme.spacing(1, 3),
              borderRadius: theme.spacing(3),
            },
          '& > .MuiBox-root > .menuitems__submenu-container .menuitems__list-item-btn-btn':
            {
              borderRadius: theme.spacing(25),
            },
        },
      },
    }),
    dbLogoSvg: css({
      height: '28px',
      display: 'block',
      [theme.breakpoints.up('md')]: {
        height: '36px',
        margin: theme.spacing(1),
      },
    }),
  };
};

export default useStyles;
