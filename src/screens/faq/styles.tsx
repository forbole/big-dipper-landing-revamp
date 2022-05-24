import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .title': {
            ...theme.mixins.headerGlow,
            marginBottom: theme.spacing(2),
            [theme.breakpoints.up('lg')]: {
              marginBottom: theme.spacing(2),
              textAlign: 'left',
            },
          },
          '& .header__wrapper': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          '& .content__wrapper': {
            display: 'flex',
            alignItems: 'flex-start',
          },
        },
        content: {
          flex: 1,
        },
        menuMobile: {
          [theme.breakpoints.up('lg')]: {
            display: 'none',
          },
        },
        menuDesktop: {
          display: 'none',
          [theme.breakpoints.up('lg')]: {
            display: 'block',
            marginRight: theme.spacing(2),
          },
        },
      });
    },
  )();

  return styles;
};
