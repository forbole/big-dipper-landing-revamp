import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .faq__wrapper:not(:last-child)': {
            marginBottom: theme.spacing(2),
          },
          '& .question': {
            color: theme.palette.secondary.main,
            marginBottom: theme.spacing(2),
          },
        },
      });
    },
  )();

  return styles;
};
