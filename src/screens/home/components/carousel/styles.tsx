import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          height: '200px',
          '& .card-1': {
            // background: 'purple',
          },
        },
      });
    },
  )();

  return styles;
};
