import { css } from "@mui/material";

import { LIMIT } from "@/src/styles/theme";

const useStyles = () => ({
  root: css({
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: LIMIT,
  }),
});

export default useStyles;
