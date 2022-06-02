import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          height: '30px',
          display: 'flex',
          '& .wrapper': {
            margin: 'auto',
            maxWidth: '1024px',
            display: 'flex',
            // flexBox: 'space-between',
            justifyContent: 'space-between',
          },
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
