import { css, keyframes, useTheme } from "@mui/material";

const breathing = keyframes`
50% {
  transform: scale(0.95);
}
`;

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      /* Creating a Typography component with the styles applied. */
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
        animation: `${breathing} 3s infinite ease`,
        bottom: `-${theme.spacing(14)}`,
        mixBlendMode: "screen",
        position: "absolute",
        [theme.breakpoints.down("md")]: {
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          position: "relative",
        },
        top: 0,
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
