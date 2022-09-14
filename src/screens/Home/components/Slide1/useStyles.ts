import { css, keyframes, useTheme } from '@mui/material';

const breathing = keyframes`
50% {
  transform: scale(0.95);
}
`;

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexFlow: 'column nowrap',
      height: '100%',
      position: 'relative',
      /* Creating a Typography component with the styles applied. */
      '& .caption': {
        width: '100%',
        [theme.breakpoints.down('md')]: {
          display: 'flex',
          flexFlow: 'column nowrap',
          height: '39%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '1rem',
        },
      },
      '& .MuiTypography-h1': {
        width: '100%',
        lineHeight: 1.5,
        textShadow: theme.shadows[24],
        [theme.breakpoints.down('md')]: {
          fontSize: theme.typography.h2.fontSize,
        },
      },
      '& .image': {
        mixBlendMode: 'screen',
        animation: `${breathing} 3s infinite ease`,
        position: 'absolute',
        top: 0,
        bottom: `-${theme.spacing(14)}`,
        width: '100%',
        [theme.breakpoints.down('md')]: {
          position: 'static',
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    }),
  };
};

export default useStyles;
