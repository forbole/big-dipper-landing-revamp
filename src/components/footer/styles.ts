import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (_theme) => {
      return ({
        root: {
          background: 'violet',
          height: '100px',
        },
      });
    },
  )();

  return styles;
};
