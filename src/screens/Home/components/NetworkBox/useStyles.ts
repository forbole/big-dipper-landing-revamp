import { alpha, css, useTheme } from "@mui/material";

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
      "& .MuiLinearProgress-root": {
        width: "100%",
      },
      "& .MuiTypography-h3, & .MuiTypography-h6, & .MuiTypography-body1": {
        whiteSpace: "nowrap",
      },
      "& .MuiTypography-h4": {
        overflow: "hidden",
        textOverflow: "clip",
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.typography.h6.fontSize,
        },
        width: "100%",
      },
      "& .networkbox__close-btn": {
        marginTop: `-${theme.spacing(1)}`,
        position: "absolute",
        right: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },
      "& .networkbox__desktop-anchor": {
        "& .networkbox__explore-btn": {
          display: "none",
        },
        "& .networkbox__popover": {
          pointerEvents: "none",
        },
        "&:hover .networkbox__popover": {
          [theme.breakpoints.up("md")]: {
            display: "flex !important",
          },
        },
        "cursor": "pointer",
        "display": "none",
        "position": "relative",
        [theme.breakpoints.up("md")]: {
          "&:hover .networkbox__popover": {
            display: "flex !important",
          },
          "display": "flex",
        },
      },
      "& .networkbox__desktop-anchor, & .networkbox__mobile-anchor": {
        "&:hover": {
          opacity: 1,
        },
        "alignItems": "center",
        "borderRadius": theme.spacing(1.5),
        /* Secondary Color/Royal Blue 01 */
        "color": theme.palette.secondary.dark,
        "flexFlow": "row wrap",
        "fontSize": theme.typography.overline.fontSize,
        "gap": theme.spacing(0.5),
        "height": "100%",
        "justifyContent": "center",
        "padding": "20% 0",
        "width": "100%",
      },
      "& .networkbox__explore-btn": {
        ...theme.mixins.button,
        fontSize: theme.typography.body1.fontSize,
      },
      "& .networkbox__mobile-anchor": {
        display: "flex",
        gap: theme.spacing(3),
        position: "static",
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },
      "& .networkbox__mobile-popover-contaier": {
        "& .MuiTypography-h3": {
          fontSize: theme.typography.h5.fontSize,
        },
        "& .MuiTypography-h6, & .MuiTypography-body1": {
          fontSize: theme.typography.body2.fontSize,
        },
        "& .networkbox__popover": {
          left: theme.spacing(3),
          right: theme.spacing(3),
        },
        "&.networkbox__active .networkbox__popover": {
          display: "flex !important",
        },
        "alignSelf": "flex-start",
        "cursor": "pointer",
        "display": "block",
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },
      "& .networkbox__popover": {
        /* Secondary Color/Royal Blue Transparent 03 */
        "backgroundColor": alpha(theme.palette.primary.main, 0.7),
        "boxShadow": theme.shadows[1],
        "display": "none",
        "padding": theme.spacing(2),
        "position": "absolute",
        [theme.breakpoints.down("md")]: {
          marginTop: `-${theme.spacing(1)}`,
        },
        [theme.breakpoints.up("md")]: {
          maxHeight: theme.spacing(27.25),
          maxWidth: theme.spacing(34),
          minHeight: "125%",
          minWidth: "125%",
        },
        "zIndex": 3,
        ...theme.mixins.blur03,
        "& .MuiTypography-body1": {
          textAlign: "right",
          whiteSpace: "initial",
        },
        "& .MuiTypography-h6": {
          textAlign: "left",
        },
        "& > .MuiBox-root:nth-of-type(1)": {
          alignItems: "center",
          display: "flex",
          flexFlow: "row nowrap",
          fontWeight: theme.typography.fontWeightBold,
          gap: theme.spacing(1),
          justifyContent: "flex-start",
          width: "100%",
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
            "gap": theme.spacing(3),
            "justifyContent": "space-between",
          },
          "display": "flex",
          "flexFlow": "column nowrap",
          "gap": theme.spacing(1),
          "justifyContent": "space-between",
          "width": "100%",
        },
        "alignItems": "flex-start",
        "borderRadius": theme.spacing(1.5),
        "color": theme.palette.text.primary,
        "flexFlow": "row wrap",
        "gap": theme.spacing(2),
        "justifyContent": "center",
      },
      "alignItems": "center",
      "backgroundColor": alpha(theme.palette.common.white, 0.6),
      "border": `2px solid ${theme.palette.text.primary}`,
      "borderRadius": theme.spacing(1.5),
      "display": "inline-flex",
      "flexFlow": "row wrap",
      "justifyContent": "center",
      "minHeight": theme.spacing(10),
      "minWidth": theme.spacing(15),
      "textAlign": "center",
    }),
  };
};

export default useStyles;
