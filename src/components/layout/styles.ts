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
          position: 'relative',
          overflow: 'hidden',
          '& .back': {
            position: 'absolute',
            width: '100%',
            height: 'auto',
          },
          '& .back-1': {
            top: 0,
          },
          '& .back-2': {
            top: '800px',
          },
          '& .back-3': {
            bottom: 0,
          },
        },
        content: {
          flex: 1,
        },
      });
    },
  )();

  return styles;
};
