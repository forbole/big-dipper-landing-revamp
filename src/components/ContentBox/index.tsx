import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";
import classnames from "classnames";
import type { FC } from "react";

import useStyles from "./useStyles";

/**
 * A functional component that takes in children and className as props.
 * @param  - FC<BoxProps>
 * @returns A styled div with the children and className passed in as props.
 */
const ContentBox: FC<BoxProps> = ({ className, ...props }) => {
  const styles = useStyles();

  return (
    <Box
      className={classnames(className, "contentbox__container")}
      {...props}
      css={styles.root}
    />
  );
};

export default ContentBox;
