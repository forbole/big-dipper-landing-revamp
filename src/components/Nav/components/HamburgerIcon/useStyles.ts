import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      background: 'unset',
      border: 'unset',
      height: '60px',
      width: '60px',
      position: 'absolute',
      right: theme.spacing(2),
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      '& .hambergericon__bar1, .hambergericon__bar2, .hambergericon__bar3': {
        width: '24px',
        border: '1px solid #FFFFFF',
        margin: '6px 0',
        transition: '0.4s',
        borderRadius: '25px',
      },
      '& .hambergericon__x': {
        '& .hambergericon__bar2': {
          opacity: '0',
        },
        '& .hambergericon__bar1': {
          transform: 'rotate(-45deg) translate(-4.5px, 4.5px)',
        },
        '& .hambergericon__bar3': {
          transform: 'rotate(45deg) translate(-6.5px, -6.5px)',
        },
      },
    }),
  };
};

export default useStyles;
