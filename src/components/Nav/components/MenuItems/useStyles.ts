import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      '& .menuitems__submenu-container': {
        backgroundColor: 'transparent',
      },
      '& .menuitems__list-item-btn': {
        textAlign: 'left',
        padding: theme.spacing(1, 4),
        '&.MuiListItem-gutters': {
          padding: theme.spacing(2, 2.5),
        },
        ...theme.mixins.buttonSecondary,
        borderRadius: 0,
        '&.menuitems__active': {
          ...theme.mixins.button,
          borderRadius: 0,
        },
        '& .MuiListItemText-root': {
          color: theme.palette.common.white,
          fontWeight: 900,
        },
      },
    }),
  };
};

export default useStyles;
