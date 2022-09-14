import { css } from '@mui/material';

const useStyles = () => {
  return {
    root: css({
      position: 'sticky',
      top: 0,
      width: '100%',
      overflow: 'visible',
      zIndex: 4,
    }),
  };
};

export default useStyles;
