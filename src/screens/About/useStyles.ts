import { alpha, css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .about__content": {
        backgroundColor: alpha(theme.palette.common.white, 0.8),
        borderRadius: theme.spacing(1.5),
        /* Drop Shadow 01 */
        boxShadow: theme.shadows[1],
        /* Secondary Color/Royal Blue 01 */
        color: theme.palette.secondary.dark,
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.body2.fontSize,
          padding: theme.spacing(4),
        },
      },
      "& .about__title": {
        marginBottom: theme.spacing(4),
        textAlign: "center",
        [theme.breakpoints.up("md")]: {
          marginBottom: theme.spacing(5),
          textAlign: "left",
        },
      },
      "& .sectionlimit__container": {
        padding: 0,
      },
    }),
  };
};

export default useStyles;
