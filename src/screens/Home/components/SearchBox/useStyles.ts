import { alpha, css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    listItem: css({
      "& .MuiListItemIcon-root": {
        "& .image": {
          alignItems: "center",
          border: "0 none",
          borderRadius: "100%",
          display: "flex",
          height: `${theme.spacing(3)} !important`,
          justifyContent: "center",
          margin: 0,
          padding: 0,
          width: `${theme.spacing(3)} !important`,
        },
        "flex": `0 0 ${theme.spacing(7)} !important`,
        "justifyContent": "center !important",
        "width": theme.spacing(7),
      },
      "& .MuiListItemText-root": {
        /* Neutral Color/Light Grey 01 */
        color: theme.palette.grey[300],
        flex: `1 0 ${theme.spacing(3)} !important`,
        flexFlow: "row wrap !important",
        fontSize: theme.typography.body2.fontSize,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 1.42,
        padding: "0 !important",
      },
      "alignItems": "center !important",
      "cursor": "pointer !important",
      "display": "flex !important",
      "flexFlow": "row nowrap !important",
      "justifyContent": "space-between !important",
      "minHeight": `${theme.spacing(7)} !important`,
      "padding": `0 !important`,
    }),
    paper: css({
      /* Secondary Color/Royal Blue Transparent 04 */
      backgroundColor: alpha(theme.palette.primary.main, 0.9),
      margin: theme.spacing(2, 0),
      /* Blur 03 */
      ...theme.mixins.blur03,
      /* Note: backdrop-filter has minimal browser support */
      borderRadius: theme.spacing(1.5),
    }),
    popper: css({
      "& .MuiAutocomplete-listbox": {
        maxHeight: `calc(50vh - ${theme.spacing(10)})`,
        [theme.breakpoints.up("md")]: {
          maxHeight: "70vh",
        },
      },
      [theme.breakpoints.down("md")]: {
        backgroundColor: "rgba(29, 30, 34, 0.32) !important",
        bottom: "0 !important",
        left: "0 !important",
        padding: `${theme.spacing(0, 4)} !important`,
        position: "fixed !important",
        right: "0 !important",
        top: `${theme.spacing(8)} !important`,
        width: "100% !important",
        ...theme.mixins.blur02,
        transform: "none !important",
      },
      "zIndex": "2001 !important",
    }),
    root: css({
      "& .MuiAutocomplete-inputRoot": {
        backgroundColor: alpha(theme.palette.common.white, 0.2),
      },
      "& .MuiAutocomplete-root": {
        "& .MuiInputBase-root": {
          border: `1px solid ${theme.palette.secondary.contrastText} !important`,
          borderRadius: theme.spacing(2),
          padding: `${theme.spacing(0.5, 2.25, 0.5, 2.25)} !important`,
        },
        [theme.breakpoints.up("md")]: {
          height: theme.spacing(4.75),
          minWidth: theme.spacing(36.375),
          width: theme.spacing(36.375),
        },
        "width": "100%",
      },
      "&& .searchbox__cancel-btn": {
        color: theme.palette.secondary.contrastText,
        display: "none",
      },
      "&&.searchbox__focused": {
        [theme.breakpoints.down("md")]: {
          "alignItems": "center",
          "backgroundColor": "rgba(29, 30, 34, 0.32)",
          "display": "flex",
          "gap": theme.spacing(2),
          "height": theme.spacing(8),
          "left": 0,
          "padding": theme.spacing(0, 2, 0, 4),
          "position": "fixed !important",
          "right": 0,
          "top": 0,
          "zIndex": 10,
          ...theme.mixins.blur02,
          "& .searchbox__cancel-btn": {
            display: "inline-flex",
          },
        },
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    }),
    textField: css({
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& input::placeholder": {
        color: theme.palette.common.white,
        opacity: 1,
      },
    }),
  };
};

export default useStyles;
