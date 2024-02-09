import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .caption": {
        [theme.breakpoints.down("md")]: {
          alignItems: "center",
          display: "flex",
          flexFlow: "column nowrap",
          gap: "1rem",
          height: "39%",
          justifyContent: "flex-start",
        },
        width: "100%",
      },
      "& .image": {
        bottom: theme.spacing(14),
        position: "absolute",
        [theme.breakpoints.down("md")]: {
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          position: "static",
          width: "55%",
        },
        top: theme.spacing(4),
        width: "100%",
      },
      "& .MuiTypography-h1": {
        lineHeight: 1.5,
        textShadow: theme.shadows[24],
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.h2.fontSize,
        },
        width: "100%",
      },
      "& .MuiTypography-h3": {
        fontWeight: 400,
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.h5.fontSize,
        },
      },
      "alignItems": "center",
      "display": "flex",
      "flexFlow": "column nowrap",
      "height": "100%",
      "justifyContent": "flex-end",
      "position": "relative",
    }),
  };
};

export default useStyles;
