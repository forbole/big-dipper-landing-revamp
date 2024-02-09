import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";
import classnames from "classnames";
import type { FC } from "react";

import useStyles from "./useStyles";

/**
 * Helper component to restraint content
 * from going past a certain width
 * @returns
 */
const SectionLimit: FC<BoxProps> = ({ children, className, ...props }) => {
  const styles = useStyles();

  return (
    <Box
      className={classnames(className, "sectionlimit__container")}
      {...props}
      css={styles.root}
    >
      {children}
    </Box>
  );
};

export default SectionLimit;
