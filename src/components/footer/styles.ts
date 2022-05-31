import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(5, 4),
          '& .icons__wrapper path': {
            fill: theme.palette.common.white,
          },
          '& .icons__wrapper': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing(0, 2),
            marginBottom: theme.spacing(5),
          },
          '& .terms__wrapper': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '& .MuiTypography-caption': {
            fontWeight: 500,
            color: theme.palette.common.white,
          },
          '& .terms__links': {
            margin: theme.spacing(1, 0),
          },
          '& .terms--dash': {
            margin: theme.spacing(0, 1),
          },
          '& .terms--dash.desktop': {
            display: 'none',
          },
          [theme.breakpoints.up('md')]: {
            '& .icons__wrapper': {
              justifyContent: 'center',
            },
            '& .social': {
              margin: theme.spacing(0, 1.5),
            },
          },
          [theme.breakpoints.up('lg')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '& .icons__wrapper': {
              paddingLeft: 0,
              marginBottom: 0,
            },
            '& .social:first-child': {
              marginLeft: 0,
            },
            '& .terms__wrapper': {
              flexDirection: 'row',
              alignItems: 'center',
            },
            '& .terms--dash.desktop': {
              display: 'inline',
            },
          },
        },
      });
    },
  )();

  return styles;
};
