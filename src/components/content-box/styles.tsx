import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          border: `solid ${Color(theme.palette.custom.general.white).alpha(0.1).string()} 2px`,
          overflow: 'auto',
          padding: theme.spacing(3),
          borderRadius: '0.75rem',
          background: Color(theme.palette.custom.general.white).alpha(0.1).string(),
          [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(4),
          },
        },
      });
    },
  )();

  return styles;
};
