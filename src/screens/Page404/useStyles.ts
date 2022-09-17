import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      '& svg': {
        transform: 'scale(0.7)',
      },
      '& h3': {
        fontSize: '1.2rem',
      },
      '& h4': {
        fontSize: '0.95rem',
      },
      [theme.breakpoints.up('md')]: {
        '& h3': {
          fontSize: '2rem',
        },
        '& h4': {
          fontSize: '1.4rem',
        },
      },
    }),
  };
};

export default useStyles;
