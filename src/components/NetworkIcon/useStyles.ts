import { css } from "@mui/material";

const useStyles = () => ({
  dark: css({
    ".mode-dark &": {
      display: "initial",
    },
    "display": "none",
  }),
  light: css({
    ".mode-dark &": {
      display: "none",
    },
  }),
});

export default useStyles;
