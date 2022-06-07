import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: theme.breakpoints.limit,
          padding: theme.spacing(2, 1),
          '& .wrapper': {
            margin: 'auto',
            maxWidth: '1024px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          },
          '& .logo': {
            height: '36px',
            margin: '0 auto',
            display: 'inline-block',
          },
          '& .hamburgerMenu': {
            height: '60px',
            position: 'absolute',
            right: theme.spacing(0),
          },
          [theme.breakpoints.up('md')]: {
            '& .wrapper': {
              margin: 'auto',
              maxWidth: '1024px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
            '& .logo': {
              height: '36px',
              marginLeft: theme.spacing(0),
            },
          },
        },
      });
    },
  )();

  return styles;
};
