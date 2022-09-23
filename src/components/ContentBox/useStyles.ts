import { alpha, css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      border: `solid ${theme.palette.common.white} 2px`,
      overflow: 'auto',
      padding: theme.spacing(3),
      borderRadius: '0.75rem',
      backgroundColor: alpha(theme.palette.common.white, 0.5),
      color: theme.palette.common.black,
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4),
      },
    }),
  };
};

export default useStyles;
