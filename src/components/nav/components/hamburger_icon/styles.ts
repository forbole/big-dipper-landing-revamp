import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
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
            border: '2px solid #FFFFFF',
            margin: '4px 0',
            transition: '0.4s',
          },
          '& .burger-menu.open, .bar1': {
          // -webkitTransform: 'rotate(-45deg) translate(-4px, 4px)',
            transform: 'rotate(-45deg) translate(-4px, 4px)',
          },
          // '& .burger-menu.open, .bar2': {
          //   opacity: '0',
          // },
          // '& .burger-menu.open, .bar3': {
          // // -webkit-transform: rotate(45deg) translate(-6px, -6px);
          //   transform: 'rotate(45deg) translate(-6px, -6px)',
          // },
        },
      });
    },
  )();

  return styles;
};
