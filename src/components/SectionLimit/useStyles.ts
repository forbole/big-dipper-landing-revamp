import { css } from '@mui/material';
import { LIMIT } from '~src/styles/theme';

const useStyles = () => {
  return {
    root: css({
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: LIMIT,
    }),
  };
};

export default useStyles;
