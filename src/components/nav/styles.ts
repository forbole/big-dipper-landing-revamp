import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          height: '30px',
          '& .logo': {
            width: '150px',
            marginBottom: theme.spacing(5),
          },
        },
      });
    },
  )();

  return styles;
};
