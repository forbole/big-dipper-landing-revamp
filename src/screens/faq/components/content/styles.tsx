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
          '& .list': {
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(2),
          },
          '& .list__title': {
            marginBottom: theme.spacing(1),
            color: theme.palette.custom.fonts.five,
          },
          '& .list__title--bullet': {
            color: theme.palette.custom.fonts.one,
          },
          '& .list__item:not(:last-child)': {
            marginBottom: theme.spacing(3),
          },
        },
      });
    },
  )();

  return styles;
};
