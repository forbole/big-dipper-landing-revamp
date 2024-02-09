import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      alignItems: "center",
      display: "flex",
      flexFlow: "row nowrap",
      height: theme.spacing(9.875),
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        justifyContent: "space-between",
      },
    }),
  };
};

export default useStyles;
