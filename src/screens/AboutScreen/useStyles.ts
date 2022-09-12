import { alpha, css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      '& .sectionlimit__container': {
        padding: 0,
      },
      '& .about__title': {
        marginBottom: theme.spacing(4),
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
          textAlign: 'left',
          marginBottom: theme.spacing(5),
        },
      },
      '& .about__content': {
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
      },
    }),
  };
};

export default useStyles;
