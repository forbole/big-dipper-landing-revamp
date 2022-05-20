import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        },
        content: {
          ...theme.mixins.gradientBackground,
          flex: 1,
        },
      });
    },
  )();

  return styles;
};
