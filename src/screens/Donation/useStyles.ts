import { css, useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      "& .donation__address-address": {
        marginBottom: theme.spacing(3),
        wordBreak: "break-all",
      },
      "& .donation__address-button": {
        ...theme.mixins.button,
        gap: theme.spacing(1),
        width: "100%",
      },
      "& .donation__address-container": {
        display: "flex",
        flexFlow: "row nowrap",
        gap: theme.spacing(3),
        marginBottom: theme.spacing(3),
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
          flexFlow: "column nowrap",
        },
      },
      "& .donation__address-key": {
        marginBottom: theme.spacing(1),
      },
      "& .donation__address-logo": {
        marginBottom: theme.spacing(3),
      },
      "& .donation__description": {
        marginBottom: theme.spacing(4),
      },
      "& .donation__title": {
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
