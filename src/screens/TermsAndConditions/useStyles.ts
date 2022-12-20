import { alpha, css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      '& .termsandconditions__title': {
        marginBottom: theme.spacing(4),
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
          textAlign: 'left',
          marginBottom: theme.spacing(5),
        },
      },
      '& .termsandconditions__content': {
        backgroundColor: alpha(theme.palette.common.white, 0.8),
        /* Drop Shadow 01 */
        boxShadow: theme.shadows[1],
        /* Secondary Color/Royal Blue 01 */
        color: theme.palette.secondary.dark,
        borderRadius: theme.spacing(1.5),
        [theme.breakpoints.down('md')]: {
          padding: theme.spacing(4),
          fontSize: theme.typography.body2.fontSize,
        },

        '& .MuiTypography-h6': {
          fontWeight: 'normal',
          textDecoration: 'underline',
          marginBottom: 0,
        },
        '& a': {
          cursor: 'pointer',
        }
      },

      '& .termsandconditions__intro': {
        marginBottom: theme.spacing(2),
      },

      '& .MuiTypography-h3': {
        color: theme.palette.secondary.main,
        marginBottom: theme.spacing(2),
        '&:not(:first-of-type)': {
          marginTop: theme.spacing(6),
        },
      },

      '& .MuiTypography-h4': {
        marginBottom: theme.spacing(2),
      },
      '& .termsandconditions__key': {
        fontWeight: 500,
      },
      '& ul': {
        marginLeft: theme.spacing(2),
      },
      '& li': {
        marginBottom: theme.spacing(2),
      },
      '& .termsandconditions__description': {
        marginBottom: theme.spacing(3),
      },
      '& .termsandconditions__indent': {
        marginLeft: theme.spacing(2),
      },
    }),
  };
};

export default useStyles;
