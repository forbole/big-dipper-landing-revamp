import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'row wrap',
      position: 'relative',
      '& .caption': {
        width: '100%',
      },
      '& .MuiTypography-h1': {
        width: '100%',
        textAlign: 'center',
        textShadow: theme.shadows[24],
        margin: theme.spacing(11, 0, 0, 0),
        fontSize: theme.typography.h2.fontSize,
        [theme.breakpoints.up('md')]: {
          margin: 0,
          textAlign: 'center',
          textShadow: theme.shadows[24],
          fontSize: theme.typography.h1.fontSize,
        },
      },
      '& .MuiTypography-h3': {
        fontWeight: 400,
        fontSize: theme.typography.h5.fontSize,
        [theme.breakpoints.up('md')]: {
          fontSize: theme.typography.h3.fontSize,
        },
      },
      '& .image': {
        display: 'flex',
        justifyContent: 'center',
        transform: 'scale(1)',
        minHeight: theme.spacing(20),
        maxWidth: '90%',
        height: 'auto',
      },
    }),
  };
};

export default useStyles;
