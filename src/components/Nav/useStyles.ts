import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      position: 'sticky',
      padding: theme.spacing(0, 1, 0, 3),
      top: 0,
      width: '100%',
      overflow: 'visible',
      zIndex: 4,
    }),
  };
};

export default useStyles;
