import { alpha, css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      backgroundColor: alpha(theme.palette.common.white, 0.5),
      border: `solid ${theme.palette.common.white} 2px`,
      borderRadius: "0.75rem",
      color: theme.palette.common.black,
      overflow: "auto",
      padding: theme.spacing(4),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(4),
      },
    }),
  };
};

export default useStyles;
