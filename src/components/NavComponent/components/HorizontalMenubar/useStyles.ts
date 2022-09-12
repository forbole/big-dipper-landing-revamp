import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '79px',
      padding: theme.spacing(2, 0),
      [theme.breakpoints.up('md')]: {
        justifyContent: 'space-between',
      },
    }),
  };
};

export default useStyles;
