import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(2, 1),
          height: '480px',
          width: '272px',
          background: 'rgba(62, 35, 79, 0.7)',
          borderRadius: '12px',
          backdropFilter: 'blur(24px)',
          [theme.breakpoints.up('md')]: {
            width: '216px',
          },
        },
      });
    },
  )();

  return styles;
};
