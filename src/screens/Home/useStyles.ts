/* eslint-disable max-len */
import { alpha, css, useTheme } from "@mui/material";

import basePath from "@/src/utils/basePath";

const useStyles = () => {
  const theme = useTheme();

  return {
    layout: css({
      backgroundImage: `url(${basePath("/images/background/backHome.webp")})`,
      backgroundPosition: `50% 0, 50% 0px`,
      backgroundRepeat: "no-repeat, repeat",
      backgroundSize: "cover",
      [theme.breakpoints.down("md")]: {
        backgroundImage: `linear-gradient(179.23deg, rgba(17, 34, 181, 1) -40.29%, rgba(23, 22, 22, 0) 74.03%), url(${basePath("/images/background/mobileHomeTop.webp")}), url(${basePath("/images/background/mobileHome.webp")})`,
        backgroundPosition: `50% 0, 50% -10vh, 50% 0`,
        backgroundRepeat: "no-repeat, no-repeat, repeat",
        backgroundSize: "100% 260px, 100% auto, 768px 5568px",
      },
    }),
    root: css({
      "& .home__section-box": {
        padding: 0,
      },
    }),
    slider: css({
      "& .home__slider": {
        height: "100%",
        margin: 0,
        position: "relative",
        width: "100%",
      },
      "& .home__slider-left": {
        "& .MuiSvgIcon-root": {
          fontSize: theme.spacing(3.5),
        },
        /* Neutral Color/White Transparent 05 */
        "backgroundColor": alpha(theme.palette.common.white, 0.6),
        "border": `1px solid ${theme.palette.text.primary}`,
        "borderRadius": "50%",
        "boxShadow": theme.shadows[1],
        "color": theme.palette.text.primary,
        "left": theme.spacing(3),
        "maxHeight": theme.spacing(4.5),
        "maxWidth": theme.spacing(4.5),
        "padding": 0,
        "position": "absolute",
        [theme.breakpoints.down("md")]: {
          left: 0,
          top: "40%",
        },
        "top": theme.spacing(21.5),
        "zIndex": 1,
      },
      "& .home__slider-right": {
        "& .MuiSvgIcon-root": {
          fontSize: theme.spacing(3.5),
        },
        /* Neutral Color/White Transparent 05 */
        "backgroundColor": alpha(theme.palette.common.white, 0.6),
        "border": `1px solid ${theme.palette.text.primary}`,
        "borderRadius": "50%",
        "boxShadow": theme.shadows[1],
        "color": theme.palette.text.primary,
        "maxHeight": theme.spacing(4.5),
        "maxWidth": theme.spacing(4.5),
        "padding": 0,
        "position": "absolute",
        "right": theme.spacing(3),
        [theme.breakpoints.down("md")]: {
          right: 0,
          top: "40%",
        },
        "top": theme.spacing(21.5),
        "zIndex": 1,
      },
      "& .slick-dots": {
        bottom: 0,
        lineHeight: theme.spacing(8.5),
      },
      "& .slick-dots li button:before": {
        background: theme.palette.common.white,
        borderRadius: theme.spacing(0.5625),
        color: theme.palette.common.white,
        fontSize: theme.spacing(0),
        height: theme.spacing(1.125),
        opacity: 0.8,
        width: theme.spacing(1.125),
      },
      "& .slick-dots li.slick-active button:before": {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
      },
      "& .slick-slide": {
        height: theme.spacing(59.5),
        [theme.breakpoints.down("md")]: {
          height: "68vh",
          maxHeight: theme.spacing(80),
        },
      },
      "& .slick-slide > div": {
        height: "100%",
        padding: theme.spacing(0, 0, 10, 0),
      },
      "& .slick-slider": {
        height: "100%",
      },
      "& .slick-slider .slick-list": {
        height: "100%",
        transform: "none !important",
      },
      "backgroundImage": `url(${basePath("/images/background/stars.webp")})`,
      "backgroundPosition": "50% 0",
      "backgroundRepeat": "no-repeat",
      "backgroundSize": `cover`,
      "height": theme.spacing(59.5),
      "margin": 0,
      "position": "relative",
      "textAlign": "center",
      [theme.breakpoints.down("md")]: {
        height: "68vh",
        maxHeight: theme.spacing(80),
      },
      "width": "100%",
    }),
  };
};

export default useStyles;
