import { alpha, css, useTheme } from "@mui/material";
import { LIMIT } from "@/src/styles/theme";
import basePath from "@/src/utils/basePath";

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      "& .sectionlimit__container": {
        padding: theme.spacing(1, 0, 0, 0),
        maxWidth: "100vw",
        minWidth: "300px",
        justifyContent: "center !important",
        [theme.breakpoints.up("md")]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
      },
      "& .footer__icons-wrapper path": {
        fill: theme.palette.common.white,
      },
      "& .footer__icons-wrapper": {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(0, 6),
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: "300px",
        gap: theme.spacing(4),
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "auto",
          justifyContent: "flex-start !important",
          marginRight: `-${theme.spacing(16)}`,
          padding: 0,
          gap: theme.spacing(1),
          paddingLeft: 0,
          marginBottom: 0,
        },
      },
      "& .MuiTypography-caption": {
        fontWeight: 500,
        color: theme.palette.common.white,
        fontSize: theme.spacing(1.75),
        lineHeight: 0.83333,
        "& a": {
          fontSize: theme.spacing(1.75),
          lineHeight: 0.83333,
        },
      },
      "& .footer__terms-links": {
        margin: theme.spacing(1, 0),
        "& .MuiTypography-root": {
          fontSize: theme.spacing(1.75),
        },
      },
      "& .footer__terms-dash": {
        margin: theme.spacing(0, 1),
        display: "none",
        "&:first-of-type": {
          display: "inline",
        },
        [theme.breakpoints.up("md")]: {
          display: "inline",
          "&.footer__desktop": {
            display: "inline",
          },
        },
      },
      "& .footer__social": {
        [theme.breakpoints.up("md")]: {
          margin: theme.spacing(0, 1.5),
          "&:first-of-type": {
            marginLeft: 0,
          },
        },
      },
      "& .footer__terms-wrapper": {
        display: "inline-flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        minWidth: "300px",
        width: "100%",
        padding: theme.spacing(0, 1),
        [theme.breakpoints.up("md")]: {
          width: "auto",
          justifyContent: "flex-end",
          flexFlow: "row wrap",
          flexDirection: "row",
          alignItems: "baseline",
        },
      },
      "& .footer__bottom": {
        padding: theme.spacing(0, 3),
        gap: theme.spacing(5),
        display: "flex",
        flexFlow: "row nowrap",
        width: "100%",
        justifyItem: "center",
        justifyContent: "space-between",
        maxWidth: LIMIT,
        [theme.breakpoints.down("md")]: {
          flexFlow: "row wrap",
        },
      },
      "& .footer__scroll-top": {
        position: "relative",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "flex-end",
        alignContent: "flex-end",
        alignItems: "center",
        padding: theme.spacing(3.75, 0, 2, 0),
        flexGrow: 1,
        textAlign: "center",
        backgroundColor: `url(${basePath("/images/background/footerXs.svg")})`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0%",
        minHeight: theme.spacing(28.25),
        "& .MuiFab-root": {
          padding: 0,
          maxWidth: theme.spacing(6),
          maxHeight: theme.spacing(6),
          border: `1px solid ${theme.palette.text.primary}`,
          color: theme.palette.text.primary,
          top: theme.spacing(4),
          position: "absolute",
          /* Neutral Color/White Transparent 02 */
          backgroundColor: alpha(theme.palette.common.white, 0.2),
          boxShadow: theme.shadows[1],
          borderRadius: "50%",
          display: "none",
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
          "& .MuiSvgIcon-root": {
            fontSize: theme.spacing(5),
          },
          [theme.breakpoints.up("sm")]: {
            ".layout__scrolled &": {
              display: "block",
            },
          },
        },
        [theme.breakpoints.up("sm")]: {
          padding: "10px 0 20px 0",
          backgroundImage: `url(${basePath(
            "/images/background/footerSm.svg",
          )})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 100%",
          minHeight: theme.spacing(39.375),
        },
        [theme.breakpoints.up("md")]: {
          padding: "10px 0 20px 0",
          backgroundImage: `url(${basePath(
            "/images/background/footerMd.svg",
          )})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 100%",
          minHeight: theme.spacing(39.375),
        },
        [theme.breakpoints.up("lg")]: {
          padding: "10px 0 20px 0",
          backgroundImage: `url(${basePath(
            "/images/background/footerLg.svg",
          )})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 100%",
          minHeight: theme.spacing(39.375),
        },
      },
    }),
  };
};

export default useStyles;
