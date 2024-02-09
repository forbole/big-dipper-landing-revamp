import { alpha, css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      padding: 0,
      "& .faq__title": {
        textAlign: "left",
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.h3.fontSize,
        },
      },
      "& .faq__content": {
        backgroundColor: alpha(theme.palette.common.white, 0.8),
        /* Drop Shadow 01 */
        boxShadow: theme.shadows[1],
        /* Secondary Color/Royal Blue 01 */
        color: theme.palette.secondary.dark,
        borderRadius: theme.spacing(1.5),
        padding: theme.spacing(4),
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.body2.fontSize,
        },
        flex: 1,
      },
      "& .faq__header-wrapper": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.spacing(4),
      },
      "& .faq__content-wrapper": {
        display: "flex",
        alignItems: "flex-start",
      },
      "& .faq_menu-mobile": {
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },

      "& .faq__menu-desktop": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        gap: 24,
        marginRight: theme.spacing(10),
        "> .MuiButtonBase-root": {
          backgroundColor: theme.mixins.buttonSecondary.background,
          color: theme.palette.common.white,
        },
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
    }),
  };
};

export default useStyles;
