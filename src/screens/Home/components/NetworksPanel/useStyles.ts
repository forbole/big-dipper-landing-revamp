import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      '& .home__content': {
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
        },
        '& .home__search-bar': {
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: theme.spacing(0, 0, 2, 0),

          '& .MuiTypography-h2': {
            padding: theme.spacing(3, 0),
            textAlign: 'center',
            width: 'auto',
            display: 'block',
            [theme.breakpoints.down('md')]: {
              width: '100%',
              display: 'inline-block',
            },
          },
        },
      },
      '& .home__networks': {
        padding: theme.spacing(3, 0, 12, 0),
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${theme.spacing(
          15
        )}, 1fr))`,
        justifyContent: 'space-between',
        gridGap: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: `repeat(5, minmax(${theme.spacing(15)}, 1fr))`,
          padding: theme.spacing(0, 0, 12, 0),
          gridGap: theme.spacing(3),
        },
      },
    }),
  };
};

export default useStyles;
