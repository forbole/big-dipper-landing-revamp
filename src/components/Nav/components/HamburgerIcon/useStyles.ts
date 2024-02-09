import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .hambergericon__bar1, .hambergericon__bar2, .hambergericon__bar3": {
        border: "1px solid #FFFFFF",
        borderRadius: "25px",
        margin: "6px 0",
        transition: "0.4s",
        width: "24px",
      },
      "& .hambergericon__x": {
        "& .hambergericon__bar1": {
          transform: "rotate(-45deg) translate(-4.5px, 4.5px)",
        },
        "& .hambergericon__bar2": {
          opacity: "0",
        },
        "& .hambergericon__bar3": {
          transform: "rotate(45deg) translate(-6.5px, -6.5px)",
        },
      },
      "alignItems": "center",
      "background": "unset",
      "border": "unset",
      "cursor": "pointer",
      "display": "flex",
      "height": "60px",
      "justifyContent": "center",
      "position": "absolute",
      "right": theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      "width": "60px",
      "zIndex": 2,
    }),
  };
};

export default useStyles;
