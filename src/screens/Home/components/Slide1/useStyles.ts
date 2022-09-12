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
      justifyContent: 'center',
      flexFlow: 'row wrap',
      position: 'relative',
      /* Creating a Typography component with the styles applied. */
      '& .MuiTypography-h1': {
        margin: theme.spacing(8, 0, 0, 0),
        [theme.breakpoints.down('md')]: {
          fontSize: theme.typography.h2.fontSize,
        },
        [theme.breakpoints.up('md')]: {
          margin: 0,
          position: 'absolute',
          textAlign: 'center',
          textShadow: theme.shadows[24],
          zIndex: 1,
          bottom: theme.spacing(12),
        },
      },
      '& .image': {
        mixBlendMode: 'screen',
        display: 'flex',
        justifyContent: 'center',
        transform: 'scale(1)',
        animation: `${breathing} 3s infinite ease`,
        minHeight: theme.spacing(20),
        maxWidth: '90%',
        height: 'auto',
      },
    }),
  };
};

export default useStyles;
