import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(4, 3),
          color: theme.palette.custom.fonts.five,
          '& .logo': {
            width: '150px',
            marginBottom: theme.spacing(5),
          },
          '& .internal__wrapper': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          },
          '& .divider': {
            width: '100%',
            margin: theme.spacing(4, 0),
          },
          '& .bdlink__item': {
            padding: theme.spacing(1),
            fontWeight: 600,
            color: theme.palette.custom.fonts.five,
          },
          '& .forbole__wrapper': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          },
          '& .forbole__title': {
            marginBottom: theme.spacing(3),
          },
          '& .icons__wrapper': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(0, 2),
            marginBottom: theme.spacing(3),
          },
          '& .social': {
            margin: theme.spacing(0, 1.5),
          },
          '& .social path': {
            fill: theme.palette.custom.fonts.five,
          },
          [theme.breakpoints.up('lg')]: {
            '& .logo': {
              width: '230px',
            },
            '& .mobile': {
              display: 'none',
            },
          },
        },
      });
    },
  )();

  return styles;
};
