import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .title': {
            ...theme.mixins.headerGlow,
            marginBottom: theme.spacing(2),
            [theme.breakpoints.up('lg')]: {
              marginBottom: theme.spacing(7),
            },
          },
        },
      });
    },
  )();

  return styles;
};
