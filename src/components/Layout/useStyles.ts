import { alpha, css, useTheme } from "@mui/material";

import basePath from "@/src/utils/basePath";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .layout__scroll-fab": {
        /* Neutral Color/White Transparent 01 */
        "backgroundColor": alpha(theme.palette.common.white, 0.1),
        "border": `1px solid ${theme.palette.text.primary}`,
        "borderRadius": "50%",
        "bottom": theme.spacing(2.75),
        "boxShadow": theme.shadows[1],
        "color": theme.palette.text.primary,
        "display": "none",
        "maxHeight": theme.spacing(6),
        "maxWidth": theme.spacing(6),
        "opacity": 0.8,
        "padding": 0,
        "position": "fixed",
        "right": theme.spacing(2.75),
        "zIndex": 2,
        ...theme.mixins.blur02,
        "& .MuiSvgIcon-root": {
          fontSize: theme.spacing(5),
        },
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
        },
      },
      "& .layout__wrapper-content": {
        flex: "1 0 100%",
        maxWidth: "100vw",
        minWidth: "320px",
        padding: theme.spacing(0, 3),
      },
      "&.layout__scrolled .layout__scroll-fab": {
        display: "block",
      },
      "&.layout__scrolled .nav__container": {
        /* Neutral Color/White Transparent 01 */
        backgroundColor: alpha(theme.palette.common.white, 0.1),
        /* Blur 4 */
        ...theme.mixins.blur04,
        [theme.breakpoints.up("md")]: {
          /* Secondary Color/Royal Blue Transparent 02 */
          backgroundColor: alpha(theme.palette.primary.main, 0.4),
        },
      },
      "&.layout__scrolled.layout__footerinview .layout__scroll-fab": {
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      },
      "backgroundColor": theme.palette.background.default,
      "backgroundImage": `url(${basePath("/images/background/back.webp")})`,
      "backgroundOrigin": "content-box",
      "backgroundPosition": `50% 0%`,
      "backgroundRepeat": `repeat`,
      "backgroundSize": "1920px 3814px",
      "display": "flex",
      "flexDirection": "column",
      "minHeight": "100vh",
      "minWidth": "320px",
      [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${basePath("/images/background/mobile.webp")})`,
        backgroundPosition: `50% -1190px`,
        backgroundSize: "100% 3814px",
      },
    }),
  };
};

export default useStyles;
