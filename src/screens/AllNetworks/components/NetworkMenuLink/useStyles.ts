import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      padding: `${theme.spacing(1)} !important`,
      '& .MuiListItemText-root': {
        padding: theme.spacing(0, 0, 0, 2),
      },
      '& .MuiListItemIcon-root': {
        padding: theme.spacing(0, 0, 0, 0),
        justifyContent: 'center',
      },
      '& .MuiTypography-h5': {
        /* Secondary Color/Royal Blue 01 */
        color: theme.palette.secondary.dark,
      },
      '& .MuiTypography-subtitle1': {
        /* Secondary Color/Royal Blue 01 */
        color: theme.palette.secondary.dark,
        fontWeight: '100',
      },
    }),
  };
};

export default useStyles;
