import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return ({
      root: {
        '& .title': {
          color: theme.palette.custom.general.white,
        },
        '& .header__wrapper': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: theme.spacing(2),
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
          display: 'flex',
          marginRight: theme.spacing(4),
        },
      },
    });
  }, { index: 1 })();

  return styles;
};
