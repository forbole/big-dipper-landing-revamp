import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: theme.spacing(2, 0),
          '& .button': {
            ...theme.mixins.buttonSecondary,
            margin: theme.spacing(1, 0),
          },
          '& .button--active': {
            ...theme.mixins.button,
          },
        },
      });
    },
  )();

  return styles;
};
