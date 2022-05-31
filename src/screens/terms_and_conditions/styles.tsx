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

          '& .MuiTypography-h3': {
            marginBottom: theme.spacing(2),
          },

          '& .MuiTypography-h4': {
            marginBottom: theme.spacing(1),
          },
          '& .key': {
            fontWeight: 500,
          },
          '& ul': {
            marginLeft: theme.spacing(2),
          },
          '& li': {
            marginBottom: theme.spacing(2),
          },
          '& .description': {
            marginBottom: theme.spacing(2),
          },
        },
      });
    },
  )();

  return styles;
};
