import { alpha, css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .MuiTypography-h3": {
        "&:not(:first-of-type)": {
          marginTop: theme.spacing(6),
        },
        "color": theme.palette.secondary.main,
        "marginBottom": theme.spacing(2),
      },
      "& .MuiTypography-h4": {
        marginBottom: theme.spacing(2),
      },

      "& .termsandconditions__content": {
        "& .MuiTypography-h6": {
          fontWeight: "normal",
          marginBottom: 0,
          textDecoration: "underline",
        },
        "& a": {
          cursor: "pointer",
        },
        "backgroundColor": alpha(theme.palette.common.white, 0.8),
        "borderRadius": theme.spacing(1.5),
        /* Drop Shadow 01 */
        "boxShadow": theme.shadows[1],

        /* Secondary Color/Royal Blue 01 */
        "color": theme.palette.secondary.dark,
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.body2.fontSize,
          padding: theme.spacing(4),
        },
      },

      "& .termsandconditions__description": {
        marginBottom: theme.spacing(3),
      },

      "& .termsandconditions__indent": {
        marginLeft: theme.spacing(2),
      },
      "& .termsandconditions__intro": {
        marginBottom: theme.spacing(2),
      },
      "& .termsandconditions__key": {
        fontWeight: 500,
      },
      "& .termsandconditions__title": {
        marginBottom: theme.spacing(4),
        textAlign: "center",
        [theme.breakpoints.up("md")]: {
          marginBottom: theme.spacing(5),
          textAlign: "left",
        },
      },
      "& li": {
        marginBottom: theme.spacing(2),
      },
      "& ul": {
        marginLeft: theme.spacing(2),
      },
    }),
  };
};

export default useStyles;
