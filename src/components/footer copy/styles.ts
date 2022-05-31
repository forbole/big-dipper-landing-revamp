import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(4, 3),
          color: theme.palette.custom.fonts.five,
          '& .social svg': {
            width: theme.spacing(2),
            height: theme.spacing(2),
          },
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
          '& .link__item': {
            padding: theme.spacing(1),
            fontWeight: 600,
            color: theme.palette.custom.fonts.five,
          },
          '& .link__item--caption': {
            fontWeight: 400,
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
          '& .terms__wrapper': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '& .terms__links': {
            marginBottom: theme.spacing(1),
          },
          '& .terms--dash': {
            margin: theme.spacing(0, 1),
          },
          '& .terms--dash:last-child': {
            display: 'none',
          },
          '& .desktop': {
            display: 'none',
          },
          [theme.breakpoints.up('lg')]: {
            '& .desktop': {
              display: 'block',
            },
            '& .logo': {
              width: '230px',
            },
            '& .mobile': {
              display: 'none',
            },
            '& .top': {
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            },
            '& .bd__item:first-child, & .forbole__item:first-child': {
              paddingLeft: 0,
            },
            '& .forbole__wrapper': {
              alignItems: 'flex-start',
            },
            '& .bottom': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
            '& .icons__wrapper': {
              paddingLeft: 0,
              marginBottom: 0,
            },
            '& .terms__links': {
              marginBottom: 0,
            },
            '& .terms--dash:last-child': {
              display: 'inline',
            },
            '& .terms__wrapper': {
              flexDirection: 'row',
              alignItems: 'center',
            },
            '& .social:first-child': {
              marginLeft: 0,
            },
          },
        },
      });
    },
  )();

  return styles;
};
