import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          ...theme.mixins.gradientBackground,
        },
        content: {
          flex: 1,
        },
        footer: {
          zIndex: 1,
        },
        nav: {
          zIndex: 1,
        },
      });
    },
  )();

  return styles;
};
