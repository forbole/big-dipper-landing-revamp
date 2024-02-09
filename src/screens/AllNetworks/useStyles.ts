import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .allnetworks__empty": {
        backgroundColor: theme.palette.common.white,
        borderRadius: "1rem",
        color: theme.palette.common.black,
        padding: "2rem",
      },
      "& .allnetworks__networks": {
        display: "grid",
        gridGap: theme.spacing(2),
        gridTemplateColumns: `repeat(auto-fit, minmax(${theme.spacing(
          30,
        )}, 1fr))`,
        justifyContent: "space-between",
        padding: theme.spacing(3, 0, 20, 0),
        [theme.breakpoints.up("md")]: {
          gridGap: theme.spacing(5),
          gridTemplateColumns: `repeat(3, minmax(${theme.spacing(32)}, 1fr))`,
          padding: theme.spacing(0, 0, 20, 0),
        },
      },

      "& .allnetworks__search": {
        "& .allnetworks__tabs": {
          "& .allnetworks__tab": {
            "&:hover": {
              color: theme.palette.grey[500],
            },
            "&.allnetworks__active": {
              borderBottom: `2px solid ${theme.palette.secondary.main}`,
              /* Primary Color/BD Salmon 01 */
              color: theme.palette.secondary.main,
            },
            "color": theme.palette.common.white,
            "display": "inline-block",
            "fontWeight": 600,
            "padding": theme.spacing(1, 2),
            [theme.breakpoints.down("md")]: {
              fontSize: theme.typography.body2.fontSize,
              padding: theme.spacing(1),
            },
          },
          "marginTop": theme.spacing(3),

          "padding": 0,
        },
        "& .MuiTypography-body1": {
          fontWeight: 400,
          padding: theme.spacing(0, 0, 2, 0),
          textAlign: "left",
          [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.body2.fontSize,
            textAlign: "center",
          },
        },
        "& .MuiTypography-h2": {
          display: "inline-block",
          marginBottom: theme.spacing(4),
          textAlign: "center",
          [theme.breakpoints.up("md")]: {
            display: "block",
            width: "auto",
          },
          width: "100%",
        },
        "& > .allnetworks__header": {
          padding: theme.spacing(0, 0, 2, 0),
          [theme.breakpoints.up("md")]: {
            order: 1,
            width: "auto",
          },
          width: "100%",
        },
        "alignItems": "center",
        "display": "flex",
        "flexFlow": "row wrap",

        "justifyContent": "space-between",
        "padding": theme.spacing(0, 0, 2, 0),
        [theme.breakpoints.up("md")]: {
          padding: theme.spacing(0, 0, 2, 0),
        },
      },

      "padding": theme.spacing(8, 0),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(3, 0),
      },
    }),
  };
};

export default useStyles;
