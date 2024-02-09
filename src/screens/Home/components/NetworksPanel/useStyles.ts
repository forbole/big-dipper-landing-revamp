import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .home__content": {
        "& .home__search-bar": {
          "& .MuiTypography-h2": {
            display: "block",
            padding: theme.spacing(3, 0),
            textAlign: "center",
            [theme.breakpoints.down("md")]: {
              display: "inline-block",
              width: "100%",
            },
            width: "auto",
          },
          "alignItems": "center",
          "display": "flex",
          "flexFlow": "row wrap",
          "justifyContent": "space-between",

          "padding": theme.spacing(0, 0, 2, 0),
        },
        "padding": 0,
        [theme.breakpoints.up("md")]: {
          padding: 0,
        },
      },
      "& .home__networks": {
        display: "grid",
        gridGap: theme.spacing(2),
        gridTemplateColumns: `repeat(auto-fit, minmax(${theme.spacing(
          15,
        )}, 1fr))`,
        justifyContent: "space-between",
        padding: theme.spacing(3, 0, 12, 0),
        [theme.breakpoints.up("md")]: {
          gridGap: theme.spacing(3),
          gridTemplateColumns: `repeat(5, minmax(${theme.spacing(15)}, 1fr))`,
          padding: theme.spacing(0, 0, 12, 0),
        },
      },
    }),
  };
};

export default useStyles;
