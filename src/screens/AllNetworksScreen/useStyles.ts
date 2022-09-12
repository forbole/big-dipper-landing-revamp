import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      padding: theme.spacing(8, 0),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(3),
      },

      '& .allnetworks__search': {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(0, 0, 2, 0),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(0, 0, 2, 0),
        },
        '& .MuiTypography-h2': {
          display: 'inline-block',
          marginBottom: theme.spacing(4),
          textAlign: 'center',
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: 'auto',
            display: 'block',
          },
        },

        '& > .allnetworks__header': {
          width: '100%',
          padding: theme.spacing(0, 0, 2, 0),
          [theme.breakpoints.up('md')]: {
            width: 'auto',
            order: 1,
          },
        },
        '& .MuiTypography-body1': {
          padding: theme.spacing(0, 0, 2, 0),
          fontWeight: 400,
          textAlign: 'left',
          [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            fontSize: theme.typography.body2.fontSize,
          },
        },
        '& .allnetworks__tabs': {
          marginTop: theme.spacing(3),
          padding: 0,

          '& .allnetworks__tab': {
            display: 'inline-block',
            color: theme.palette.common.white,
            fontWeight: 600,
            padding: theme.spacing(1, 2),
            [theme.breakpoints.down('md')]: {
              padding: theme.spacing(1),
              fontSize: theme.typography.body2.fontSize,
            },
            '&:hover': {
              color: theme.palette.grey[500],
            },
            '&.allnetworks__active': {
              /* Primary Color/BD Salmon 01 */
              color: theme.palette.secondary.main,
              borderBottom: `2px solid ${theme.palette.secondary.main}`,
            },
          },
        },
      },

      '& .allnetworks__networks': {
        padding: theme.spacing(3, 0, 20, 0),
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${theme.spacing(
          30
        )}, 1fr))`,
        justifyContent: 'space-between',
        gridGap: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(0, 0, 20, 0),
          gridGap: theme.spacing(5),
          gridTemplateColumns: `repeat(minmax(auto-fit, 3), minmax(${theme.spacing(
            32
          )}, 1fr)))`,
        },
      },
      '& .allnetworks__empty': {
        backgroundColor: theme.palette.common.white,
        padding: '2rem',
        borderRadius: '1rem',
        color: theme.palette.common.black,
      },
    }),
  };
};

export default useStyles;
