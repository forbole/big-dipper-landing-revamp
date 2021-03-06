import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .title': {
            marginBottom: theme.spacing(3),
            textAlign: 'center',
            [theme.breakpoints.up('lg')]: {
              marginBottom: theme.spacing(2),
              textAlign: 'left',
            },
          },
          '& .description': {
            marginBottom: theme.spacing(4),
          },
          '& .address__container': {
            display: 'grid',
            gridGap: theme.spacing(3),
            textAlign: 'center',
            [theme.breakpoints.up('lg')]: {
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridGap: theme.spacing(4),
            },
          },
          '& .address__logo': {
            marginBottom: theme.spacing(3),
          },
          '& .address__key': {
            marginBottom: theme.spacing(1),
          },
          '& .address__address': {
            wordBreak: 'break-all',
            marginBottom: theme.spacing(3),
          },
          '& .address__button--copy': {
            marginRight: theme.spacing(1),
          },
          '& .address__button': {
            ...theme.mixins.button,
            width: '100%',
          },
        },
      });
    },
  )();

  return styles;
};
