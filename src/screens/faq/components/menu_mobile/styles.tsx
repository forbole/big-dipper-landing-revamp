import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return ({
      root: {
        '& .selected': {
          ...theme.mixins.button,
          padding: theme.spacing(1, 3),
        },
      },
      menu: {
        marginTop: theme.spacing(1),
        '& .MuiMenuItem-root': {
          padding: theme.spacing(2, 4),
          justifyContent: 'center',
          color: theme.palette.custom.fonts.five,
        },
        '& .MuiList-padding': {
          padding: 0,
        },
        '& .MuiMenu-paper': {
          background: 'rgba(91, 37, 37, 0.2)',
          backdropFilter: 'blur(24px)',
        },
      },
    });
  }, { index: 1 })();

  return styles;
};
