import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .MuiListItemIcon-root": {
        justifyContent: "center",
        padding: theme.spacing(0, 0, 0, 0),
      },
      "& .MuiListItemText-root": {
        padding: theme.spacing(0, 0, 0, 2),
      },
      "& .MuiTypography-h5": {
        /* Secondary Color/Royal Blue 01 */
        color: theme.palette.secondary.dark,
      },
      "& .MuiTypography-subtitle1": {
        /* Secondary Color/Royal Blue 01 */
        color: theme.palette.secondary.dark,
        fontWeight: "100",
      },
      "padding": `${theme.spacing(1)} !important`,
    }),
  };
};

export default useStyles;
