import { alpha, css, useTheme } from "@mui/material";

import { LIMIT } from "@/src/styles/theme";
import basePath from "@/src/utils/basePath";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .footer__bottom": {
        display: "flex",
        flexFlow: "row nowrap",
        gap: theme.spacing(5),
        justifyContent: "space-between",
        justifyItem: "center",
        maxWidth: LIMIT,
        padding: theme.spacing(0, 3),
        [theme.breakpoints.down("md")]: {
          flexFlow: "row wrap",
        },
        width: "100%",
      },
      "& .footer__icons-wrapper": {
        alignItems: "center",
        display: "inline-flex",
        flexGrow: 1,
        flexWrap: "nowrap",
        gap: theme.spacing(4),
        justifyContent: "space-between",
        minWidth: "300px",
        padding: theme.spacing(0, 6),
        [theme.breakpoints.up("md")]: {
          gap: theme.spacing(1),
          justifyContent: "flex-start !important",
          marginBottom: 0,
          marginRight: `-${theme.spacing(16)}`,
          padding: 0,
          paddingLeft: 0,
          width: "auto",
        },
        width: "100%",
      },
      "& .footer__icons-wrapper path": {
        fill: theme.palette.common.white,
      },
      "& .footer__scroll-top": {
        "& .MuiFab-root": {
          "& .MuiSvgIcon-root": {
            fontSize: theme.spacing(5),
          },
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
          /* Neutral Color/White Transparent 02 */
          "backgroundColor": alpha(theme.palette.common.white, 0.2),
          "border": `1px solid ${theme.palette.text.primary}`,
          "borderRadius": "50%",
          "boxShadow": theme.shadows[1],
          "color": theme.palette.text.primary,
          "display": "none",
          "maxHeight": theme.spacing(6),
          "maxWidth": theme.spacing(6),
          "padding": 0,
          "position": "absolute",
          [theme.breakpoints.up("sm")]: {
            ".layout__scrolled &": {
              display: "block",
            },
          },
          "top": theme.spacing(4),
        },
        "alignContent": "flex-end",
        "alignItems": "center",
        "backgroundColor": `url(${basePath("/images/background/footerXs.svg")})`,
        "backgroundPosition": "50% 0%",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "display": "flex",
        "flexFlow": "column nowrap",
        "flexGrow": 1,
        "justifyContent": "flex-end",
        "minHeight": theme.spacing(28.25),
        "padding": theme.spacing(3.75, 0, 2, 0),
        "position": "relative",
        "textAlign": "center",
        [theme.breakpoints.up("lg")]: {
          backgroundImage: `url(${basePath(
            "/images/background/footerLg.svg",
          )})`,
          backgroundPosition: "50% 20px",
          backgroundRepeat: "no-repeat",
          minHeight: theme.spacing(39.375),
          padding: "10px 0 20px 0",
        },
        [theme.breakpoints.up("md")]: {
          backgroundImage: `url(${basePath(
            "/images/background/footerMd.svg",
          )})`,
          backgroundPosition: "50% 20px",
          backgroundRepeat: "no-repeat",
          minHeight: theme.spacing(39.375),
          padding: "10px 0 20px 0",
        },
        [theme.breakpoints.up("sm")]: {
          backgroundImage: `url(${basePath(
            "/images/background/footerSm.svg",
          )})`,
          backgroundPosition: "50% 20px",
          backgroundRepeat: "no-repeat",
          minHeight: theme.spacing(39.375),
          padding: "10px 0 20px 0",
        },
      },
      "& .footer__social": {
        [theme.breakpoints.up("md")]: {
          "&:first-of-type": {
            marginLeft: 0,
          },
          "margin": theme.spacing(0, 1.5),
        },
      },
      "& .footer__terms-dash": {
        "&:first-of-type": {
          display: "inline",
        },
        "display": "none",
        "margin": theme.spacing(0, 1),
        [theme.breakpoints.up("md")]: {
          "&.footer__desktop": {
            display: "inline",
          },
          "display": "inline",
        },
      },
      "& .footer__terms-links": {
        "& .MuiTypography-root": {
          fontSize: theme.spacing(1.75),
        },
        "margin": theme.spacing(1, 0),
      },
      "& .footer__terms-wrapper": {
        alignItems: "center",
        display: "inline-flex",
        flexDirection: "column",
        flexGrow: 1,
        flexWrap: "nowrap",
        justifyContent: "center",
        minWidth: "300px",
        padding: theme.spacing(0, 1),
        [theme.breakpoints.up("md")]: {
          alignItems: "baseline",
          flexDirection: "row",
          flexFlow: "row wrap",
          justifyContent: "flex-end",
          width: "auto",
        },
        width: "100%",
      },
      "& .MuiTypography-caption": {
        "& a": {
          fontSize: theme.spacing(1.75),
          lineHeight: 0.83333,
        },
        "color": theme.palette.common.white,
        "fontSize": theme.spacing(1.75),
        "fontWeight": 500,
        "lineHeight": 0.83333,
      },
      "& .sectionlimit__container": {
        justifyContent: "center !important",
        maxWidth: "100vw",
        minWidth: "300px",
        padding: theme.spacing(1, 0, 0, 0),
        [theme.breakpoints.up("md")]: {
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        },
      },
    }),
  };
};

export default useStyles;
