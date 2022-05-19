import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (_theme) => {
      return ({
        root: {
          background: 'pink',
          height: '30px',
        },
      });
    },
  )();

  return styles;
};
