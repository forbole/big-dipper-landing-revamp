import { alpha, css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      border: `solid ${alpha(theme.palette.common.white, 0.1)} 2px`,
      overflow: 'auto',
      padding: theme.spacing(3),
      borderRadius: '0.75rem',
      backgroundColor: alpha(theme.palette.common.white, 0.1),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4),
      },
    }),
  };
};

export default useStyles;
