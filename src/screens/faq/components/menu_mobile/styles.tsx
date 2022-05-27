import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

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
          color: theme.palette.custom.general.white,
        },
        '& .MuiMenuItem-root.active': {
          ...theme.mixins.button,
          borderRadius: 0,
        },
        '& .MuiList-padding': {
          padding: 0,
        },
        '& .MuiMenu-paper': {
          background: Color(theme.palette.custom.general.dropBackground).alpha(0.7).string(),
          backdropFilter: 'blur(24px)',
        },
      },
    });
  }, { index: 1 })();

  return styles;
};
