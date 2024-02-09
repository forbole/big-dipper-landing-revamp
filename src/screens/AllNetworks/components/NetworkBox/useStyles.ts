import { css, useTheme } from "@mui/material";
import { alpha } from "@mui/system";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .image": {
        alignItems: "center",
        border: "0 none",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        margin: 0,
        maxHeight: theme.spacing(6),
        maxWidth: theme.spacing(6),
        minHeight: theme.spacing(6),
        minWidth: theme.spacing(6),
        padding: 0,
      },
      "& .MuiTypography-body2": {
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.caption.fontSize,
        },
        whiteSpace: "nowrap",
      },
      "& .MuiTypography-h4": {
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.h6.fontSize,
        },
        whiteSpace: "nowrap",
      },
      "& .networkbox__dropdown-btn": {
        "& .MuiBadge-root": {
          color: theme.palette.common.white,
          marginLeft: theme.spacing(6),
          marginTop: theme.spacing(4),
          position: "absolute",
        },
        "& .MuiBox-root:nth-of-type(2)": {
          alignItems: "stretch",
          flex: "1 1 auto",
          flexDirection: "column",
          marginLeft: theme.spacing(2),
          overflow: "hidden",
        },
        "& .MuiSvgIcon-root": {
          /* Neutral Color/Dark Grey */
          color: theme.palette.grey[800],
        },
        "& .MuiTypography-h4": {
          /* Primary Color/Forbole Blue 01 */
          color: theme.palette.primary.contrastText,
        },
        "& .networkbox__subtitlecontainer": {
          "& .MuiTypography-body2": {
            /* Secondary Color/Royal Blue 01 */
            color: theme.palette.secondary.dark,
            left: 0,
            lineHeight: 1,
            overflow: "hidden",
            position: "absolute",
            right: 0,
            textOverflow: "ellipsis",
          },
          "height": "1rem",
          "position": "relative",
          "width": "100%",
        },
        "alignItems": "center",
        "cursor": "pointer",
        "display": "flex",
        "flexDirection": "row",
        "flexWrap": "nowrap",
        "justifyContent": "flex-start",
        "minHeight": "100%",
        "minWidth": "100%",
        "padding": theme.spacing(0, 3),

        "textAlign": "left",
      },
      "& .networkbox__popover": {
        "backgroundColor": alpha(theme.palette.common.white, 0.8),
        "borderRadius": theme.spacing(1.5),
        "boxShadow": theme.shadows[2],
        "color": theme.palette.common.black,
        "flexFlow": "column nowrap",
        "gap": theme.spacing(1),
        "marginLeft": "-2px",
        "padding": theme.spacing(1, 0),
        "position": "absolute",
        "top": "110%",
        "width": "calc(100% + 2px)",
        "zIndex": 2000,
        ...theme.mixins.blur03,
        "& .MuiListItemButton-root": {
          "& .MuiListItemIcon-root": {
            color: theme.palette.common.black,
          },
          // eslint-disable-next-line max-len
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.2),
          },
          "padding": `${theme.spacing(1, 3)} !important`,
        },
        "& .MuiTypography-h5": {
          /* Secondary Color/Royal Blue 01 */
          color: theme.palette.secondary.dark,
        },
        "& .MuiTypography-h6": {
          /* Secondary Color/Royal Blue 01 */
          color: theme.palette.secondary.dark,
        },
        "& > .MuiBox-root:nth-of-type(1)": {
          alignItems: "center",
          display: "flex",
          flexFlow: "row nowrap",
          fontWeight: theme.typography.fontWeightBold,
          gap: theme.spacing(1),
          justifyContent: "space-between",
        },
        "& > .MuiBox-root:nth-of-type(2)": {
          "& > .MuiBox-root": {
            "& > .MuiBox-root": {
              flex: "1 0 auto",
            },
            "& > .MuiBox-root:nth-of-type(1)": {
              fontWeight: theme.typography.fontWeightBold,
              textAlign: "left",
            },
            "& > .MuiBox-root:nth-of-type(2)": {
              textAlign: "right",
            },
            "alignItems": "center",
            "display": "flex",
            "flexFlow": "row nowrap",
            "gap": theme.spacing(1),
            "justifyContent": "space-between",
          },
          "display": "flex",
          "flexFlow": "column nowrap",
          "gap": theme.spacing(1),
          "justifyContent": "space-between",
        },
      },
      "&&:hover, &&.networkbox__active": {
        backgroundColor: alpha(theme.palette.common.white, 0.8),
      },
      "alignItems": "center",
      "backgroundColor": alpha(theme.palette.common.white, 0.6),
      "border": `2px solid ${theme.palette.text.primary}`,
      "borderRadius": theme.spacing(1.5),
      "cursor": "pointer",
      "display": "inline-flex",
      "flexFlow": "row wrap",
      "justifyContent": "center",
      "minHeight": theme.spacing(10),
      "minWidth": theme.spacing(30),

      "position": "relative",
      "textAlign": "center",
      [theme.breakpoints.up("md")]: {
        minWidth: theme.spacing(28),
      },
    }),
  };
};

export default useStyles;
