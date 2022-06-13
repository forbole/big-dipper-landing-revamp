import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          background: 'unset',
          border: 'unset',
          height: '60px',
          width: '60px',
          position: 'absolute',
          right: theme.spacing(0),
          cursor: 'pointer',
          zIndex: '9999',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& .bar1, .bar2, .bar3': {
            width: '24px',
            border: '1px solid #FFFFFF',
            margin: '6px 0',
            transition: '0.4s',
            borderRadius: '25px',
          },
          '& .hamburger-X': {
            '& .bar2': {
              opacity: '0',
            },
            '& .bar1': {
              transform: 'rotate(-45deg) translate(-4.5px, 4.5px)',
            },
            '& .bar3': {
              transform: 'rotate(45deg) translate(-6.5px, -6.5px)',
            },
          },
        },
      });
    },
  )();

  return styles;
};
