import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(2, 1),
          '& .wrapper': {
            margin: 'auto',
            maxWidth: '1024px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          '& .logo': {
            height: '36px',
          },
          '& .hamburgerMenu': {
            height: '60px',
          },
        },
      });
    },
  )();

  return styles;
};
