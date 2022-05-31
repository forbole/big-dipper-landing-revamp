import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .title': {
            marginBottom: theme.spacing(2),
            textAlign: 'center',
            [theme.breakpoints.up('lg')]: {
              textAlign: 'left',
              marginBottom: theme.spacing(2),
            },
          },

          '& .intro': {
            marginBottom: theme.spacing(2),
          },
        },
      });
    },
  )();

  return styles;
};
