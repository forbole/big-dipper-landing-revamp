import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      flexFlow: "column nowrap",
      height: "100%",
      position: "relative",
      "& .caption": {
        width: "100%",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          flexFlow: "column nowrap",
          height: "39%",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
        },
      },
      "& .MuiTypography-h1": {
        width: "100%",
        lineHeight: 1.5,
        textShadow: theme.shadows[24],
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.h2.fontSize,
        },
      },
      "& .MuiTypography-h3": {
        fontWeight: 400,
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.h5.fontSize,
        },
      },
      "& .image": {
        mixBlendMode: "screen",
        position: "absolute",
        top: "18%",
        height: "100%",
        [theme.breakpoints.down("md")]: {
          position: "static",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        },
      },
      "& .image svg": {
        width: "100%",
        height: "auto",
      },
    }),
  };
};

export default useStyles;
