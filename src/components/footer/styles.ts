import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(4, 3),
          '& .logo': {
            width: '150px',
          },
          '& .top-left__wrapper': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          },
          '& .divider': {
            width: '100%',
          },
          [theme.breakpoints.up('lg')]: {
            '& .logo': {
              width: '230px',
            },
          },
        },
      });
    },
  )();

  return styles;
};
