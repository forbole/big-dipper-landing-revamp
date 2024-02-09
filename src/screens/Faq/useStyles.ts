import { alpha, css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .faq__content": {
        backgroundColor: alpha(theme.palette.common.white, 0.8),
        borderRadius: theme.spacing(1.5),
        /* Drop Shadow 01 */
        boxShadow: theme.shadows[1],
        /* Secondary Color/Royal Blue 01 */
        color: theme.palette.secondary.dark,
        flex: 1,
        padding: theme.spacing(4),
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.body2.fontSize,
        },
      },
      "& .faq__content-wrapper": {
        alignItems: "flex-start",
        display: "flex",
      },
      "& .faq__header-wrapper": {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(4),
      },
      "& .faq__menu-desktop": {
        "> .MuiButtonBase-root": {
          backgroundColor: theme.mixins.buttonSecondary.background,
          color: theme.palette.common.white,
        },
        "alignItems": "flex-start",
        "display": "flex",
        "flexDirection": "column",
        "gap": 24,
        "marginRight": theme.spacing(10),
        "padding": 0,
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
      "& .faq__title": {
        textAlign: "left",
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.h3.fontSize,
        },
      },
      "& .faq_menu-mobile": {
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },

      "padding": 0,
    }),
  };
};

export default useStyles;
