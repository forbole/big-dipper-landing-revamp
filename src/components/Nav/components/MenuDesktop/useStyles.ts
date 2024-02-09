import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    dbLogoSvg: css({
      "& img": {
        [theme.breakpoints.down("md")]: {
          height: "auto !important",
          width: `${theme.spacing(21.875)} !important`,
        },
      },
    }),
    root: css({
      "& .menudesktop__menu-container": {
        display: "inline-flex",
        justifyContent: "right",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
        width: "auto",
      },
      "& button": {
        borderRadius: "50%",
        height: theme.spacing(5),
        minHeight: theme.spacing(5),
        minWidth: theme.spacing(5),
        width: theme.spacing(5),
      },
    }),
  };
};

export default useStyles;
