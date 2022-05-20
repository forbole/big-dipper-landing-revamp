import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: theme.breakpoints.limit,
        },
      });
    },
  )();

  return styles;
};
