import { alpha, css, useTheme } from "@mui/material";

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
      /* Blur 02 */
      ...theme.mixins.blur02,
      "& .horizontalmenubar__container button": {
        backgroundColor: alpha(theme.palette.common.white, 0.3),
        borderRadius: "50%",
        height: theme.spacing(5),
        minHeight: theme.spacing(5),
        minWidth: theme.spacing(5),
        width: theme.spacing(5),
      },
      "& .menumobile__paper": {
        /* Secondary Color/Royal Blue Transparent 03 */
        backgroundColor: alpha(theme.palette.primary.main, 0.7),
        /* Blur 03 */
        ...theme.mixins.blur03,
        borderRadius: theme.spacing(2),
        margin: theme.spacing(0, 3),
        padding: theme.spacing(2, 0),
      },
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    }),
  };
};

export default useStyles;
