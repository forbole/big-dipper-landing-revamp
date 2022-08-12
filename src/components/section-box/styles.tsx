import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          overflow: 'auto',
          padding: theme.spacing(6, 3),
          [theme.breakpoints.up('lg')]: {
            '&.main': {
              padding: theme.spacing(8),
            },
          },
        },
      });
    },
  )();

  return styles;
};
