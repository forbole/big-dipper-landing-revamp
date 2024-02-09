import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& h3": {
        fontSize: "1.2rem",
      },
      "& h4": {
        fontSize: "0.95rem",
      },
      "& svg": {
        transform: "scale(0.7)",
      },
      "alignItems": "center",
      "display": "flex",
      "flexFlow": "column nowrap",
      "height": "100%",
      "justifyContent": "center",
      [theme.breakpoints.up("md")]: {
        "& h3": {
          fontSize: "2rem",
        },
        "& h4": {
          fontSize: "1.4rem",
        },
      },
    }),
  };
};

export default useStyles;
