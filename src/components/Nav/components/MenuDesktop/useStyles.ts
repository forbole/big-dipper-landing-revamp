import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      "& .menudesktop__menu-container": {
        display: "inline-flex",
        width: "auto",
        justifyContent: "right",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
      "& button": {
        borderRadius: "50%",
        minWidth: theme.spacing(5),
        minHeight: theme.spacing(5),
        width: theme.spacing(5),
        height: theme.spacing(5),
      },
    }),
    dbLogoSvg: css({
      "& img": {
        [theme.breakpoints.down("md")]: {
          width: `${theme.spacing(21.875)} !important`,
          height: "auto !important",
        },
      },
    }),
  };
};

export default useStyles;
