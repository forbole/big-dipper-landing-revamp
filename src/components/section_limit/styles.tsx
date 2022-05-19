import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          maginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: theme.breakpoints.values.lg,
        },
      });
    },
  )();

  return styles;
};
