import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        // root: {
        // height: '60px',
        // position: 'absolute',
        // right: theme.spacing(0),
        // padding: theme.spacing(2, 1),
        // '& .wrapper': {
        //   margin: 'auto',
        //   maxWidth: '1024px',
        //   textAlign: 'center',
        //   height: '60px',
        //   alignItems: 'center',
        // },
        // '& .burger-menu': {
        //   height: '60px',
        //   width: '60px',
        //   float: 'right',
        // },
        '& .burger-menu, .burger-menu.open': {
          height: '60px',
          width: '60px',
          position: 'absolute',
          right: theme.spacing(0),
          display: 'inline-block',
          cursor: 'pointer',
          // position: 'fixed',
          // right: '20px',
          // bottom: '40px',
          zIndex: '9999',
          background: '#fff',
          padding: '10px',
          // borderRadius: '25px',
          // boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
        },
        '& .bar1, .bar2, .bar3': {
          width: '25px',
          height: '3px',
          backgroundColor: '#333',
          margin: '4px 0',
          transition: '0.4s',
        },
        // '& .burger-menu.open, .bar1': {
        //   // -webkitTransform: 'rotate(-45deg) translate(-4px, 4px)',
        //   transform: 'rotate(-45deg) translate(-4px, 4px)',
        // },
        // '& .burger-menu.open, .bar2': {
        //   opacity: '0',
        // },
        // '& .burger-menu.open, .bar3': {
        //   // -webkit-transform: rotate(45deg) translate(-6px, -6px);
        //   transform: 'rotate(45deg) translate(-6px, -6px)',
        // },
        // },
      });
    },
  )();

  return styles;
};
