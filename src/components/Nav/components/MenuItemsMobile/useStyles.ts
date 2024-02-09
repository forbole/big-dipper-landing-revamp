import { alpha, css, keyframes, useTheme } from "@mui/material";

const hover = keyframes({
  "0%": { background: "rgba(255, 255, 255, 0)0vw" },
  "100%": { backgroundPositionX: "rgba(255, 255, 255, 0.5)" },
});

const useStyles = () => {
  const theme = useTheme();

  return {
    listItemButton: css({
      "&:hover": {
        "&.menuitemsdesktop__active": {
          animation: "none",
        },
        "animation": `${hover} 2s ease-out 1 forwards`,
      },
    }),
    paper: css({
      backgroundColor: "transparent",
    }),
    root: css({
      "& .menuitemsmobile__list-item-btn": {
        "& > .MuiListItemText-root": {
          flex: "0 1 auto",
        },
        "& > .MuiSvgIcon-fontSizeMedium": {
          color: theme.palette.grey[500],
        },
        "&.MuiListItem-gutters": {
          padding: theme.spacing(2, 2.5),
        },
        "gap": theme.spacing(1),
        "padding": theme.spacing(1, 4),
        "textAlign": "left",
        ...theme.mixins.buttonSecondary,
        "& .MuiListItemText-root": {
          color: theme.palette.common.white,
          fontWeight: 900,
        },
        "&.menuitemsmobile__active": {
          ...theme.mixins.button,
          "&.menuitemsmobile__list-item-btn": {
            pointerEvents: "auto",
          },
          "borderRadius": 0,
          "pointerEvents": "none",
        },
        "borderRadius": 0,
      },
      "& .menuitemsmobile__submenu-container": {
        /* Neutral Color/White Transparent 02 */
        backgroundColor: alpha(theme.palette.common.white, 0.2),
      },
      "display": "flex",
      "flexFlow": "column wrap",
      "gap": theme.spacing(2),
    }),
  };
};

export default useStyles;
