import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return ({
      root: {
        '&.MuiListItem-gutters': {
          padding: theme.spacing(2, 2.5),
        },
        '& .MuiListItemText-root': {
          color: theme.palette.custom.general.icon,
        },
        '&.active': {
          background: 'linear-gradient(103.18deg, #F6504B 20.77%, #DC001A 118.69%)',
        },
      },
    });
  }, { index: 1 })();

  return styles;
};
