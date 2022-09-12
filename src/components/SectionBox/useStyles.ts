import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      overflow: 'visible',
      padding: 0,
      justifyContent: 'center',
      minWidth: '296px',
      '&.sectionbox__main': {
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(8, 0),
        },
      },
    }),
  };
};

export default useStyles;