import { css } from "@mui/material";

const useStyles = () => {
  return {
    light: css({
      ".mode-dark &": {
        display: "none",
      },
    }),
    dark: css({
      display: "none",
      ".mode-dark &": {
        display: "initial",
      },
    }),
  };
};

export default useStyles;
