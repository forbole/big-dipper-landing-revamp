import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return ({
      root: {
        textAlign: 'center',
        '&.MuiListItem-gutters': {
          padding: theme.spacing(2, 2.5),
        },
        '& .MuiListItemText-root': {
          color: theme.palette.common.white,
        },
        '&.active': {
          background: 'linear-gradient(103.18deg, #F6504B 20.77%, #DC001A 118.69%)',
        },
      },
    });
  }, { index: 1 })();

  return styles;
};
