import { alpha, css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    menu: css({
      "& .MuiList-padding": {
        padding: 0,
      },

      "& .MuiList-root": {
        alignItems: "stretch",
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
        padding: 0,
      },
      "& .MuiMenu-paper": {
        /* Secondary Color/Royal Blue Transparent 03 */
        backgroundColor: alpha(theme.palette.primary.main, 0.7),
        /* Blur 03 */
        ...theme.mixins.blur03,
        borderRadius: theme.spacing(1.5),
        left: `${theme.spacing(3)} !important`,
        margin: theme.spacing(2, 0),
        padding: theme.spacing(3, 0),
        right: `${theme.spacing(3)} !important`,
      },
      "& .MuiMenuItem-root": {
        "&.menumobile__active": {
          ...theme.mixins.button,
          borderRadius: 0,
        },
        "color": theme.palette.common.white,
        "justifyContent": "center",
        "padding": theme.spacing(2),
      },
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    }),
    root: css({
      "& .menumobile__selected": {
        ...theme.mixins.button,
        padding: theme.spacing(1, 3),
      },
      "position": "relative",
    }),
  };
};

export default useStyles;
