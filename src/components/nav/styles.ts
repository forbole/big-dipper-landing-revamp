import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(5, 4),
          display: 'flex',
          '& .wrapper': {
            margin: 'auto',
            maxWidth: '1024px',
            display: 'flex',
            alignItems: 'center',
            // flexBox: 'space-between',
            justifyContent: 'space-between',
            // justifyContent: 'center',
          },
          '& .logo': {
            height: '36px',
            marginBottom: theme.spacing(5),
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
