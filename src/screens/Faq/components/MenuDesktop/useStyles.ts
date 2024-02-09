import { alpha, css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .menudesktop__active": {
        ...theme.mixins.button,
        "&:hover": {
          ...theme.mixins.button,
        },
      },
      "& .menudesktop__button": {
        "margin": theme.spacing(1, 0),
        ...theme.mixins.buttonSecondary,
        "&:hover": {
          backgroundColor: alpha(theme.palette.common.white, 0.8),
          filter: "none",
        },
        /* Neutral Color/White Transparent 02 */
        "boxShadow": theme.shadows[0],
      },
      "alignItems": "flex-start",
      "display": "flex",
      "flexDirection": "column",
      "padding": theme.spacing(2, 0),
    }),
  };
};

export default useStyles;
