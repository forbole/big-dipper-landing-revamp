import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .faqcontent__list": {
        marginTop: theme.spacing(2),
      },
      "& .faqcontent__list-item:not(:last-child)": {
        marginBottom: theme.spacing(3),
      },
      "& .faqcontent__list-title": {
        color: theme.palette.secondary.main,
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.h6.fontSize,
        },
      },
      "& .faqcontent__list-title-bullet": {
        /* Secondary Color/Royal Blue 01 */
        color: theme.palette.primary.main,
        marginRight: theme.spacing(1),
      },
      "& .faqcontent__question": {
        color: theme.palette.secondary.main,
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.h6.fontSize,
        },
      },
      "& .faqcontent__wrapper:not(:last-child)": {
        marginBottom: theme.spacing(12),
        [theme.breakpoints.down("md")]: {
          marginBottom: theme.spacing(9),
        },
      },
      "& .MuiTypography-body1": {
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.body2.fontSize,
        },
      },
    }),
  };
};

export default useStyles;
