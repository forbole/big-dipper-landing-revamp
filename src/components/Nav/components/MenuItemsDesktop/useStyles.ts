import { alpha, css, keyframes, useTheme } from '@mui/material';

const hover = keyframes({
  '0%': { background: 'rgba(255, 255, 255, 0)0vw' },
  '100%': { backgroundPositionX: 'rgba(255, 255, 255, 0.5)' },
});

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      display: 'flex',
      gap: theme.spacing(1),
      '& > .MuiListItemButton-root': {
        borderRadius: theme.spacing(25),
      },
      '& > .MuiListItemButton-root:first-of-type': {
        display: 'none !important',
      },
      '& > .menuitemsdesktop__submenu-container': {
        display: 'inline-flex',
        position: 'relative',
      },
      '& > .MuiListItemButton-root, & > .menuitemsdesktop__submenu-container > .MuiListItemButton-root': {
        padding: theme.spacing(1, 3),
        borderRadius: theme.spacing(3),
      },
      '& .menuitemsdesktop__submenu-container': {
        backgroundColor: 'transparent',
      },
    }),
    listItemButton: css({
      borderRadius: theme.spacing(25),
      textAlign: 'left',
      ...theme.mixins.buttonSecondary,
      padding: '0.3rem 1rem',
      '&.MuiListItem-gutters': {
        padding: theme.spacing(2, 2.5),
      },
      '&.menuitemsdesktop__active': {
        ...theme.mixins.button,
        padding: '0.3rem 1rem',
        pointerEvents: 'none',
        '&.menuitemsdesktop__list-item-btn': {
          pointerEvents: 'auto'
        },
      },
      '& .MuiListItemText-root': {
        color: theme.palette.common.white,
        fontWeight: 900,
      },
      '&:hover': {
        animation: `${hover} 2s ease-out 1 forwards`,
        '&.menuitemsdesktop__active': {
          animation: 'none',
        },
      },
    }),
    popover: css({
      '& .menuitemsdesktop__submenu-paper': {
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
        [theme.breakpoints.down('md')]: {
          display: 'none',
        },
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
    }),
  };
};

export default useStyles;
