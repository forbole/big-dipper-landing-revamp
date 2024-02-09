import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      "& .sectionlimit__container": {
        padding: 0,
      },
      "& .donation__title": {
        marginBottom: theme.spacing(4),
        textAlign: "center",
        [theme.breakpoints.up("md")]: {
          textAlign: "left",
          marginBottom: theme.spacing(5),
        },
      },
      "& .donation__description": {
        marginBottom: theme.spacing(4),
      },
      "& .donation__address-container": {
        display: "flex",
        flexFlow: "row nowrap",
        gap: theme.spacing(3),
        textAlign: "center",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
          flexFlow: "column nowrap",
        },
      },
      "& .donation__address-logo": {
        marginBottom: theme.spacing(3),
      },
      "& .donation__address-key": {
        marginBottom: theme.spacing(1),
      },
      "& .donation__address-address": {
        wordBreak: "break-all",
        marginBottom: theme.spacing(3),
      },
      "& .donation__address-button": {
        ...theme.mixins.button,
        width: "100%",
        gap: theme.spacing(1),
      },
    }),
  };
};

export default useStyles;
