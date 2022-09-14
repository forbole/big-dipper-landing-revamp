import { alpha, css, keyframes, useTheme } from '@mui/material';

const hover = keyframes({
  '0%': { background: 'rgba(255, 255, 255, 0)0vw' },
  '100%': { backgroundPositionX: 'rgba(255, 255, 255, 0.5)' },
});

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      gap: theme.spacing(2),
      display: 'flex',
      flexFlow: 'column wrap',
      '& .menuitemsmobile__submenu-container': {
        /* Neutral Color/White Transparent 02 */
        backgroundColor: alpha(theme.palette.common.white, 0.2),
      },
      '& .menuitemsmobile__list-item-btn': {
        textAlign: 'left',
        padding: theme.spacing(1, 4),
        gap: theme.spacing(1),
        '& > .MuiListItemText-root': {
          flex: '0 1 auto',
        },
        '& > .MuiSvgIcon-fontSizeMedium': {
          color: theme.palette.grey[500],
        },
        '&.MuiListItem-gutters': {
          padding: theme.spacing(2, 2.5),
        },
        ...theme.mixins.buttonSecondary,
        borderRadius: 0,
        '&.menuitemsmobile__active': {
          ...theme.mixins.button,
          borderRadius: 0,
          pointerEvents: 'none',
          '&.menuitemsmobile__list-item-btn': {
            pointerEvents: 'auto'
          },
        },
        '& .MuiListItemText-root': {
          color: theme.palette.common.white,
          fontWeight: 900,
        },
      },
    }),
    listItemButton: css({
      '&:hover': {
        animation: `${hover} 2s ease-out 1 forwards`,
      },
    }),
    paper: css({
      backgroundColor: 'transparent',
    }),
  };
};

export default useStyles;
