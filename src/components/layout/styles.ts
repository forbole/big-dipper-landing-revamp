import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (_theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        },
        content: {
          flex: 1,
        },
      });
    },
  )();

  return styles;
};
