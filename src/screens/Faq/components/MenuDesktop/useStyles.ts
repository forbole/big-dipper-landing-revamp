import { alpha, css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: theme.spacing(2, 0),
      "& .menudesktop__button": {
        margin: theme.spacing(1, 0),
        ...theme.mixins.buttonSecondary,
        /* Neutral Color/White Transparent 02 */
        boxShadow: theme.shadows[0],
        "&:hover": {
          backgroundColor: alpha(theme.palette.common.white, 0.8),
          filter: "none",
        },
      },
      "& .menudesktop__active": {
        ...theme.mixins.button,
        "&:hover": {
          ...theme.mixins.button,
        },
      },
    }),
  };
};

export default useStyles;
