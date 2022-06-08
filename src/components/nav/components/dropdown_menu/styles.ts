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
          position: 'absolute',
          zIndex: '999',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: '0',
          right: '0',
          textAlign: 'center',
          [theme.breakpoints.up('md')]: {
            width: '216px',
            top: '88px',
            // left: '935px',
            right: 'calc(calc(100vw - 1024px) / 2)',
          },
        },
      });
    },
  )();

  return styles;
};
